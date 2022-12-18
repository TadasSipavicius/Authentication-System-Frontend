import { Grid } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';

const TeamCardsContainer = () => {
    const [teamData, setTeamsData] = useState([]);

    useEffect(() => {
        const retrieveTeamsData = async () => {
            const response = await axios.get('https://apieurpfantasy.herokuapp.com/api/team', {
                headers: {
                    "auth-access-token": Cookies.get('auth-access-token')
                }
            })
            console.log("response", response.data.results)
            setTeamsData(response.data.results)
        }

        retrieveTeamsData();
    }, [])

    return (
        <Grid container spacing={2}>
            {teamData.map((team, index) => (
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