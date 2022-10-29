import { Box } from '@mui/material';
import React from 'react';
import { PlayersData } from './MockData';
import PlayerRow from './sub-components/PlayerRow';
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