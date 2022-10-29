import { Box } from '@mui/material';
import React from 'react';

interface IPlayerInformationProps {
    playerPosition: string;
    playerPrice: string;
    nextGameTeamName: string;
    playerFullName: string;
}

const PlayerInformation = ({ playerPosition, playerPrice, nextGameTeamName, playerFullName }: IPlayerInformationProps) => {

    return (
        <Box>
            <Box>{playerFullName}</Box>
            <Box>{playerPosition}</Box>
            <Box>{nextGameTeamName}</Box>
            <Box>{playerPrice}</Box>
        </Box>
    )
}

export default PlayerInformation;