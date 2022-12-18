import { Box, Button, Container, InputAdornment, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import { TeamCardsContainer } from './Index';
import { AccountCircle } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';


const DisplayUserTeams = () => {

    const [addNewModalIsOpen, setAddNewModalIsOpen] = useState(false);
    const [teamName, setTeamName] = useState('');

    const handleClose = () => {
        setAddNewModalIsOpen(false);
    }

    const handleOnCreateNewTeam = () => {
        setAddNewModalIsOpen(true);
    }

    const handleTextFieldChange = (e: any) => {
        setTeamName(e.target.value);
    }

    const handleCreateNewTeam = async () => {
        const response = await axios.post('https://apieurpfantasy.herokuapp.com/api/team',
            {
                "team_name": teamName
            },
            {
                headers: {
                    "auth-access-token": Cookies.get('auth-access-token')
                }
            })

        if (response && response.status === 201) {
            window.location.reload()
        }
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Container>
            <Box>
                <Button
                    sx={{ marginTop: 2, marginBottom: 2 }}
                    variant='contained'
                    color='info'
                    onClick={handleOnCreateNewTeam}
                >
                    Create New Team
                </Button>
            </Box>
            <TeamCardsContainer />

            <Modal
                open={addNewModalIsOpen}
                onClose={handleClose}
                sx={{ backgroundColor: "grey" }}
            >
                <Box sx={style}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Your Team Name:"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        onChange={handleTextFieldChange}
                        value={teamName}
                    />
                    <Box>
                        <Button
                            sx={{ marginTop: 2 }}
                            variant='contained'
                            color='info'
                            onClick={handleCreateNewTeam}
                        >
                            Create
                        </Button>
                    </Box>

                </Box>
            </Modal>
        </Container>
    )
}

export default DisplayUserTeams;