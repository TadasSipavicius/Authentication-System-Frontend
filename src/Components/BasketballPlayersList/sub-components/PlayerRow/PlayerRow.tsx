import { Box } from '@mui/material';
import React from 'react';
import { IBasketballPlayer } from '../../../../Interfaces/IBasketballPlayer';
import { PlayerInformation, PlayerTeam, AddPlayerButton } from '../../Index';


const PlayerRow = (basketballPlayer: any) => {
    console.log("basketballPlayer", basketballPlayer.basketballPlayer)
    return (
        <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
        >
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <PlayerTeam
                    teamShortName={basketballPlayer.basketballPlayer.team_name}
                />
                <PlayerInformation
                    playerFullName={basketballPlayer.basketballPlayer.name}
                    playerPosition={basketballPlayer.basketballPlayer.position}
                    nextGameTeamName={basketballPlayer.basketballPlayer.team_name}
                />
            </Box>
            <AddPlayerButton
                basketballPlayer={basketballPlayer.basketballPlayer}
                playerPrice={basketballPlayer.basketballPlayer.price}
            />
        </Box>
    )
}

export default PlayerRow;