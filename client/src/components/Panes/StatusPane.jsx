import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

function PieChart({ statusData }) {
    const [chartData, setChartData] = useState({
        datasets: [
            {
                label: 'Status',
                data: statusData.map(item => 1),
                backgroundColor: statusData.map(status => status.viewed? 'grey': 'purple'),
                borderColor: "white",
                borderWidth: 2
            }
        ]
    });

    return (
        <div className="chart-container w-[68px] flex justify-center items-center bg-red-500 pb-[2px]">
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                        }
                    }
                }}
            />
        </div>
    );
}

const StatusPane = () => {
    const theme = useTheme();

    const recentStatus = [
        {
            id: 0,
            userName: 'Kene Nnakwue',
            lastUpdate: 'Today, 12:36',
            statusData: [
                {
                    id: 1,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    read: false, 
                },
                {
                    id: 2,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    read: false, 
                },
            ],
        },
        {
            id: 1,
            userName: 'Fatima Muhammad',
            lastUpdate: 'Today, 12:36',
            statusData: [
                {
                    id: 2,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    read: false, 
                },
                {
                    id: 3,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    read: false, 
                },
            ],
        },
    ];

    const viewedStatus = [
        {
            id: 0,
            userName: 'Kene Nnakwue',
            lastUpdate: 'Today, 12:36',
            statusData: [
                {
                    id: 1,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    viewed: true, 
                },
                {
                    id: 2,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    viewed: true, 
                },
            ],
        },
        {
            id: 1,
            userName: 'Fatima Muhammad',
            lastUpdate: 'Today, 12:36',
            statusData: [
                {
                    id: 1,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    viewed: true, 
                },
                {
                    id: 2,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    viewed: true, 
                },
                {
                    id: 3,
                    media: {
                        alt: '',
                        src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    },
                    viewed: true, 
                },
            ],
        },
    ]

    return (
        <Box sx={{ pr: 1 }}>
            <Grid>
                <Typography px={3} py={2} >Recent Updates</Typography>
                {
                    recentStatus.map(status => (
                        <Stack key={status.id} p={1} bgcolor='primary' direction='row' gap={1}>
                            <Button sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                                <Box sx={{ }} className='z-50 absolute h-full w-full flex items-end justify-center'>
                                    <Avatar sx={{ height: 48, width: 48,  }}
                                        alt={status.statusData[status.statusData.length-1].media.alt}
                                        src={status.statusData[status.statusData.length-1].media.src || "/static/images/avatar/1.jpg"} />
                                </Box>
                                <div className='absolute h-full w-full flex items-center justify-center bg-red-400'>
                                    <PieChart statusData={status.statusData} />
                                </div>
                            </Button>
                            <Button variant='text' sx={{ width: '100%', textTransform: 'none' }}>
                                <Box sx={{ width: '100%' }}>
                                    <Stack direction='column' sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', color: 'darkText' }}>
                                        <Typography variant='body1' component='h2' sx={{ color: theme.palette.text.primary, fontWeight: '400' }}>{status.userName}</Typography>
                                        <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>{status.lastUpdate}</Typography>
                                    </Stack>
                                </Box>
                            </Button>
                        </Stack>
                    ))
                }

                <Typography px={3} py={2} >Viewed Updates</Typography>
                {
                    viewedStatus.map(status => (
                        <Stack key={status.id} p={1} bgcolor='primary' direction='row' gap={1} >
                            <Button sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                                <Box sx={{ }} className='z-50 absolute h-full w-full flex items-end justify-center'>
                                    <Avatar sx={{ height: 48, width: 48,  }}
                                        alt={status.statusData[status.statusData.length-1].media.alt}
                                        src={status.statusData[status.statusData.length-1].media.src || "/static/images/avatar/1.jpg"} />
                                </Box>
                                <div className='absolute h-full w-full flex items-center justify-center bg-red-400'>
                                    <PieChart statusData={status.statusData} />
                                </div>
                            </Button>
                            <Button variant='text' sx={{ width: '100%', textTransform: 'none' }}>
                                <Box sx={{ width: '100%' }}>
                                    <Stack direction='column' sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', color: 'darkText' }}>
                                        <Typography variant='body1' component='h2' sx={{ color: theme.palette.text.primary, fontWeight: '400' }}>{status.userName}</Typography>
                                        <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>{status.lastUpdate}</Typography>
                                    </Stack>
                                </Box>
                            </Button>
                        </Stack>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default StatusPane;