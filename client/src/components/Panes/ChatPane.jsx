import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';

const allChats = [
  {
    id: '0',
    profileImage: '',
    alt: "Kene Nnakwue's Profile Picture",
    chatName: 'Kene Nnakwue',
    lastMessage: 'Hello! How are you doing? I am looking forward to hearing from you...',
    timeReceived: '19:58',
    unreadMessages: 30
  },
  {
    id: '1',
    profileImage: '',
    alt: "Faruq Hassan's Profile Picture",
    chatName: 'Faruq Hassan',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '23:58',
    unreadMessages: 100
  },
  {
    id: '2',
    profileImage: '',
    alt: "Nonso Nnakwue's Profile Picture",
    chatName: 'Nonso Nnakwue',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '13:36',
    unreadMessages: 45
  },
  {
    id: '3',
    profileImage: '',
    alt: "Nonso Nnakwue's Profile Picture",
    chatName: 'Nonso Nnakwue',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '13:36',
    unreadMessages: 45
  },
  {
    id: '4',
    profileImage: '',
    alt: "Nonso Nnakwue's Profile Picture",
    chatName: 'Nonso Nnakwue',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '13:36',
    unreadMessages: 45
  },
  {
    id: '5',
    profileImage: '',
    alt: "Nonso Nnakwue's Profile Picture",
    chatName: 'Nonso Nnakwue',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '13:36',
    unreadMessages: 45
  },
  {
    id: '6',
    profileImage: '',
    alt: "Nonso Nnakwue's Profile Picture",
    chatName: 'Nonso Nnakwue',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '13:36',
    unreadMessages: 45
  },
  {
    id: '7',
    profileImage: '',
    alt: "Fatima Muhammad's Profile Picture",
    chatName: 'Fatima Muhammad',
    lastMessage: 'I am fine. How have you been...?',
    timeReceived: '20:58',
    unreadMessages: 12
  },
];

const ChatPane = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {
        ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'].map(() => <Stack
          p={1} bgcolor='primary'
          direction='row' gap={1}
          sx={{ width: '100%', overflow: 'hidden' }}
        >
          <Button>
            <Avatar sx={{ height: 48, width: 48 }} alt={'chat.alt'} src="/static/images/avatar/1.jpg" />
          </Button>
          <Button variant='text' onClick={() => navigate(`/chats/chatID`)}
            sx={{ width: '100%', textTransform: 'none', display: 'flex', flexDirection: 'column' }}
          >
            <Stack direction='row' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'darkText', width: '100%' }}>
              <Typography variant='body1' component='h2' sx={{ color: theme.palette.text.primary, fontWeight: '400' }}>{'Kene Nnakwue'}</Typography>
              <Typography variant='caption' component='h2' sx={{ color: theme.palette.text.unreadMessage }}>{'13:46'}</Typography>
            </Stack>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', gap: '5px' }}>
              <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>chat.lastMessage</Typography>
              <div className='flex justify-center items-center bg-primary text-white rounded-full text-[10px] min-w-[20px] px-[5px]'>
                <span>`99+`</span>
              </div>
            </Stack>
          </Button>
        </Stack>)
      }
    </>
  )
}

export default ChatPane;

// {
//   allChats.map(chat => (
//     <Stack
//       key={chat.id} p={1} bgcolor='primary'
//       direction='row' gap={1}
//       sx={{ width:'100%', overflow: 'hidden' }}
//     >
//       <Button>
//         <Avatar sx={{height: 48, width: 48 }} alt={chat.alt} src="/static/images/avatar/1.jpg" />
//       </Button>
//       <Button variant='text' onClick={() => navigate(`/chats/chatID`)}
//         sx={{width: '100%', textTransform: 'none', display: 'flex', flexDirection: 'column'}}
//       >
//         <Stack direction='row' sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'darkText', backgroundColor: 'green', width: '100%'}}>
//           <Typography variant='body1' component='h2' sx={{ color: theme.palette.text.primary, fontWeight: '400' }}>{chat.chatName}</Typography>
//           <Typography variant='caption' component='h2' sx={{ color: theme.palette.text.unreadMessage }}>{chat.timeReceived}</Typography>
//         </Stack>
//         <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between', gap: '5px' }}>
//           <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>{chat.lastMessage}</Typography>
//           <div className='flex justify-center items-center bg-primary text-white rounded-full text-[10px] min-w-[20px] px-[5px]'>
//             <span>{chat.unreadMessages <100 ? chat.unreadMessages: `99+`}</span>
//           </div>
//         </Stack>
//       </Button>
//     </Stack>
//   ))
// }