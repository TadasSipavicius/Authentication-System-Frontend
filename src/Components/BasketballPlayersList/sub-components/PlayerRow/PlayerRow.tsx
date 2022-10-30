import { Box } from '@mui/material';
import React from 'react';
import { IBasketballPlayer } from '../../../../Interfaces/IBasketballPlayer';
import { PlayerInformation, PlayerTeam } from '../../Index';

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
                playerPrice={basketballPlayer.position}
                nextGameTeamName={basketballPlayer.opponentTeamName}
            />
        </Box>
    )
}

export default PlayerRow;