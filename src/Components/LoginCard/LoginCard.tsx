import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import styles from './LoginCard.Styling';
import LoginCardHeader from './LoginCardHeader/LoginCardHeader';
import LoginCardBody from './LoginCardBody/LoginCardBody';
import LoginCardFooter from './LoginCardFooter/LoginCardFooter';

export default function Login() {

    return (
        <Container fixed sx={styles.loginContainer}>
            <Box sx={styles.loginCard}>
                <LoginCardHeader />
                <LoginCardBody />
                <Divider variant="middle" sx={{ width: "80%" }} />
                <LoginCardFooter />
            </Box>
        </Container >
    )
}