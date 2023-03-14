import React from 'react';
import { Typography, Button, Box, Modal, Backdrop, Fade } from '@mui/material'
import { styled } from '@mui/system';

const style = {
    width: '100%',
    height: '100%',
    bgcolor: 'background.default',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
})

const FullModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={StyledBackDrop}
            BackdropProps={{
              timeout: 800,
            }}
            sx={{padding: '15px'}}
          >
            <Fade in={open}>
              <Box sx={style}>
                Hello
              </Box>
            </Fade>
          </Modal>
        </div>
    )
}

export default FullModal