import React, { useContext } from 'react';
import { AuthSelectedCardContext } from '../Globals/Context';
import { AuthSelectedCardType } from '../Globals/ContextTypes';
import ForgotPasswordCard from '../Components/Cards/ForgotPasswordCard/ForgotPasswordCard';
import LoginCard from '../Components/Cards/LoginCard/LoginCard';
import RegisterCard from '../Components/Cards/RegisterCard/RegisterCard';


const AuthPageSelectedCard = () => {

    const { selectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;


    //Use reducer hook ??
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

export default AuthPageSelectedCard;