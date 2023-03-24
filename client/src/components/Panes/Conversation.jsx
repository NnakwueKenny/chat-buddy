import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Typography, IconButton, Avatar, Chip, Stack, Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ArrowBack from '@mui/icons-material/ArrowBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SendIcon from '@mui/icons-material/Send';
import MicNoneIcon from '@mui/icons-material/MicNone';

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
                mb={2} position='relative' className='w-72 md:w-80 lg:w-full max-w-[450px]'
                sx={{ color: `${variant === 'filled'? 'primary.main': 'text.secondary'}`}}
            >
                <span className='absolute z-10 text-sm top-0 left-0 px-3 py-1 font-medium'>{sender}</span>
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

    const [ isTyping, setIsTyping ] = useState(false);
    const [ showNormalKeyboard, setShowNormalKeyboard ] = useState(true);
    const toggleKeyBoardType = () => {
        console.log('Keyboard toggled');
        setShowNormalKeyboard(prevVal => !prevVal);
    }
    
    const [ message, setMessage ] = useState('');

    return (
        <div className='fixed flex flex-col top-0 left-0 w-full h-full bg-white z-[99999]'>
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
            <Box className='mb-auto h-full overflow-auto px-4 pt-3'>
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
                <MessageItem
                    color='primary' variant='filled' justify='right'
                    message='Hi! How are you? What is happening to you? I have been looking for you all these while...' sender='Me'
                />
                <MessageItem
                    color='primary' variant='none' justify='left'
                    message='Hello! Hi! How are you? What is happening to you? I have been looking for you all these while...' sender='Kene Nnakwue'
                />
                <MessageItem
                    color='primary' variant='filled' justify='right'
                    message='Hi! How are you? What is happening to you? I have been looking for you all these while...' sender='Me'
                />
                <MessageItem
                    color='primary' variant='filled' justify='right'
                    message='Hi! How are you? What is happening to you? I have been looking for you all these while...' sender='Me'
                />
            </Box>
            <div className='w-full flex flex-col items-center justify-center px-1 bg-black bg-opacity-5'>
                <Stack
                    className='w-96 md:w-full md:max-w-[700px] py-4 px-2'
                    direction='row'
                >
                    <div className={`flex items-center justify-center w-full ${isTyping? 'bg-primary bg-opacity-10': 'bg-black bg-opacity-10'} rounded-lg p-2`}>
                        <IconButton
                            size='small' component="button"
                            sx={{ color: `${isTyping? 'primary.main': 'text.secondary'}` }} aria-label="go to home page"
                            id="keyboard-toggle-button"
                            aria-haspopup="true"
                            onClick={() => toggleKeyBoardType()}
                        >
                            <>
                                {
                                    !showNormalKeyboard &&
                                    <KeyboardIcon color='primary.main'/>
                                }
                                {
                                    showNormalKeyboard &&
                                    <EmojiEmotionsIcon />
                                }
                            </>
                        </IconButton>
                        <TextField
                            id="standard-multiline-flexible"
                            sx={{ width: '100%' }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onFocus={() => { setIsTyping(true) }}
                            onBlur={() => { setIsTyping(false) }}
                            multiline maxRows={3} variant="standard"
                            placeholder='Your message here...'
                        />
                        <IconButton
                            size='small' component="button" aria-label="go to home page"
                            id="keyboard-toggle-button" aria-haspopup="true"
                            onClick={() => toggleKeyBoardType()}
                            sx={{ color: 'text.primary', zIndex: 999999999 }}
                        >
                            {
                                message.length > 0?
                                <SendIcon />
                                :
                                <MicNoneIcon />
                            }
                        </IconButton>
                    </div>
                </Stack>
                {
                    !showNormalKeyboard &&
                    <Picker
                        style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100px'}}
                        data={data} emojiSize={18} previewPosition='none' perLine={11}
                        emojiButtonSize={30} theme={theme.mode}
                        onClickOutside={() => console.log(false)}
                        onEmojiSelect={(e) => setMessage(prevVal => prevVal + e.native)}
                    />
                }
            </div>
        </div>
    )
}

export default Conversation;

// dynamicWidth={true}
// perLine={20}