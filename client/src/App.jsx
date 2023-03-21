import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';

import { useMediaQuery } from '@mui/material';
import Layout from './components/Layout'
import ChatPane from './components/Panes/ChatPane';
import Conversation from './components/Panes/Conversation';
import StatusPane from './components/Panes/StatusPane';
import CallPane from './components/Panes/CallPane';

const App = () => {

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
        { path: '/chats/:chatID', element: <Conversation /> },
        { path: '/status', element: <StatusPane /> },
        { path: '/calls', element: <CallPane /> },
        // { path: '/home', element: home },
      ],
    }
  ];
  return useRoutes(router);
}

export default App;