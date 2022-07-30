import * as React from 'react';
import { Skeleton as MUISkeleton, SkeletonProps as MUISkeletonProps } from '@mui/material';
import styled from '@emotion/styled';
import { Typography } from '../Typography';

interface SkeletonProps extends MUISkeletonProps {
    type: 'vocab'
}

const VocabSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: stretch;
  align-items: center;
`;

const QuestionSkeleton = styled(MUISkeleton)`
  width: 100%;
`;

const Skeleton: React.FC<SkeletonProps> = ({ children, type, ...rest }) => (
  <VocabSkeletonContainer>
    <Typography variant="h3" width="100%"><QuestionSkeleton variant="text" width="100%" /></Typography>
    <Typography variant="h5" width="50%"><QuestionSkeleton variant="text" /></Typography>
  </VocabSkeletonContainer>
);

export default Skeleton;
