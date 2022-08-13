import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { theme } from './Globals/Theme';

const LoginPage = React.lazy(() => import("./Pages/Login/Login.Page"));
const RegisterPage = React.lazy(() => import("./Pages/Register/Register.Page"));
const ForgotPasswordPage = React.lazy(() => import("./Pages/ForgotPassowrd/ForgotPassword.Page"));
const UserProfilePage = React.lazy(() => import("./Pages/UserProfile/UserProfile.Page"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgotpassword' element={<ForgotPasswordPage />} />
        <Route path='/userprofile' element={<UserProfilePage />} />
      </Routes>
        
    </ThemeProvider>
  );
}

export default App;
