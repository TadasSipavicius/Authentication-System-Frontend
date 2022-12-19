import { Box, Button, Modal } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { BasketballPlayersList } from '../../Components/BasketballPlayersList/Index';
import { ITeam } from '../../Interfaces/Team';


const SingleTeamPage = () => {

    const [teamData, setTeamData] = useState<ITeam>();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedBasketballPlayrs, setSelectedBasketballPlayers] = useState<any[]>([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const retrieveSingleTeamData = async () => {
            const response = await axios.get(`https://apieurpfantasy.herokuapp.com/api/team/${id}`, {
                headers: {
                    "auth-access-token": Cookies.get('auth-access-token')
                }
            })
            console.log("response", response)
            if (response && response.status === 200) setTeamData(response.data.results[0])
        }

        retrieveSingleTeamData();
    }, [id]);


    const handleOnTeamEdit = () => {
        setModalIsOpen(true)
    }

    const onDeleteTeam = async () => {
        const response = await axios.delete(`https://apieurpfantasy.herokuapp.com/api/team/${id}`, {
            headers: {
                "auth-access-token": Cookies.get('auth-access-token')
            }
        })
        console.log("response", response)
        navigate('/teams');
    }

    // const changeSelectedPlayers = (player: any) => {
    //     setSelectedBasketballPlayers(current => [...current, player])
    // }

    console.log("teamData", teamData)
    return (
        <Box sx={{ margin: 5 }}>
            <Box>
                <Button
                    sx={{ marginTop: 2, marginBottom: 2 }}
                    variant='contained'
                    color='info'
                    onClick={handleOnTeamEdit}
                >
                    Edit Team
                </Button>
            </Box>
            <Box>
                <Button
                    sx={{ marginTop: 2, marginBottom: 2 }}
                    variant='contained'
                    color='error'
                    onClick={onDeleteTeam}
                >
                    Delete this team
                </Button>
            </Box>


            <Box>
                <Box sx={{ fontSize: 13, borderBottom: "1px solid black" }}>Fantasy Team name: </Box>
                <Box sx={{ color: "white", marginTop: 0.5, fontSize: 18 }}>{teamData?.name}</Box>
            </Box>
            <Box sx={{ marginTop: 3 }}>
                <Box>Guard Players: </Box>
            </Box>
            <Box sx={{ marginTop: 1 }}>
                <Box>Foward Players: </Box>
            </Box>
            <Box sx={{ marginTop: 1 }}>
                <Box>Center Players: </Box>
            </Box>

            <Modal
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
            >
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box>
                        <Box sx={{ color: "white", fontWeight: 600 }}>Chosen Players:</Box>
                        <Box sx={{ color: "white", marginTop: 3 }}>
                            <Box>Guard Players: </Box>
                            {/* {filteredGuards.map(player => {
                                return (
                                    <Box>
                                        {player.name}
                                    </Box>
                                )
                            })} */}
                        </Box>
                        <Box sx={{ color: "white", marginTop: 1 }}>
                            <Box>Foward Players: </Box>
                        </Box>
                        <Box sx={{ color: "white", marginTop: 1 }}>
                            <Box>Center Players: </Box>
                        </Box>
                        <Button
                            sx={{ marginTop: 2 }}
                            variant='contained'
                            color='info'
                        >
                            Save my team
                        </Button>

                    </Box>
                    <Box>
                        <BasketballPlayersList

                        />
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default SingleTeamPage;