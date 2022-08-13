import * as React from 'react';
import ForgotPasswordCard from '../ForgotPasswordCard/ForgotPasswordCard';
import LoginCard from '../LoginCard/LoginCard';
import RegisterCard from '../RegisterCard/RegisterCard';

interface IHomePageSelectedCardProps {
    selectedCard: string;
}

export default function HomePageSelectedCard({ selectedCard }: IHomePageSelectedCardProps) {
    if (selectedCard === "Home") {
        return <LoginCard />
    }
    else if (selectedCard === "ForgotPassowrd") {
        return <ForgotPasswordCard />
    }
    else {
        return <RegisterCard />
    }
}