import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { Box, Tab, Tabs, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function LinkTab(props) {
    const navigate = useNavigate();
    return (
        <Tab
            component="button"
            onClick={(event) => {
                // event.preventDefault()
                navigate(props.navigateto);
            }}
            sx={{ display: 'flex', justifyContent: 'center' }}
            {...props}
        />
    );
}
  
export default function TopNav() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [value, setValue] = React.useState('one');
    const theme = useTheme();
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const LinkValues = [
        {
            icon: <MessageIcon />,
            navigateto: '/chats',
            value: currentPath === '/chats' || currentPath === '/'? 'one': currentPath === '/status'? 'three': 'two',
            label: 'Chats'
        },
        {
            icon: <AccessTimeIcon />,
            navigateto: '/status',
            value: currentPath === '/status'? 'one': currentPath === '/calls'? 'three': 'two',
            label: 'Status'
        },
        {
            icon: <PhoneIcon />,
            navigateto: '/calls',
            value: currentPath === '/calls'? 'one': currentPath === '/chats' || currentPath === '/'? 'three': 'two',
            label: 'Calls'
        },
    ]

    return (
        <Box sx={{ width: '100%', backgroundColor: 'theme.palette.background.header',  }}>
            <Tabs
                sx={{width: '100%',}}
                value={value}
                variant='fullWidth'
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="primary tabs example"
                selectionFollowsFocus
            >
                {
                    LinkValues.map(item => (
                        <LinkTab
                        key={item.value}
                        navigateto={item.navigateto}
                        icon={item.icon}
                        iconPosition='start'
                        value={item.value} label={item.label}/>)
                    )
                }
            </Tabs>
        </Box>
    );
}