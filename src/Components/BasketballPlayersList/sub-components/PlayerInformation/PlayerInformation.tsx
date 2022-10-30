import { Box } from '@mui/material';
import React from 'react';

interface IPlayerInformationProps {
    playerPosition: string;
    nextGameTeamName: string;
    playerFullName: string;
}

const PlayerInformation = ({ playerPosition, nextGameTeamName, playerFullName }: IPlayerInformationProps) => {

    return (
        <Box>
            <Box sx={{ fontWeight: 600, color: "grey" }}>
                {playerFullName}
            </Box>
            <Box sx={{ fontSize: 12 }}>
                {playerPosition}
            </Box>
            <Box sx={{ fontSize: 13 }}>
                vs {nextGameTeamName}
            </Box>
        </Box>
    )
}

export default PlayerInformation;