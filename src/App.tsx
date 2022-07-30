import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from 'assets/themes';
import IndexRouter from 'navigations';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <IndexRouter />
    </ThemeProvider>
  );
}

export default App;
