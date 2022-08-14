import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './ForgotPasswordCredentialsForm.Styling';
import React from 'react';

const ForgotPasswordCredentialsForm = () => {

    return (
        <>
            <Box>
                <Typography >
                    Forgot  your password?
                </Typography>
                <Typography sx={styles.emailLabel}>
                    Email address:
                </Typography>
                <TextField
                    size='small'
                />
            </Box>

            <Button>
                Send New Password
            </Button>
        </>
    );
}

export default ForgotPasswordCredentialsForm;