import { PaletteOptions } from '@mui/material';
import {
  grey, red, green,
} from '@mui/material/colors';
import saffron from '../colors/saffron';
import electric from '../colors/electric';

const palette: PaletteOptions = {
  mode: 'dark',
  primary: saffron,
  error: red,
  success: green,
  divider: electric[100],
  background: {
    default: electric[900],
    paper: electric[900],
  },
  text: {
    primary: '#fff',
    secondary: grey[500],
  },
};

export default palette;
