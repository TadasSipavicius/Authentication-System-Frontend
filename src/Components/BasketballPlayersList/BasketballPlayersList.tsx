import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PlayerRow } from '../BasketballPlayersList/Index';
import axios from 'axios';

const BasketballPlayersList = () => {

    const [playersData, setPlayersData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://apieurpfantasy.herokuapp.com/api/basketballPlayer')
            console.log("zmogus", response.data.results)
            setPlayersData(response.data.results)
        }
        getData()
    }, [])

    return (
        <Box sx={{ backgroundColor: "white", borderRadius: 10, marginTop: 2 }}>
            {playersData.map(basketballPlayer => (
                <>
                    <PlayerRow basketballPlayer={basketballPlayer} />
                    <Divider />
                </>

            ))}
        </Box>
    )
}

export default BasketballPlayersList;