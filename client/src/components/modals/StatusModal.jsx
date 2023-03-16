import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Box, Modal, Backdrop, Fade, Avatar, Stack, Typography, Menu, MenuItem } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/system';

import { closeStatusModal, selectedStatus } from '../../features/statusSlice';

const style = {
  width: '100%',
  height: '100%',
  bgcolor: 'background.default',
  border: '2px solid grey',
  boxShadow: 10,
  p: 2,
  borderRadius: '10px'
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
        <MenuItem onClick={handleClose}>Mute Status</MenuItem>
      </Menu>
    </div>
  );
  }

const StatusModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) =>  state.status.modal );

  const handleClose = () => {
    dispatch(closeStatusModal());
  };

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
        sx={{ padding: '15px' }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Stack direction='row' justifyContent='space-between'>
              <Button onClick={handleClose}><ArrowBack /></Button>
              <Button sx={{width: '100%'}}>
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
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default StatusModal;