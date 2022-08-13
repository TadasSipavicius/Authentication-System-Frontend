import * as React from 'react';
import { Divider } from '@mui/material';
import LoginCardCredentialsForm from './LoginCardCredentialsForm/LoginCardCredentialsForm';
import LoginCardFooter from './LoginCardFooter/LoginCardFooter';

export default function LoginCard() {

    return (
        <>
            <LoginCardCredentialsForm />
            <Divider variant="middle" sx={{ width: "80%" }} />
            <LoginCardFooter />
        </>
    )
}