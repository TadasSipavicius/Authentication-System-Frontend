import { Container } from '@mui/material';
import * as React from 'react';
import HomePageSelectedCard from '../../Components/Layout/HomePageSelectedCard';
import { SelectedCardContext } from '../../Globals/Context';
import styles from './Home.Styling';

export default function HomePage() {

    const [selectedCard, setSelectedCard] = React.useState('Home');
    console.log(selectedCard)
    return (
        <Container fixed sx={styles.loginContainer}>
            <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
                <HomePageSelectedCard selectedCard={selectedCard} />
            </SelectedCardContext.Provider>

        </Container>
    )
}