import * as React from 'react';
import { Container, Grid } from '@mui/material';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { useSocket } from 'contexts/SocketContext';
import { Typography } from 'components/atoms';
import { RankTable } from 'components/organisms';

const Leaderboard: React.FC = () => {
  const { ranks } = useSocket();
  return (
    <Container>
      <Grid container alignItems="center" columnGap={2} justifyContent="center" mt={5}>
        <MilitaryTechRoundedIcon fontSize="large" />
        <Typography variant="h4">Leaderboard</Typography>
      </Grid>
      <RankTable ranks={ranks} />
    </Container>
  );
};

export default Leaderboard;
