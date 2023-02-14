import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Box, Container } from '@mui/system';
import { purple, red, grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopNav from './components/Navigations/TopNav';
import { Toolbar, Typography, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            // main: purple[500],
            // main: grey[500],
            main: purple[500],
            light: '#757ce8',
            dark: '#002884',
            // dark: purple[200],
            contrastText: '#fff',
          },
          secondary: {
            main: '#f44336',
            light: '',
            dark: '#000000'
          },
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="">
        <Container disableGutters={true} >
          <Box sx={{ height: '100vh', width: '100%' }}>
            <TopNav/>
            <Toolbar />
            <Toolbar />
            <Box>All other should be here of course components here</Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
