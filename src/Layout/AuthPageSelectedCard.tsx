import React, { useContext } from 'react';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES } from '../Globals/Index';
import { ForgotPasswordCard } from '../Components/Cards/ForgotPasswordCard/Index';
import { LoginCard } from '../Components/Cards/LoginCard/Index';
import { RegisterCard } from '../Components/Cards/RegisterCard/Index';

const AuthPageSelectedCard = () => {

    const { selectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;


    //Need to change to useReducer Hook
    if (selectedCard === CARD_TYPES.LOGIN_CARD) {
        return <LoginCard />
    }
    else if (selectedCard === CARD_TYPES.FORGOT_PASSWORD) {
        return <ForgotPasswordCard />
    }
    else if (selectedCard === CARD_TYPES.REGISTER) {
        return <RegisterCard />
    }
    else {
        return null;
    }
}

export default AuthPageSelectedCard;