import React from 'react';
import { Divider } from '@mui/material';
import { LoginCardForm, LoginCardFooter } from './Index';

const LoginCard = () => {

    return (
        <>
            <LoginCardForm />
            <Divider variant="middle" sx={{ width: "80%" }} />
            <LoginCardFooter />
        </>
    )
}

export default LoginCard;