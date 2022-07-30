import { createTheme } from '@mui/material';
import palette from './palette';

const theme = createTheme({
  palette,
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
});

export default theme;
