import * as React from 'react';
import { IRank } from '../../types/rank';

type ContextType = {
    user?: IRank;
    updateUser: (rank: IRank) => void;
}

const UserContext = React.createContext<ContextType>({
  updateUser: () => {},
});

interface UserContextProviderProps {
    children?: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<IRank>();

  const updateUser = React.useCallback((rank: IRank) => {
    setUser(rank);
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser: () => ContextType = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  return context;
};
export { UserContextProvider, useUser };
