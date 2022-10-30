import { Box } from '@mui/material';
import React from 'react';
import { IBasketballPlayer } from '../../../../Interfaces/IBasketballPlayer';
import { PlayerInformation, PlayerTeam, AddPlayerButton } from '../../Index';

interface IPlayerRowProps {
    basketballPlayer: IBasketballPlayer;
};

const PlayerRow = ({ basketballPlayer }: IPlayerRowProps) => {
    return (
        <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
            <PlayerTeam
                teamShortName={basketballPlayer.currentTeamShortName}
            />
            <PlayerInformation
                playerFullName={basketballPlayer.fullName}
                playerPosition={basketballPlayer.position}
                nextGameTeamName={basketballPlayer.opponentTeamName}
            />
            <AddPlayerButton
                playerPrice={basketballPlayer.price}
            />
        </Box>
    )
}

export default PlayerRow;