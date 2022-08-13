import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { theme } from './Globals/Theme';

const AuthPage = React.lazy(() => import("./Pages/Auth/Auth.Page"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />

      <Routes>
        <Route path='/' element={<AuthPage />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;
