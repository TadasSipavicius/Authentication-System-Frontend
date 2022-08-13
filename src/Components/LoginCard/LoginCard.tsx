import * as React from 'react';
import { Box, Container, Divider } from '@mui/material';
import styles from './LoginCard.Styling';
import LoginCardHeader from './LoginCardHeader/LoginCardHeader';
import LoginCardBody from './LoginCardBody/LoginCardBody';
import LoginCardFooter from './LoginCardFooter/LoginCardFooter';

export default function LoginCard() {

    return (
        <Container fixed sx={styles.loginContainer}>
            <Box sx={styles.loginCard}>
                <LoginCardHeader />
                <LoginCardBody />
                <Divider variant="middle" sx={styles.divider} />
                <LoginCardFooter />
            </Box>
        </Container >
    )
}