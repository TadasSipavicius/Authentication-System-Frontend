import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { SelectedCardContext } from '../../../../Globals/Context';
import { SelectedCardType } from '../../../../Globals/ContextTypes';
import styles from './LoginCardFooter.Styling';

export default function LoginCardFooter() {

    const { setSelectedCard } = React.useContext(SelectedCardContext) as SelectedCardType;

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