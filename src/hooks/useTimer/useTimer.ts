import * as React from 'react';

type useTimeOptions = {
    onTimeChange?: (time: number) => void;
}

const useTimer = (initialState?: number, options?: useTimeOptions) => {
  const [timer, setTimer] = React.useState(initialState || 0);
  const countRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleStart = React.useCallback(() => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
      if (options?.onTimeChange) {
        options.onTimeChange(timer + 1);
      }
    }, 1000);
  }, [options, timer]);

  const handlePause = React.useCallback(() => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
  }, []);

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
    setTimer(0);
  };

  return {
    timer, handleStart, handlePause, handleReset,
  };
};

export default useTimer;
