import { Box, Card, CardActionArea, CardContent, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { ITeam } from '../../../../Interfaces/Team';

interface ITeamCardProps {
    team: ITeam;
}

const TeamCard = ({ team }: ITeamCardProps) => {
    return (
        <Grid item>
            <Card>
                <CardActionArea>
                    <CardContent sx={{ width: 200, height: 200, position: "relative" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {team.teamName}
                        </Typography>
                        <Divider />

                        <Box sx={{ position: "absolute", bottom: 10, width: "80%" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography sx={{ fontWeight: 600 }} color="text.secondary">Points: </Typography>
                                <Typography color="text.secondary">{team.Points}</Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography sx={{ fontWeight: 600 }} color="text.secondary">Rating: </Typography>
                                <Typography color="text.secondary">{team.ratingPosition}</Typography>
                            </Box>
                        </Box>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid >

    )
}

export default TeamCard;