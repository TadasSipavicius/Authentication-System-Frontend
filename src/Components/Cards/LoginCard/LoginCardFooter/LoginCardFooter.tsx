import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { AuthSelectedCardContext } from '../../../../Globals/Context';
import { AuthSelectedCardType } from '../../../../Globals/ContextTypes';
import styles from './LoginCardFooter.Styling';

const LoginCardFooter = () => {

    const { setSelectedCard } = React.useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleForgotPasswordClick = (): void => {

        setSelectedCard('ForgotPassword');
    };

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

                <Typography sx={styles.signInText}>
                    Sign up
                </Typography>

            </Box>
        </>
    )
}

export default LoginCardFooter;