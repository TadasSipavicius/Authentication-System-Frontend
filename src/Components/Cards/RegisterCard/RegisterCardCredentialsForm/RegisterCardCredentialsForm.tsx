import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './RegisterCardCredentialsForm.Styling';

const RegisterCardCredentialsForm = () => {

    return (
        <Box>
            <Box>
                <Typography>
                    Username
                </Typography>
                <TextField />
                <Typography>
                    Email
                </Typography>
                <TextField />
                <Typography>
                    Password
                </Typography>
                <TextField
                    type='password'
                />
                <Typography>
                    Confirm Password
                </Typography>
                <TextField
                    type='password'
                />
            </Box>

            <Button>
                Register
            </Button>
        </Box>
    )
}

export default RegisterCardCredentialsForm;