import React, { useContext } from 'react';
import { AppBar, Box, Button, Container, Link, Toolbar } from '@mui/material';
import styles from './NavigationBar.Styling';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES, Routes as routes } from '../../Globals/Index';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationBar = () => {

    const { setSelectedCard, selectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        
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
                    </Box>
                </Container>
            </Toolbar>
        </AppBar >
    )
}

export default NavigationBar;