import * as React from 'react';
import {
  Container,
  ContainerProps,
} from '@mui/material';
import styled from '@emotion/styled';

type PageContainerProps = ContainerProps;

const StyledContainer = styled(Container)`
  height: 100%;
`;

const PageContainer: React.FC<PageContainerProps> = ({ children, ...rest }) => (
  <React.Suspense fallback={<div data-testid="pageLoader">Loading...</div>}>
    <StyledContainer maxWidth="md" {...rest}>{children}</StyledContainer>
  </React.Suspense>
);

export default PageContainer;
