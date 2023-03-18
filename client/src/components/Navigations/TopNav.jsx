import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { Box, Tab, Tabs, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';

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
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Typography>
    );
  }
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }
const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  
  const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[600],
    },
  };

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
    
    const [something, setSomething] = React.useState(0);
  
    const handleChangeSomething = (event, newValue) => {
        setSomething(newValue);
    };
  
    const handleChangeIndex = (index) => {
        setSomething(index);
    };
  
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
  
    const fabs = [
      {
        color: 'primary',
        sx: fabStyle,
        icon: <AddIcon />,
        label: 'Add',
      },
      {
        color: 'secondary',
        sx: fabStyle,
        icon: <EditIcon />,
        label: 'Edit',
      },
      {
        color: 'inherit',
        sx: { ...fabStyle, ...fabGreenStyle },
        icon: <UpIcon />,
        label: 'Expand',
      },
    ];

    return (
        <Box sx={{ width: '100%', backgroundColor: 'theme.palette.background.header',  }}>
            <Tabs
                sx={{width: '100%',}}
                value={value}
                variant='fullWidth'
                onChange={handleChangeSomething}
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
            </Tabs> <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={something}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
          {fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={value === index}
              timeout={transitionDuration}
              style={{
                transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
              }}
              unmountOnExit
            >
              <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                {fab.icon}
              </Fab>
            </Zoom>
          ))}
        </Box>
    );
}