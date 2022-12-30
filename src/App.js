import { Box } from '@mui/material';
import './App.css';
import logo  from './assets/images/logo.jpg';

// Import components
import WelcomePage from './components/welcome/WelcomePage';

const App = () => {
  console.log('Hello')
  return (
    <Box className="h-screen">
      <WelcomePage />
    </Box>
  );
}

export default App;
