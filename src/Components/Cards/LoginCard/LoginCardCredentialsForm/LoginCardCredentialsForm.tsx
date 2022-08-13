import * as React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './LoginCardCredentialsForm.Styling';

const LoginCardCredentialsForm = () => {

    return (
        <>
            <Box>
                <Typography sx={styles.usernameLabel}>
                    Username
                </Typography>
                <TextField
                    size='small'
                    sx={styles.usernameTextInput}
                />
            </Box>

            <Box sx={styles.passowordContainer}>
                <Typography sx={styles.passwordLabel}>
                    Password
                </Typography>
                <TextField
                    size='small'
                    sx={styles.passowrdTextInput}
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