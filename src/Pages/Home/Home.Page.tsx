import { Box, Button, Container } from '@mui/material';
import React from 'react';

export default function HomePage() {
    return (
        <Container fixed sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
            <Box
                sx={{
                    height: 600,
                    width: 450,

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 10,
                    border: "2px solid white"
                }}
            >
                TESTAS
                <Button>Preess me </Button>
            </Box>
        </Container>
    )
}