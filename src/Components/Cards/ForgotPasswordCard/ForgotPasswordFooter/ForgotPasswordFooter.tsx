import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES } from '../../../../Globals/Index';
import styles from './ForgotPasswordFooter.Styling';

const ForgotPasswordFooter = () => {

    const { setSelectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleReturnToLoginPageClick = () => {
        setSelectedCard(CARD_TYPES.LOGIN_CARD);
    };

    return (
        <Box sx={styles.forgotPasswordContainer}>
            <Typography
                sx={styles.forgotPasswordLinkToLoginPage}
                onClick={handleReturnToLoginPageClick}
            >
                Return to Login page
            </Typography>
        </Box>
    )
}

export default ForgotPasswordFooter;