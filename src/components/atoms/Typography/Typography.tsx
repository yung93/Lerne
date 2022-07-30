import * as React from 'react';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';

export type TypographyProps = MUITypographyProps

const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => (
  <MUITypography {...rest}>
    {children}
  </MUITypography>
);

export default Typography;
