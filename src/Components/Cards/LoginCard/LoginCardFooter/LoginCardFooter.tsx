import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES } from '../../../../Globals/Index';
import styles from './LoginCardFooter.Styling';

const LoginCardFooter = () => {

    const { setSelectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleForgotPasswordClick = (): void => {

        setSelectedCard(CARD_TYPES.FORGOT_PASSWORD);
    };

    const handleSignInClick = (): void => {

        setSelectedCard(CARD_TYPES.REGISTER);
    }

    return (
        <>
            <Typography
                sx={styles.forgotPasswordText}
                onClick={handleForgotPasswordClick}
            >
                Forgot Password?
            </Typography>
            <Box sx={styles.footerOtherOptions}>

                <Typography sx={styles.noAccountText}>
                    Don't have an account?
                </Typography>

                <Typography
                    sx={styles.signInText}
                    onClick={handleSignInClick}
                >
                    Sign up
                </Typography>

            </Box>
        </>
    )
}

export default LoginCardFooter;