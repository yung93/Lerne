import * as React from 'react';
import {
  Box, Dialog, DialogProps, Grid, styled,
} from '@mui/material';
import { Typography } from 'components/atoms';

export interface ModalProps extends Omit<DialogProps, 'onClose'> {
    onClose: () => void;
    header?: {
        icon?: JSX.Element;
        title: string;
    };
}

const TitleWrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 10px;
  & .MuiSvgIcon-root{
    font-size: 40px;
  }
`;

const Content = styled(Box)`
  height: 100%;
  overflow: scroll;
  padding: 10px;
`;

const Modal: React.FC<ModalProps> = ({
  children, header, onClose, ...rest
}) => (
  <Dialog onClose={onClose} {...rest}>
    {
        header
              && (
              <TitleWrapper direction="column" alignItems="center" container>
                {header.icon}
                {header.title
                  && (
                  <Typography variant="h5" textAlign="center">
                    {header.title}
                  </Typography>
                  )}
              </TitleWrapper>
              )
      }
    <Content>{children}</Content>
  </Dialog>
);

export default Modal;
