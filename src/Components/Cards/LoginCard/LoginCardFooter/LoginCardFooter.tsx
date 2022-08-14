import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { AuthSelectedCardContext } from '../../../../Globals/Context';
import { AuthSelectedCardType } from '../../../../Globals/ContextTypes';
import styles from './LoginCardFooter.Styling';

const LoginCardFooter = () => {

    const { setSelectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleForgotPasswordClick = (): void => {

        setSelectedCard('ForgotPassword');
    };

    const handleSignInClick = (): void => {

        setSelectedCard('Register');
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