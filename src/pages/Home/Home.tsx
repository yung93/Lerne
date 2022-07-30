import React from 'react';
import { Typography } from 'components/atoms';
import { Container as MUIContainer } from '@mui/material';
import styled from '@emotion/styled';

import LogoSvg from 'assets/images/logo.svg';
import { Button } from 'components/molecules';
import { useNavigate } from 'react-router-dom';

const Container = styled(MUIContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  height: 80px;
  margin-right: 20px;
`;

const HeaderTitle = styled(Typography)`
  text-transform: uppercase;
  letter-spacing: 8px;
`;

const Content = styled.div`
  flex: 1;
  padding-top: 100px;
  width: 100%;
  text-align: center;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Logo src={LogoSvg} />
        <HeaderTitle typography="h3">Lerne</HeaderTitle>
      </Header>
      <Content>
        <Button
          variant="outlined"
          size="xlarge"
          onClick={() => { navigate('/spelling'); }}
        >
          Spelling
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
