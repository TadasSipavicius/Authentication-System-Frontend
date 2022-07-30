import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function NavigationBar() {

    return (
        <AppBar position="sticky" elevation={4} sx={{ height: 70, justifyContent: "center", background: 'transparent'}} >
            <Toolbar>
                <Container sx={{ display: "flex", flexDirection: "row", float: "right", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography>
                            AuthTS
                        </Typography>
                    </Box>


                    <Box sx={{ float: "right" }}>
                        <Button sx={{ color: "white" }}>Sign up</Button>
                        <Button sx={{ color: "white" }}>Register</Button>
                    </Box>


                </Container>
            </Toolbar>
        </AppBar >
    )
}