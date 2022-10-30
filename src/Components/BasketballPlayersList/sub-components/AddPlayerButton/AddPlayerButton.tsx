import { Box, Button } from '@mui/material';
import React from 'react';

interface IAddPlayerButtonProps {
    playerPrice: number;
};

const AddPlayerButton = ({ playerPrice }: IAddPlayerButtonProps) => {
    return (
        <Box>
            <Button sx={{color: "black"}}>
                {playerPrice}$
            </Button>
        </Box>
    )
}

export default AddPlayerButton;