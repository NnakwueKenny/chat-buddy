import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Typography, IconButton, Avatar, Chip, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ArrowBack from '@mui/icons-material/ArrowBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import BasicMenu from '../others/BasicMenu';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
// import 'emoji-mart/css/emoji-mart.css';

const mainMenuItems = [
    {
        text: 'Settings',
        action: () => { console.log('Settings Clicked')}
    },
    {
        text: 'View contact',
        action: () => { console.log('View contact Clicked')}
    },
    {
        text: 'Mute',
        action: () => { console.log('Mute Clicked')}
    },
    {
        text: 'Something',
        action: () => { console.log('Something Clicked')}
    },
]

const MessageItem = ({ sender, message, variant, justify }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: justify, width: '100%' }}>
            <Stack
                direction="row" justifyContent={justify}
                mb={2} position='relative' className='w-72'
                sx={{ color: `${variant === 'filled'? 'primary.main': 'text.secondary'}`}}
            >
                <span className='absolute z-10 text-sm top-0 left-0 px-3 py-1'>{sender}</span>
                <Chip
                    sx={{
                        height: 'auto',
                        width: '100%',
                        paddingTop: 3,
                        paddingBottom: 3,
                        justifyContent: 'start',
                        textAlign: 'left',
                        '& .MuiChip-label': {
                            display: 'block',
                            whiteSpace: 'normal',
                        },
                    }}
                    label={message} size='medium'
                    component="label" clickable variant={variant}
                />
                <span className='absolute z-10 text-xs bottom-0 right-0 w-full flex justify-end px-3 py-0.5 bg-black bg-opacity-[5%] rounded-b-2xl'>13:34</span>
            </Stack>
        </Box>
    )
}

const DateItem = ({ content }) => {
    return (
        <Stack direction="row" justifyContent='center' spacing={1} pb={2}>
            <Chip
                label={content} size='small'
                component="button" clickable variant="outlined"
            />
        </Stack>
    )
}

const Conversation = () => {
    const theme = useTheme();
    // const EmojiKeyboard = new Picker()
    const navigate = useNavigate();
    const { selectedStatus } = useSelector((state) =>  state.status );
    const [selectedEmoji, setSelectedEmoji] = useState(null);
  
    const handleEmojiSelect = (emoji) => {
      setSelectedEmoji(emoji.native);
    }

    return (
        <div className='absolute flex flex-col top-0 left-0 w-full h-full bg-white z-[99999]'>
            <div className='bg-primary py-3 flex justify-between'>
                <div className='flex items-center'>
                    <IconButton
                        onClick={() => navigate('/chats')} component="button"
                        sx={{ color: 'primary.light'}} aria-label="go to home page"
                    >
                        <ArrowBack/>
                    </IconButton>
                    <Avatar sx={{ height: 40, width: 40,  }}
                        alt=''
                        src={'something something'}
                    />
                    <Typography px={1} sx={{ color: 'primary.light'}}>Kene Nnakwue</Typography>
                </div>
                <div className='flex items-center'>
                    <IconButton
                        onClick={() => console.log('Clicked!')} component="button"
                        sx={{ color: 'primary.light'}} aria-label="go to home page"
                    >
                        <VideoCallIcon/>
                    </IconButton>
                    <IconButton
                        size='small'
                        onClick={() => console.log('Clicked!')} component="button"
                        sx={{ color: 'primary.light' }} aria-label="go to home page"
                    >
                        <LocalPhoneIcon />
                    </IconButton>
                    <BasicMenu menuItems={ mainMenuItems } color='primary.light' />
                </div>
            </div>
            <div className='h-full overflow-auto py-3 px-4'>
                <DateItem content={'22 March, 2023'}/>
                <MessageItem
                    color='primary' variant='none' justify='left'
                    message='Hello!' sender='Kene Nnakwue'
                />
                <MessageItem
                    color='primary' variant='none' justify='left'
                    message='Hello! Hi! How are you? What is happening to you? I have been looking for you all these while...' sender='Kene Nnakwue'
                />
                <MessageItem
                    color='primary' variant='filled' justify='right'
                    message='Hi! How are you? What is happening to you? I have been looking for you all these while...' sender='Me'
                />
                <Box className='flex flex-col items-center justify-center '>
                    <Chip
                        sx={{
                            height: 'auto',
                            width: '100%',
                            paddingTop: 3,
                            paddingBottom: 3,
                            justifyContent: 'start',
                            textAlign: 'left',
                            '& .MuiChip-label': {
                                display: 'block',
                                whiteSpace: 'normal',
                            },
                        }}
                        size='medium' variant='filled'
                        label={
                            <ArrowBack/>
                        }
                    />
                    <Picker
                        style={{ display: 'flex', flexDirection: 'column', width: '100%'}}
                        data={data} emojiSize={18} previewPosition='none' perLine={8}
                        theme={theme.mode}
                        onEmojiSelect={(e) => console.log('Emoji Selected!', e.native)}
                    />
                </Box>
            </div>
        </div>
    )
}

export default Conversation;

// dynamicWidth={true}
// perLine={20}