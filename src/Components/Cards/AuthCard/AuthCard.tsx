import React from 'react';
import { Box, Container } from '@mui/material';
import styles from './AuthCard.Styling';
import { AuthCardHeader } from './Index';

interface IAuthCardProps {
    children: React.ReactNode;
}

const AuthCard = ({ children }: IAuthCardProps) => {

    return (
        <Container fixed sx={styles.authCardContainer}>
            <Box sx={styles.authCard}>
                <AuthCardHeader />
                {children}
            </Box>
        </Container>

    )
}

export default AuthCard;