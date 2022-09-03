import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './LoginCardCredentialsForm.Styling';

const LoginCardCredentialsForm = () => {

    return (
        <>
            <Box>
                <Typography sx={styles.textFieldLabel}>
                    Username
                </Typography>
                <TextField
                    size='small'
                    sx={styles.usernameTextInput}
                    autoComplete='off'
                />
            </Box>

            <Box sx={styles.passowordContainer}>
                <Typography sx={styles.textFieldLabel}>
                    Password
                </Typography>
                <TextField
                    size='small'
                    sx={styles.passowrdTextInput}
                    type='password'
                />
            </Box>

            <Button
                size='large'
                sx={styles.loginButton}
            >
                Login
            </Button>
        </>

    )
}

export default LoginCardCredentialsForm;