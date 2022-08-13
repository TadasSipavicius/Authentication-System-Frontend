import React from 'react';
import { Divider } from '@mui/material';
import LoginCardCredentialsForm from './LoginCardCredentialsForm/LoginCardCredentialsForm';
import LoginCardFooter from './LoginCardFooter/LoginCardFooter';

const LoginCard = () => {

    return (
        <>
            <LoginCardCredentialsForm />
            <Divider variant="middle" sx={{ width: "80%" }} />
            <LoginCardFooter />
        </>
    )
}

export default LoginCard;