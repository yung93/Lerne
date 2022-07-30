import * as React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import styled from '@emotion/styled';
import { Typography } from 'components/atoms';

type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';

interface ButtonProps extends Omit<MUIButtonProps, 'size'> {
    size?: ButtonSize;
}

const StyledButton = styled(MUIButton)`
   &.MuiButton-sizeXLarge {
     width: 100%;
     max-width: 350px;
     height: 100px;
     border-width: 5px;
     border-radius: 20px;
     letter-spacing: 5px;
   }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  size = 'large',
  ...rest
}, ref) => {
  const sizeMapper:
      (size: ButtonSize) => 'small' | 'medium' | 'large' = (size) => {
        switch (size) {
          case 'xlarge':
            return 'large';
          default:
            return size;
        }
      };
  const classMapper:
      (size: ButtonSize) => string = (size) => {
        switch (size) {
          case 'xlarge':
            return 'MuiButton-sizeXLarge';
          default:
            return size;
        }
      };
  return (
    <StyledButton
      size={sizeMapper(size)}
      className={classMapper(size)}
      ref={ref}
      {...rest}
    >
      <Typography variant="h5">{children}</Typography>
    </StyledButton>
  );
});

export default Button;
