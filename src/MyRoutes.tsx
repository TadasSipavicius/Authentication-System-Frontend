import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar/Index';
import { CssBaseline } from '@mui/material';
import { Routes as routes } from './Globals/Index';

const AuthPage = React.lazy(() => import("./Pages/Auth/Auth.Page"));
const UserProfile = React.lazy(() => import('./Pages/UserProfile/UserProfile.Page'));

const MyRoutes = () => {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <CssBaseline />
            <NavigationBar />

            <Routes>
                <Route path={routes.AuthPage.pathName} element={<AuthPage />} />
                <Route path={routes.UserProfile.pathName} element={<UserProfile />} />
            </Routes>
        </Suspense>
    )

}

export default MyRoutes;