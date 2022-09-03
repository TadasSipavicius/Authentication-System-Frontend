import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './RegisterCardCredentialsForm.Styling';

const RegisterCardCredentialsForm = () => {

    return (
        <>
            <Box>
                <Typography sx={styles.textFieldLabel}>
                    Username
                </Typography>
                <TextField
                    placeholder='example'
                    sx={styles.usernameEmailTextInput}
                />

                <Typography sx={styles.textFieldLabel}>
                    Email
                </Typography>
                <TextField
                    placeholder='example@gmail.com'
                    sx={styles.usernameEmailTextInput}
                />

                <Typography sx={styles.textFieldLabel}>
                    Password
                </Typography>
                <TextField
                    placeholder='6 letters or more'
                    sx={styles.passwordTextInput}
                    type='password'
                />

                <Typography sx={styles.textFieldLabel}>
                    Confirm Password
                </Typography>
                <TextField
                    placeholder='6 letters or more'
                    sx={styles.passwordTextInput}
                    type='password'
                />
            </Box>

            <Button sx={styles.registerButton}>
                Register
            </Button>
        </>
    )
}

export default RegisterCardCredentialsForm;