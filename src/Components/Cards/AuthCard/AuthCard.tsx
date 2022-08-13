import * as React from 'react';
import { Box, Container } from '@mui/material';
import styles from './AuthCard.Styling';
import AuthCardHeader from './AuthCardHeader/AuthCardHeader';

interface IAuthCardProps {
    children: React.ReactNode;
}

export default function AuthCard({ children }: IAuthCardProps) {

    return (
        <Container fixed sx={styles.authCardContainer}>
            <Box sx={styles.authCard}>
                <AuthCardHeader />
                {children}
            </Box>
        </Container>

    )
}