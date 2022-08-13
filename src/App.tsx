import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { theme } from './Globals/Theme';

const HomePage = React.lazy(() => import("./Pages/Home/Home.Page"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;
