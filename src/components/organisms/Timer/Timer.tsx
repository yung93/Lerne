import * as React from 'react';
import { useTimer } from 'hooks/useTimer';
import { Grid, GridProps, Typography } from '@mui/material';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import { formatTime } from 'utils';

interface TimerProps extends GridProps {
    autoStart?: boolean;
    onTimeChange?: (time: number) => void;
}

export interface TimerHandle {
    start: () => void,
    pause: () => number,
    reset: () => number,
    time: number,
}

const Timer = React.forwardRef<TimerHandle, TimerProps>(({
  autoStart = false,
  onTimeChange,
}, ref) => {
  const {
    timer, handleStart, handlePause, handleReset,
  } = useTimer(0, { onTimeChange });

  React.useEffect(() => {
    if (autoStart) {
      handleStart();
    }
    return () => {
      handlePause();
    };
  }, []);

  React.useImperativeHandle(ref, () => ({
    start: () => {
      handleStart();
    },
    pause: () => {
      handlePause();
      return timer;
    },
    reset: () => {
      const time = timer;
      handleReset();
      return time;
    },
    time: timer,
  }));

  return (
    <Grid container alignItems="center" justifyContent="center" columnGap={1}>
      <AccessAlarmRoundedIcon />
      <Typography variant="h6">{formatTime(timer)}</Typography>
    </Grid>
  );
});

export default Timer;
