import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'

import { useMediaQuery } from '@mui/material';
import ChatPane from './components/Panes/ChatPane';
import { useRoutes } from 'react-router-dom';
import StatusPane from './components/Panes/StatusPane';
import CallPane from './components/Panes/CallPane';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const router = [
    {
      path: '/',
      element: <Layout />,
      children: [
        // The index route defines what should be displayed
        // on the default route i.e. '/'
        // { index: true, element: <ChatPane /> },
        { path: '/', element: <ChatPane /> },
        { path: '/chats', element: <ChatPane /> },
        { path: '/status', element: <StatusPane /> },
        { path: '/calls', element: <CallPane /> },
        // { path: '/home', element: home },
      ],
    }
  ];
  return useRoutes(router);
}

export default App;