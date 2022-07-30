import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageContainer } from 'components/atoms';

const DefaultLayout: React.FC = () => (
  <PageContainer>
    <Outlet />
  </PageContainer>
);

export default DefaultLayout;
