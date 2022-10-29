import { Box } from '@mui/material';
import React from 'react';
import { IBasketballPlayer } from '../../../Interfaces/IBasketballPlayer';
import PlayerInformation from './PlayerInformation';
import PlayerTeam from './PlayerTeam';

interface IPlayerRowProps {
    basketballPlayer: IBasketballPlayer;
};

const PlayerRow = ({ basketballPlayer }: IPlayerRowProps) => {
    return (
        <Box>
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