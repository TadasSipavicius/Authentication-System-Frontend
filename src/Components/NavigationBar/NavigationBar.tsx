import React, { useContext } from 'react';
import { AppBar, Box, Button, Container, Link, Toolbar } from '@mui/material';
import styles from './NavigationBar.Styling';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES } from '../../Globals/Index';

const NavigationBar = () => {

    const { setSelectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleRedirectToRegisterCardForm = () => {
        setSelectedCard(CARD_TYPES.REGISTER);
    };

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar disableGutters>
                <Container maxWidth={false} sx={styles.appBarContainer}>
                    <Box sx={styles.logoBox}>
                        <Link sx={styles.logoLink} component={Link} href="/">
                            AuthTS
                        </Link>
                    </Box>

                    <Box sx={styles.buttonsBox}>
                        <Button sx={styles.signUpButton} href='/'>
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