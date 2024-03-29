import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { getAllStatus, openStatusModal, getSingleStatus } from '../../features/statusSlice';
import StatusModal from '../modals/StatusModal';
// import PieChart from '../others/PieChart';

const Pane = ({ status, type }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const openModal = (statusID) => {
        dispatch(openStatusModal());
        dispatch(getSingleStatus(statusID));
    }
    return (
        <>
            <Typography px={2} pb={1} pt={2} >
                {
                    type === 'recent' ? 'Recent Status' :
                        type === 'viewed' ? 'Viewed Status' :
                            'Muted Status'
                }
            </Typography>
            {
                status.map(status => (
                    <>
                    <Stack
                        key={status.id} px={3} pb={2}
                        bgcolor='primary' direction='row'
                        gap={1} onClick={() => openModal(status.id)}
                    >
                        <Button
                            sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'end'}}
                        >
                            <Box sx={{ }} className='z-50 absolute h-full w-full flex items-end justify-center'>
                                <Avatar sx={{ height: 48, width: 48,  }}
                                    alt={status.statusData[status.statusData.length-1].media.alt}
                                    src={status.statusData[status.statusData.length-1].media.src} />
                            </Box>
                            <div className='absolute h-full w-full flex items-center justify-center bg-red-400'>
                                {/*<PieChart statusData={status.statusData} />*/}
                            </div>
                        </Button>
                        <Button variant='text'
                            sx={{ width: '100%', textTransform: 'none' }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Stack direction='column' sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', color: 'darkText' }}>
                                    <Typography variant='body1' component='h2' sx={{ color: 'text.primary', fontWeight: '400' }}>{status.userName}</Typography>
                                    <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>{status.lastUpdate}</Typography>
                                </Stack>
                            </Box>
                        </Button>
                    </Stack>
                    <Stack
                        key={status.id} px={3} pb={2}
                        bgcolor='primary' direction='row'
                        gap={1} onClick={() => openModal(status.id)}
                    >
                        <Button
                            sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'end'}}
                        >
                            <Box sx={{ }} className='z-50 absolute h-full w-full flex items-end justify-center'>
                                <Avatar sx={{ height: 48, width: 48,  }}
                                    alt={status.statusData[status.statusData.length-1].media.alt}
                                    src={status.statusData[status.statusData.length-1].media.src} />
                            </Box>
                            <div className='absolute h-full w-full flex items-center justify-center bg-red-400'>
                                {/*<PieChart statusData={status.statusData} />*/}
                            </div>
                        </Button>
                        <Button variant='text'
                            sx={{ width: '100%', textTransform: 'none' }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Stack direction='column' sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', color: 'darkText' }}>
                                    <Typography variant='body1' component='h2' sx={{ color: 'text.primary', fontWeight: '400' }}>{status.userName}</Typography>
                                    <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>{status.lastUpdate}</Typography>
                                </Stack>
                            </Box>
                        </Button>
                    </Stack>
                    </>
                ))
            }
        </>
    )
}

const StatusPane = () => {
    const dispatch = useDispatch();
    const { recentStatus, viewedStatus, mutedStatus } = useSelector((store) => store.status);

    useEffect(() => {
        dispatch(getAllStatus());
    }, [])

    return (
        <Box sx={{ pr: 1, position: 'relative'}}>
            <Grid>
                <Pane status={ recentStatus } type='recent'/>
                <Pane status={ viewedStatus } type='viewed'/>
                <Pane status={ mutedStatus } type='muted'/>
            </Grid>
            <StatusModal />
        </Box>
    )
}

export default StatusPane;