import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './LoginCardFooter.Styling';

export default function LoginCardFooter() {

    return (
        <>
            <Typography sx={styles.forgotPasswordText}>
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