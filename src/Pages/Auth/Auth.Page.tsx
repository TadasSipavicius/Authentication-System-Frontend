import React, { useState } from 'react';
import AuthCard from '../../Components/Cards/AuthCard/AuthCard';
import AuthPageSelectedCard from '../../Layout/AuthPageSelectedCard';
import { AuthSelectedCardContext } from '../../Globals/Context';

const AuthPage = () => {

    const [selectedCard, setSelectedCard] = useState('Auth');

    return ( 
        <>
            <AuthSelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
                <AuthCard>
                    <AuthPageSelectedCard />
                </AuthCard>
            </AuthSelectedCardContext.Provider>

        </>
    )
}

export default AuthPage;