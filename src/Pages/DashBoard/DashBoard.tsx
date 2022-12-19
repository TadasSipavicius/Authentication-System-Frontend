import { Box, Button, Divider, Modal, TextField } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { BasketballPlayersList } from '../../Components/BasketballPlayersList/Index';

const DashBoard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [price, setPrice] = useState(0);
    const [team, setTeam] = useState("");

    const changeName = (e: any) => {
        setName(e.target.value)
    }


    const changePosition = (e: any) => {
        setPosition(e.target.value)
    }

    const changePrice = (e: any) => {
        setPrice(e.target.value)
    }

    const changeTeam = (e: any) => {
        setTeam(e.target.value)
    }

    const handleAddNew = async () => {
        const response = await axios.post('https://apieurpfantasy.herokuapp.com/api/basketballPlayer', {
            basketballPlayer_name: name,
            basketballPlayer_position: position,
            basketballPlayer_price: price,
            basketballPlayer_teamName: team
        },
            {
                headers: {
                    "auth-access-token": Cookies.get('auth-access-token')
                }
            })
        console.log("response", response)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#bfbfbf',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4
    };
    return (
        <Box sx={{ margin: 5 }}>
            <Box>Add new BasketballPlayer</Box>
            <Divider />
            <Button
                sx={{ marginTop: 1, marginBottom: 2 }}
                variant='contained'
                color='info'
                onClick={() => setIsOpen(true)}
            >
                ADD
            </Button>
            <Box sx={{ marginBottom: 2 }}>
                <Box>Basketball Players List:</Box>
                <Divider />
                <Box>
                    <BasketballPlayersList />
                </Box>
            </Box>
            <Box>
                <Box>Reset rating:</Box>
                <Divider />
                <Button
                    sx={{ marginTop: 1, marginBottom: 2 }}
                    variant='contained'
                    color='info'
                    onClick={() => setIsOpen(true)}
                >
                    Reset
                </Button>
            </Box>
            <Box>
                <Box>Add team to rating:</Box>
                <Divider />
                <Button
                    sx={{ marginTop: 1, marginBottom: 2 }}
                    variant='contained'
                    color='info'
                    onClick={() => setIsOpen(true)}
                >
                    Add
                </Button>
            </Box>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Box sx={style}>
                    <Box>
                        <TextField
                            variant='outlined'
                            value={name}
                            onChange={changeName}
                            label='Player name: '
                            sx={{ marginBottom: 1 }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            variant='outlined'
                            value={position}
                            onChange={changePosition}
                            label='Player position: '
                            sx={{ marginBottom: 1 }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            variant='outlined'
                            type={'number'}
                            value={price}
                            onChange={changePrice}
                            label='Player price: '
                            sx={{ marginBottom: 1 }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            variant='outlined'
                            value={team}
                            onChange={changeTeam}
                            label='Player team: '
                            sx={{ marginBottom: 1 }}

                        />
                    </Box>

                    <Button
                        sx={{ marginTop: 1, marginBottom: 2 }}
                        variant='contained'
                        color='info'
                        onClick={handleAddNew}
                    >
                        Save
                    </Button>
                </Box>
            </Modal>
        </Box >
    )
}

export default DashBoard;