import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Box, Modal, Backdrop, Fade, Avatar, Stack, Typography, Menu, MenuItem, Divider } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import StatusProgress from '../others/StatusProgress';
import PieChart from '../others/PieChart'

import { closeStatusModal, toggleMute } from '../../features/statusSlice';

const style = {
  width: '100%',
  height: '100%',
  bgcolor: 'background.default',
  border: '2px solid grey',
  boxShadow: 10,
  p: 0,
  display: 'flex',
  flexDirection: 'column'
};

const StyledBackDrop = styled(Backdrop, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  },
})({
  zIndex: -1,
});

const BasicMenu = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        component='div'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { dispatch(toggleMute()); handleClose(); }}>Mute Status</MenuItem>
      </Menu>
    </div>
  );
}

const status = {
  id: 0,
  muted: false,
  userName: 'Kene Nnakwue',
  profilePicture: '',
  lastUpdate: 'Today, 12:36',
  statusData: [
      {
          id: 1,
          media: {
              alt: '',
              duration: 5000,
              src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          },
          read: false, 
      },
      {
          id: 2,
          media: {
              alt: '',
              duration: 5000,
              src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          },
          read: false, 
      },
  ],
}

const StatusModal = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) =>  state.status.modal );
  const { selectedStatus } = useSelector((state) =>  state.status );

  const handleClose = () => {
    dispatch(closeStatusModal());
  };
  const [ showStatusCount, setShowStatusCount ] = useState(false);
  const toggleShowStatusCount = (toggleValue) => setShowStatusCount(prevVal => !prevVal)

  const getCumulativeDuration = (array, arrIndex, duration) => {
    const filteredArray = array.filter((element, index) => index <= arrIndex );
    const sum = filteredArray.reduce((accumulator, currentValue, index) => {
      return index === 0? 0: accumulator + currentValue.media.duration;
    }, 0);
    if (arrIndex === array.length-1) setTimeout(() => dispatch(handleClose()), sum)
    return sum;
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={StyledBackDrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Stack direction='row' onClick={() => setShowStatusCount(false)}
              justifyContent='space-between'
            >
              <Button onClick={handleClose}><ArrowBack /></Button>
              <Button variant='text' sx={{width: '100%', textTransform: 'none', color: 'text.primary' }}>
                <Stack sx={{width: '100%'}} direction='row' alignItems='center' spacing={1.5}>
                  <Avatar sx={{ height: 48, width: 48, }}
                    alt={'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                    src={'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                  />
                  <Typography>{selectedStatus.userName}</Typography>
                </Stack>
              </Button>
              <BasicMenu />
            </Stack>
            <div className='flex flex-col h-full px-2'>
              <Stack direction='row' gap={0.2}>
                {
                  selectedStatus.statusData.map((status, index, arr) => (
                    <>
                      <StatusProgress key={status.id}
                        duration={status.media.duration}
                        delay={getCumulativeDuration(arr, index, status.media.duration)}
                      />
                    </>
                  ))
                }
              </Stack>
              <div
                className='relative flex justify-center h-full items-center w-full'
              >
                  {selectedStatus.statusData.map((item, index, arr) => (
                    index === arr.length-1 &&
                      <div
                        className='flex justify-center w-full h-full items-center' 
                        onClick={() => setShowStatusCount(false)}
                      >
                        <img
                          className='object-fit w-auto max-w-[850px] h-full max-h-[550px]'
                          src={item.media.src}
                          alt='status-img'
                          loading="lazy"
                        />
                      </div>
                  ))}
                  <div
                    className='rounded-t-xl shadow-xl bg-white dark:bg-gray-700 absolute bottom-0 w-full max-w-3xl flex flex-col items-center px-2 divide-y divide-primary'>
                    <Button onClick={toggleShowStatusCount} 
                      className='flex flex-col items-center w-full'>
                      20
                      <VisibilityIcon />
                    </Button>
                    <Box bgcolor='background.default' className={`${showStatusCount? 'flex flex-col gap-2 max-h-96 overflow-auto': 'hidden'} py-3 w-full`}>
                      {  ['a', 'b', 'c', 'd'].map( () => (
                        <Stack
                            px={3} direction='row' alignItems='center'
                            gap={1}
                            width='100%'
                          >
                          <div className='z-50 h-12 w-12 flex items-end justify-center rounded-full overflow-hidden'>
                            <img alt='something' className='obfect-fit w-full h-full'
                              src='https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            />
                          </div>
                          <Box sx={{ }}>
                            <Stack direction='column' sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', color: 'darkText' }}>
                              <Typography variant='body1' component='h2' sx={{ color: 'text.primary', fontWeight: '400' }}>{status.userName}</Typography>
                              <Typography variant='caption' noWrap sx={{ width: '100%', color: theme.palette.text.secondary, display: 'flex', justifyContent: 'start' }} component='h2'>{status.lastUpdate}</Typography>
                            </Stack>
                          </Box>
                          </Stack>
                        ))
                      }
                    </Box>
                  </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default StatusModal;