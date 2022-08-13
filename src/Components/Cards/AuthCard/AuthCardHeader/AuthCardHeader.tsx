import * as React from 'react';
import { Box, Stack } from '@mui/material';
import styles from './AuthCardHeader.Styling';


export default function AuthCardHeader() {

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