import * as React from 'react';
import { IRank } from 'types/rank';

const URL = 'wss://pz1kqp85gg.execute-api.ap-southeast-1.amazonaws.com/production/';

type ContextType = {
  isConnected: boolean;
  ranks: IRank[];
  updateScore: (name: string, avatar: string, score: number, time: number) => void;
}

const SocketContext = React.createContext<ContextType>({
  isConnected: false,
  ranks: [],
  updateScore: () => {},
});

interface SocketContextProviderProps {
    children?: React.ReactNode;
}

const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}) => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [ranks, setRanks] = React.useState<IRank[]>([]);
  const socket = React.useRef<WebSocket | null>(null);

  const onSocketOpen = React.useCallback(() => {
    setIsConnected(true);
    socket.current?.send(JSON.stringify({
      action: 'getRanks',
    }));
  }, []);

  const onSocketClose = React.useCallback(() => {
    setIsConnected(false);
  }, []);

  const onSocketMessage = React.useCallback((dataStr: string) => {
    const data = JSON.parse(dataStr);
    if (data.ranks) {
      setRanks(data.ranks);
    }
  }, []);

  const onConnect = React.useCallback(() => {
    if (socket.current?.readyState !== WebSocket.OPEN) {
      socket.current = new WebSocket(URL);
      socket.current.addEventListener('open', onSocketOpen);
      socket.current.addEventListener('close', onSocketClose);
      socket.current.addEventListener('message', (event) => {
        onSocketMessage(event.data);
      });
    }
  }, [onSocketClose, onSocketMessage, onSocketOpen]);

  const onDisconnect = React.useCallback(() => {
    if (isConnected) {
      socket.current?.close();
    }
  }, [isConnected]);

  React.useEffect(() => {
    onConnect();
    return () => {
      onDisconnect();
    };
  }, []);

  const updateScore = React.useCallback((name: string, avatar: string, score: number, time: number) => {
    if (isConnected) {
      socket.current?.send(JSON.stringify({
        action: 'updateScore',
        name,
        avatar,
        score,
        time,
      }));
    }
  }, [isConnected]);

  return (
    <SocketContext.Provider value={{
      isConnected, ranks, updateScore,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

const useSocket: () => ContextType = () => {
  const context = React.useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketContextProvider');
  }
  return context;
};
export { SocketContextProvider, useSocket };
