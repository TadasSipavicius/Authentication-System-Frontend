import { Box } from '@mui/material';
import React from 'react';
import styles from './PlayerTeam.Styling';
import zalgiris from '../../zalgiris.png';
interface IPlayerTeamProps {
    teamShortName: string;
};

const PlayerTeam = ({ teamShortName }: IPlayerTeamProps) => {

    return (
        <Box sx={styles.hexWrapper}>
            <Box sx={[styles.badge, styles.yellow]}>
                <Box sx={styles.circle}>
                    <img src={zalgiris} style={{ fontSize: 2, width: 20, height: 20, zIndex: 10, position: "absolute", top: 5, left: 5 }} />
                </Box>
                <Box sx={styles.ribbon}>{teamShortName}</Box>
            </Box>
        </Box>
    )
}

export default PlayerTeam;