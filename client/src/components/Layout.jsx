import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Outlet, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import TopNav from './Navigations/TopNav';

import { Box } from '@mui/system';
import { Tooltip, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Settings from '@mui/icons-material/Settings';
import User from '@mui/icons-material/Person';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { toggleThemeMode } from '../features/themeSlice';
import StatusModal from './modals/StatusModal';

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
    const navigate = useNavigate();
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

    const NavLinks = [
        {
            name: 'chats',
            icon: <MessageIcon />,
            navigateTo: '/chats',
        },
        {
            name: 'status',
            icon: <AccessTimeIcon />,
            navigateTo: '/status',
        },
        {
            name: 'calls',
            icon: <PhoneIcon />,
            navigateTo: '/calls',
        },
        {
            name: 'settings',
            icon: <Settings />,
            navigateTo: '/settings',
        },
        {
            name: 'profile',
            icon: <User />,
            navigateTo: '/profile',
        },
    ]
    const [open, setOpen] = useState(false);

    return (
        <ThemeProvider theme={appTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography color={appTheme.palette.grey['50']} variant="h6" noWrap component="div">
                        Chat Buddy
                    </Typography>
                </Toolbar>
            </AppBar>
            {
                isBigTabletAndAbove &&
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Divider />
                    <Box sx={{ marginBottom: 'auto', color: 'white' }}>
                        <List>
                            {NavLinks.filter((item, index) => index < 3).map((item, index) => (
                                <>
                                    <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
                                        <Tooltip title={`${item.name.toUpperCase()}`}>
                                            <ListItemButton
                                                onClick={() => navigate(item.navigateTo)}
                                                sx={{
                                                    minHeight: 48,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2.5,
                                                }}
                                            >
                                                {item.icon}
                                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </Tooltip>
                                    </ListItem>
                                    <Divider />
                                </>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{color: 'white' }}>
                        <Divider />
                        <List>
                            {NavLinks.filter((item, index) => index > 2).map((item, index) => (
                                <>
                                    <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
                                        <Tooltip title={`${item.name.toUpperCase()}`}>
                                            <ListItemButton
                                                onClick={() => navigate(item.navigateTo)}
                                                sx={{
                                                    minHeight: 48,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2.5,
                                                }}
                                            >
                                                {item.icon}
                                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </Tooltip>
                                    </ListItem>
                                    <Divider />
                                </>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            }
            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                <DrawerHeader />
                {
                    isPhoneAndMediumTablet &&
                    <TopNav />
                }
                <Outlet />
                <StatusModal />
            </Box>
        </Box>
        </ThemeProvider>
    );
}

export default Layout;