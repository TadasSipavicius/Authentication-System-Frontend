import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { theme } from './Globals/Theme';
import HomePage from './Pages/Home/Home.Page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
