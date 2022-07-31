import React from 'react';
import { Typography } from 'components/atoms';
import {
  Container as MUIContainer, Grid, styled,
} from '@mui/material';

import LogoSvg from 'assets/images/logo.svg';
import { Button } from 'components/molecules';
import { useNavigate } from 'react-router-dom';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { green, red } from '@mui/material/colors';
import { useSocket } from '../../contexts/SocketContext';

const Container = styled(MUIContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled(Grid)`
  margin-top: 50px;
  margin-bottom: 40px;
`;

const Logo = styled('img')`
  height: 80px;
  margin-right: 20px;
`;

const HeaderTitle = styled(Typography)`
  text-transform: uppercase;
  letter-spacing: 8px;
`;

const Content = styled(Grid)`
  flex: 1;
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
`;

const ConnectIndicator = styled(Grid)`
  position: fixed;
  padding: 10px;
`;

const Indicator = styled('div')`
  width: 8px;
  height: 8px;
  border-radius: 10px;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isConnected } = useSocket();
  return (
    <Container>
      <Header container alignItems="center" justifyContent="center">
        <Logo src={LogoSvg} />
        <HeaderTitle typography="h3">Lerne</HeaderTitle>
      </Header>
      <Content direction="column" container alignItems="center" rowGap={2} justifyContent="center">
        <Button
          variant="outlined"
          size="xlarge"
          onClick={() => { navigate('/spelling'); }}
        >
          Spelling
        </Button>
        <Button
          variant="contained"
          size="xlarge"
          onClick={() => { navigate('/leaderboard'); }}
          startIcon={<MilitaryTechRoundedIcon />}
        >
          Leaderboard
        </Button>
      </Content>
      <ConnectIndicator container alignItems="center" columnGap={1} justifyContent="flex-end">
        <Indicator sx={{ bgcolor: isConnected ? green['500'] : red['500'] }} />
        <Typography variant="caption">{isConnected ? 'Connected' : 'Disconnected'}</Typography>
      </ConnectIndicator>
    </Container>
  );
};

export default Home;
