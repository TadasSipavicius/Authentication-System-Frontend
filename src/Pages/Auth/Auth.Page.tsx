import React from 'react';
import { AuthCard } from '../../Components/Cards/AuthCard/Index';
import { AuthPageSelectedCard } from '../../Layout/Index';

const AuthPage = () => {

    return (
        <AuthCard>
            <AuthPageSelectedCard />
        </AuthCard>
    )
}

export default AuthPage;