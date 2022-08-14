import { Box, Divider } from '@mui/material';
import React from 'react';
import ForgotPasswordCredentialsForm from './ForgotPasswordCredentialsForm/ForgotPasswordCredentialsForm';
import ForgotPasswordFooter from './ForgotPasswordFooter/ForgotPasswordFooter';

const ForgotPasswordCard = () => {

    return (
        <>
            <ForgotPasswordCredentialsForm />
            <Divider variant="middle" sx={{ width: "80%" }} />
            <ForgotPasswordFooter />
        </>

    )
}

export default ForgotPasswordCard;