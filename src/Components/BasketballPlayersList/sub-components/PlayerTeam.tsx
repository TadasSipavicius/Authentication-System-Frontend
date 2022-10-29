import { Box } from '@mui/material';
import React from 'react';

interface IPlayerTeamProps {
    teamShortName: string;
};

const PlayerTeam = ({ teamShortName }: IPlayerTeamProps) => {

    return (
        <Box>
            {teamShortName}
        </Box>
    )
}

export default PlayerTeam;