import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from '../Components/NavigationBar/Index';
import { CssBaseline } from '@mui/material';

const AuthPage = React.lazy(() => import("../Pages/Auth/Auth.Page"));

const MyRoutes = () => {
    return (
        <>
            <CssBaseline />
            <NavigationBar />

            <Routes>
                <Route path='/' element={<AuthPage />} />
            </Routes>
        </>
    )

}

export default MyRoutes;