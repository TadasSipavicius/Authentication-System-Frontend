import * as React from 'react';
import { AuthSelectedCardContext } from '../../Globals/Context';
import { AuthSelectedCardType } from '../../Globals/ContextTypes';
import ForgotPasswordCard from '../Cards/ForgotPasswordCard/ForgotPasswordCard';
import LoginCard from '../Cards/LoginCard/LoginCard';
import RegisterCard from '../Cards/RegisterCard/RegisterCard';


export default function AuthPageSelectedCard() {

    const { selectedCard } = React.useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    if (selectedCard === "Auth") {
        return <LoginCard />
    }
    else if (selectedCard === "ForgotPassowrd") {
        return <ForgotPasswordCard />
    }
    else {
        return <RegisterCard />
    }
}