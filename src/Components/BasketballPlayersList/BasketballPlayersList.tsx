import { Box } from '@mui/material';
import React from 'react';
import { PlayersData } from './MockData';
import { PlayerRow } from '../BasketballPlayersList/Index';

const BasketballPlayersList = () => {
    return (
        <Box>
            {PlayersData.map(basketballPlayer => (
                <PlayerRow basketballPlayer={basketballPlayer} />
            ))}
        </Box>
    )
}

export default BasketballPlayersList;