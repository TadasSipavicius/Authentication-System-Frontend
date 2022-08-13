import * as React from 'react';
import AuthCard from '../../Components/Cards/AuthCard/AuthCard';
import AuthPageSelectedCard from '../../Components/Layout/AuthPageSelectedCard';
import { AuthSelectedCardContext } from '../../Globals/Context';

export default function AuthPage() {

    const [selectedCard, setSelectedCard] = React.useState('Auth');

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