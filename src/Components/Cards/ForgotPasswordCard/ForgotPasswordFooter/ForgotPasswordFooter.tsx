import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthSelectedCardContext } from '../../../../Globals/Context';
import { AuthSelectedCardType } from '../../../../Globals/ContextTypes';
import { CARD_TYPES } from '../../../../Globals/SelectedCardTypes';
const ForgotPasswordFooter = () => {

    const { setSelectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const handleReturnToLoginPageClick = () => {
        setSelectedCard(CARD_TYPES.LOGIN_CARD);
    };

    return (
        <Box>
            <Typography onClick={handleReturnToLoginPageClick}>
                Return to Login page
            </Typography>
        </Box>
    )
}

export default ForgotPasswordFooter;