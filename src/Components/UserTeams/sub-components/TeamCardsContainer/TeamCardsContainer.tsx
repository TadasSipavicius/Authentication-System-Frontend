import { Box, Grid } from '@mui/material';
import React from 'react';
import { TeamsData } from '../../MockData';
import TeamCard from '../TeamCard/TeamCard';

const TeamCardsContainer = () => {
    return (
        <Grid container spacing={2}>
            {TeamsData.map(team => (
                <TeamCard
                    team={team}
                />
            ))}
        </Grid>
    )
}

export default TeamCardsContainer;