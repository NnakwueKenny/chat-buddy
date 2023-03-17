import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Box, Modal, Backdrop, Fade, Avatar, Stack, Typography, Menu, MenuItem } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/system';

import StatusProgress from '../Others/StatusProgress'

import { closeStatusModal, toggleMute } from '../../features/statusSlice';

const style = {
  width: '100%',
  height: '100%',
  bgcolor: 'background.default',
  border: '2px solid grey',
  boxShadow: 10,
  p: 1,
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

const StatusModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) =>  state.status.modal );
  const { selectedStatus } = useSelector((state) =>  state.status );

  const handleClose = () => {
    dispatch(closeStatusModal());
  };

  const statuses = [
    {
      duration: 5000,
    },
    {
      duration: 5000
    },
    {
      duration: 5000,
    },
    {
      duration: 5000
    },
    {
      duration: 30000
    },
  ]

  const getCumulativeDuration = (array, arrIndex, duration) => {
    const filteredArray = array.filter((element, index) => index <= arrIndex );
    const sum = filteredArray.reduce((accumulator, currentValue) => {
      const cumValue = ''
      return accumulator + currentValue.duration;
    }, 0);
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
            <Stack direction='row' justifyContent='space-between'>
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
            <div className='absolute top-20 left-0 w-full h-full border-t border-primary'>
              <Stack direction='row' gap={0.2}>
                {
                  statuses.map((status, index, arr) => (
                    <StatusProgress key={status.id} duration={status.duration}
                    delay={index === 0? 0: getCumulativeDuration(arr, index, status.duration)} />
                  ))
                }
              </Stack>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default StatusModal;