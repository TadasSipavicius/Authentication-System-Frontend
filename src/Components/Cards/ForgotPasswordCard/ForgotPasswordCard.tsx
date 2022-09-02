import { Divider } from '@mui/material';
import React from 'react';
import { ForgotPasswordCardForm, ForgotPasswordCardFooter } from './Index';

const ForgotPasswordCard = () => {

    return (
        <>
            <ForgotPasswordCardForm />
            <Divider
                variant="middle"
                sx={{ width: "80%", marginTop: 3 }}
            />
            <ForgotPasswordCardFooter />
        </>

    )
}

export default ForgotPasswordCard;