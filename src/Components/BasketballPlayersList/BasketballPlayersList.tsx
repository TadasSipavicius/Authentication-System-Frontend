import { Box, Divider } from '@mui/material';
import React from 'react';
import { PlayersData } from './MockData';
import { PlayerRow } from '../BasketballPlayersList/Index';

const BasketballPlayersList = () => {
    return (
        <Box sx={{ backgroundColor: "white", borderRadius: 10, marginTop: 2}}>
            {PlayersData.map(basketballPlayer => (
                <>
                    <PlayerRow basketballPlayer={basketballPlayer} />
                    <Divider />
                </>

            ))}
        </Box>
    )
}

export default BasketballPlayersList;