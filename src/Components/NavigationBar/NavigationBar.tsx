import React, { useContext } from 'react';
import { AppBar, Box, Button, Container, Link, Toolbar } from '@mui/material';
import styles from './NavigationBar.Styling';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES, Routes as routes } from '../../Globals/Index';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authentication } from '../../Globals/contexts/Context';
import { Auth } from '../../Globals/contexts/types/ContextTypes';
import Cookies from 'js-cookie';

const NavigationBar = () => {

    const { setSelectedCard, selectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;
    const { authenticated, setAuthenticated } = useContext(Authentication) as Auth;
    const location = useLocation();
    const navigate = useNavigate();

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
        setAuthenticated({ isAuthenticated: false, user: null });
        navigate('/');
    }

    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar disableGutters>
                <Container maxWidth={false} sx={styles.appBarContainer}>
                    <Box sx={styles.logoBox}>
                        <Link sx={styles.logoLink} component='button' onClick={handleLogoClick}>
                            AuthTS
                        </Link>
                    </Box>

                    <Box sx={styles.buttonsBox}>
                        {authenticated.isAuthenticated ? (
                            <>
                                {authenticated.user.roles === "Admin" ? (
                                    <Button
                                        sx={styles.registerButton}
                                        onClick={handleNavigateTodashboard}
                                    >
                                        Dashboard
                                    </Button>
                                ) : null}
                                <Button
                                    sx={styles.registerButton}
                                    onClick={handleNavigateToTeams}
                                >
                                    Teams
                                </Button>
                                <Button
                                    sx={styles.registerButton}
                                    onClick={handleLogOut}
                                >
                                    LogOut
                                </Button>
                            </>

                        ) : (
                            <>
                                <Button
                                    sx={styles.signUpButton}
                                    onClick={handleRedirectToLoginCardForm}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    sx={styles.registerButton}
                                    onClick={handleRedirectToRegisterCardForm}
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </Box>
                </Container>
            </Toolbar>
        </AppBar >
    )
}

export default NavigationBar;