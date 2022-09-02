import { SystemStyleObject } from '@mui/system';
import { useContext } from 'react';
import { AuthSelectedCardContext, AuthSelectedCardType, CARD_TYPES } from '../../../Globals/Index';

const AuthCardStyling = () => {
    const { selectedCard } = useContext(AuthSelectedCardContext) as AuthSelectedCardType;

    const isRegisterCard: boolean = selectedCard === CARD_TYPES.REGISTER;

    const styles: Record<string, SystemStyleObject> = {
        authCardContainer: {
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
            position: "relative"
        },
        authCard: {
            height: isRegisterCard ? 700 : 600,
            width: 450,
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            backgroundColor: "#39A0C6",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        },

    }

    return styles;
}

export default AuthCardStyling;