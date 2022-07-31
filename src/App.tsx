import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from 'assets/themes';
import IndexRouter from 'navigations';
import { SocketContextProvider } from './contexts/SocketContext';
import { UserContextProvider } from './contexts/UserContext';

function App(): JSX.Element {
  return (
    <SocketContextProvider>
      <ThemeProvider theme={darkTheme}>
        <UserContextProvider>
          <CssBaseline />
          <IndexRouter />
        </UserContextProvider>
      </ThemeProvider>
    </SocketContextProvider>
  );
}

export default App;
