import { Stack } from '@mui/system'
import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TopNav = () => {
  return (
    <AppBar>
      <Toolbar>
        <Stack direction='row'>
          <Typography>Chat Buddy</Typography>
          <IconButton aria-label="delete" variant='outlined' color='primary'>
            <DeleteIcon />
          </IconButton>
        </Stack>
    </Toolbar>
    <Toolbar>
        <Stack direction='row'>
          <Typography>Chat Buddy</Typography>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav;