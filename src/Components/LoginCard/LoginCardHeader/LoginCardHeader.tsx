import { Box, Stack } from '@mui/material';
import * as React from 'react';
import styles from './LoginCardHeader.Styling';

export default function LoginCardHeader() {

    return (
        <Box sx={styles.headerContainer}>
            <Stack sx={styles.headerDescriptionContainer}>

                <Stack sx={styles.welcomeText} >
                    Welcome to
                </Stack>
                <Stack sx={styles.projectNameText}>
                    AuthTS
                </Stack>

            </Stack>
        </Box>
    )
}