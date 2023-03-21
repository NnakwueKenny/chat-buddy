import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import TopNav from './Navigations/TopNav';
import SideNav from './Navigations/SideNav';

import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { toggleThemeMode } from '../features/themeSlice';

const drawerWidth =65;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Layout = () => {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isPhoneAndMediumTablet = useMediaQuery('(max-width:700px)');
  const isBigTabletAndAbove = useMediaQuery('(min-width:701px)');

  const { theme } = useSelector((store) => store.theme);
  const appTheme = useMemo(
    () =>
      createTheme(theme),
    [theme]
  );

  useEffect(() => {
    dispatch(toggleThemeMode(prefersDarkMode ? 'dark' : 'light',));
  }, [dispatch, prefersDarkMode]);

  return (
    <ThemeProvider theme={appTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color={appTheme.palette.grey['50']} variant="h6" noWrap component="div">
              Chat Buddy
            </Typography>
          </Toolbar>
          {
            isPhoneAndMediumTablet &&
            <TopNav />
          }
        </AppBar>
        {
          isBigTabletAndAbove &&
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              color: 'text.secondary',
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <Divider />
            <SideNav />
          </Drawer>
        }
        <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
          {
            isPhoneAndMediumTablet &&
            <>
              <Toolbar />
            </>
          }
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;