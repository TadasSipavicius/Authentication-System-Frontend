import React, { useState } from 'react';
import { AuthCard } from '../../Components/Cards/AuthCard/Index';
import { AuthPageSelectedCard } from '../../Layout/Index';
import { AuthSelectedCardContext, CARD_TYPES } from '../../Globals/Index';

const AuthPage = () => {

    const [selectedCard, setSelectedCard] = useState(CARD_TYPES.LOGIN_CARD);

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