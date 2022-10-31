import { Box, Button } from '@mui/material';
import React from 'react';

interface IAddPlayerButtonProps {
    playerPrice: number;
};

const AddPlayerButton = ({ playerPrice }: IAddPlayerButtonProps) => {
    return (
        <Box sx={{ marginRight: 5, width: 100 }}>
            <Button
                sx={{ color: "black", width: "100%" }}
                variant="outlined"
                color='success'
            >
                {playerPrice}$
            </Button>
        </Box>
    )
}

export default AddPlayerButton;