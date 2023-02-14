import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Box, Container } from '@mui/system';
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TopNav from './components/Navigations/TopNav';
import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: purple[500]
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
        <Container disableGutters={true} color='primary'>
          <Box sx={{ padding: 0, height: '100vh', width: '100%', margin: 0, color: 'primary' }}>
            <TopNav/>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
