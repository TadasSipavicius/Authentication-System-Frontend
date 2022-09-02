import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './ForgotPasswordCredentialsForm.Styling';
import React from 'react';

const ForgotPasswordCredentialsForm = () => {

    return (
        <>
            <Box sx={styles.resetPasswordContainer}>
                <Typography sx={styles.resetPasswordTitle}>
                    Forgot your password?
                </Typography>

                <Typography sx={styles.resetPasswordDescription}>
                    Enter your registered email below to receive a new password
                </Typography>


                <TextField
                    sx={styles.resetPasswordEmailTextField}
                    size='small'
                    placeholder='example@gmail.com'
                    autoComplete='off'
                />
            </Box>

            <Button sx={styles.resetButton}>
                Send New Password
            </Button>
        </>
    );
}

export default ForgotPasswordCredentialsForm;