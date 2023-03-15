import React, { useState } from 'react';
import { Box, List, ListItem, Tooltip, ListItemButton, ListItemText, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Settings from '@mui/icons-material/Settings';
import User from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';

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
const SideNav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box sx={{ marginBottom: 'auto', color: 'primary.main', }}>
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
            <Box sx={{ color: 'primary.main' }}>
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
        </>
    )
}

export default SideNav;