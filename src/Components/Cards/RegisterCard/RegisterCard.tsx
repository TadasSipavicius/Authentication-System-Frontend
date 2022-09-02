import { Divider } from '@mui/material';
import React from 'react';
import { RegisterCardFooter, RegisterCardForm } from './Index';

const RegisterCard = () => {

    return (
        <>
            <RegisterCardForm />
            <Divider sx={{ width: "80%" }} />
            <RegisterCardFooter />
        </>
    )
}

export default RegisterCard;