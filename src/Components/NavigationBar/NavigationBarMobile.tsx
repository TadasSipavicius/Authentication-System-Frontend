import { AppBar, createStyles, Divider, Drawer, IconButton, Link, List, ListItem, makeStyles, Theme, Toolbar } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Authentication, AuthSelectedCardContext } from '../../Globals/contexts/Context';
import { Auth, AuthSelectedCardType } from '../../Globals/contexts/types/ContextTypes';
import { CARD_TYPES, Routes as routes } from '../../Globals/Index';
import Cookies from 'js-cookie';

const NavigationBarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { authenticated } = useContext(Authentication) as Auth;
    const { setSelectedCard, selectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleLogoClick = () => {
        if (authenticated.isAuthenticated) {
            return navigate('/teams')
        }

        if (selectedCard !== CARD_TYPES.LOGIN_CARD) {
            navigate('/');
            setSelectedCard(CARD_TYPES.LOGIN_CARD)
            return;
        };
        navigate('/');
    };

    const handleRedirectToLoginCardForm = () => {

        if (location.pathname === routes.AuthPage.pathName) {
            return setSelectedCard(CARD_TYPES.LOGIN_CARD)
        };
        navigate('/');
    };

    const handleRedirectToRegisterCardForm = () => {

        if (location.pathname === routes.AuthPage.pathName) {
            return setSelectedCard(CARD_TYPES.REGISTER);
        }

        navigate('/');
        setSelectedCard(CARD_TYPES.REGISTER);
    };

    const handleNavigateToTeams = () => {
        navigate('/teams')
    }

    const handleNavigateTodashboard = () => {
        navigate('/dashboard')
    }

    const handleLogOut = async () => {
        Cookies.remove('auth-access-token');
        navigate('/');
    }

    return (
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link sx={{
                    fontSize: 24,
                    fontFamily: "PT Sans Narrow, sans-serif",
                    color: "black",
                    textDecoration: "none"
                }} component='button' onClick={handleLogoClick}>
                    AuthTS
                </Link>
                <IconButton edge="end" onClick={handleOpen}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer anchor="top" open={isOpen} onClose={handleOpen}>
                <List sx={{ padding: 0 }} >
                    <ListItem sx={{
                        justifyContent: "space-between",
                        maxHeight: 50,
                    }} key="topline">
                        <Link sx={{
                            fontSize: 24,
                            fontFamily: "PT Sans Narrow, sans-serif",
                            color: "black",
                            textDecoration: "none"
                        }} component='button' onClick={handleLogoClick}>
                            AuthTS
                        </Link>
                        <IconButton edge="end" onClick={handleOpen}>
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                    <Divider />

                    {authenticated.isAuthenticated ? (
                        <>
                            {authenticated.user.roles === "Admin" ? (
                                <ListItem>
                                    <Link sx={{
                                        fontSize: 24,
                                        fontFamily: "PT Sans Narrow, sans-serif",
                                        color: "black",
                                        textDecoration: "none"
                                    }} component='button' onClick={handleNavigateTodashboard}>
                                        Dashboard
                                    </Link>
                                </ListItem>
                            ) : null}
                            <ListItem>
                                <Link sx={{
                                    fontSize: 24,
                                    fontFamily: "PT Sans Narrow, sans-serif",
                                    color: "black",
                                    textDecoration: "none"
                                }} component='button' onClick={handleNavigateToTeams}>
                                    Teams
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link sx={{
                                    fontSize: 24,
                                    fontFamily: "PT Sans Narrow, sans-serif",
                                    color: "black",
                                    textDecoration: "none"
                                }} component='button' onClick={handleLogOut}>
                                    LogOut
                                </Link>
                            </ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem>
                                <Link sx={{
                                    fontSize: 24,
                                    fontFamily: "PT Sans Narrow, sans-serif",
                                    color: "black",
                                    textDecoration: "none"
                                }} component='button' onClick={handleRedirectToLoginCardForm}>
                                    Sign In
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link sx={{
                                    fontSize: 24,
                                    fontFamily: "PT Sans Narrow, sans-serif",
                                    color: "black",
                                    textDecoration: "none"
                                }} component='button' onClick={handleRedirectToRegisterCardForm}>
                                    Register
                                </Link>
                            </ListItem>
                        </>
                    )}

                </List>
            </Drawer>
        </AppBar>
    )
}

export default NavigationBarMobile;