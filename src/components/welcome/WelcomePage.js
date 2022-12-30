import * as React from 'react';
import Box from '@mui/material/Box';
import { MenuItem, Stack, Typography } from '@mui/material';
import Forum from '@mui/icons-material/Forum';

const WelcomePage = () => {
  return (
    <Box
      className='bg-[#282c34] text-white rounded h-full flex flex-col items-center justify-between'
      sx={{
        backgroundColor: 'secondary.main',
        '&:hover': {
          backgroundColor: 'secondary.dark',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Stack direction="column"
        className='flex justify-center items-center bg-green-500'>
      </Stack>
      <Stack direction="column" spacing={2}
        className='flex justify-center items-center pt-12'>
        <MenuItem
          data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000"
        >
          <Forum sx={{fontSize: '50px'}}/>
        </MenuItem>
        <MenuItem
          className='bg-red-500 mb-auto h-full'
          data-aos="zoom-in" data-aos-offset="200" data-aos-duration="500"
        >
          <Typography className='uppercase' variant='h6' component='h1'>
            Chat Buddy
          </Typography>
        </MenuItem>
      </Stack>
      <Stack direction="column" spacing={2}
        className='flex justify-center items-center py-3'>
        <MenuItem>
          <Typography
            variant='span' component='h2'>
            By Kene
          </Typography>
        </MenuItem>
      </Stack>
    </Box>
  );
}

export default WelcomePage;