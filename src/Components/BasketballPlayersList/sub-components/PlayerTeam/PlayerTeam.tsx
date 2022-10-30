import { Box } from '@mui/material';
import React from 'react';
import styles from './PlayerTeam.Styling';

interface IPlayerTeamProps {
    teamShortName: string;
};

const PlayerTeam = ({ teamShortName }: IPlayerTeamProps) => {

    return (
        <Box sx={styles.hexWrapper}>
            <Box sx={[styles.badge, styles.yellow]}>
                <Box sx={styles.circle}>

                </Box>
                <Box sx={styles.ribbon}>{teamShortName}</Box>
            </Box>
        </Box>
    )
}

export default PlayerTeam;