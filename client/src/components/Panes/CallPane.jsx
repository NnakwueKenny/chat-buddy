import React from 'react';

import Box from '@mui/material/Box';
import { Avatar, Badge, Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';

const CallPane = () => {
  const theme = useTheme();
  return (
    <Box sx={{ pr: 1}}>
      <Grid>
      <div className='px-4 pt-3'>
        <Typography>All Calls</Typography>
      </div>
      </Grid>
    </Box>
  )
}

export default CallPane;