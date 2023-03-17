import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function StatusProgress({ duration, delay }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevValue) => {
          if (prevValue === 100) {
            clearInterval(interval);
            return 100;
          }
          return prevValue + 1;
        });
      }, duration/100);
      return () => clearInterval(interval);
    }, delay);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress}/>
    </Box>
  );
}