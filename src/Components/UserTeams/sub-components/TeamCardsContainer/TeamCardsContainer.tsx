import { Grid } from '@mui/material';
import React, { Fragment } from 'react';
import { TeamsData } from '../../MockData';
import TeamCard from '../TeamCard/TeamCard';

const TeamCardsContainer = () => {
    return (
        <Grid container spacing={2}>
            {TeamsData.map((team, index) => (
                <Fragment key={index}>
                    <TeamCard
                        team={team}
                    />
                </Fragment>

            ))}
        </Grid>
    )
}

export default TeamCardsContainer;