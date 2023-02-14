import { Box, Stack } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TopNav = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AppBar sx={{ backgroundColor: 'transparent' }}>
            <Toolbar>
                <Box direction='column'>
                    <Stack direction='row'>
                        <Box>
                            <Typography color='primary'>Chat Buddy</Typography>
                        </Box>
                        <Box>
                            <IconButton aria-label="delete" variant='outlined'>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Box sx={{ width: '100%', color: 'green' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopNav;