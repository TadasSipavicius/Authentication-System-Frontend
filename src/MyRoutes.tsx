import React, { Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar/Index';
import { CssBaseline } from '@mui/material';
import { Routes as routes } from './Globals/Index';
import { Authentication } from './Globals/contexts/Context';
import { Auth } from './Globals/contexts/types/ContextTypes';

const AuthPage = React.lazy(() => import("./Pages/Auth/Auth.Page"));
const UserProfile = React.lazy(() => import('./Pages/UserProfile/UserProfile.Page'));
const BasketballPlayers = React.lazy(() => import('./Pages/BasketballPlayers/BasketballPlayers.Page'));
const UserTeams = React.lazy(() => import('./Pages/UserTeams/UserTeams.Page'));

const MyRoutes = () => {

    const { authenticated } = useContext(Authentication) as Auth;

    return (
        <Suspense fallback={<div>Loading... </div>}>
            <CssBaseline />
            <NavigationBar />

            <Routes>
                <Route path={routes.AuthPage.pathName} element={<AuthPage />} />
                <Route path={routes.UserProfile.pathName} element={<UserProfile />} />
                <Route path={routes.BasketballPlayers.pathName} element={<BasketballPlayers />} />
                {authenticated.isAuthenticated ? <Route path={routes.UserTeams.pathName} element={<UserTeams />} /> : null}
            </Routes>
        </Suspense>
    )

}

export default MyRoutes;