import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
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
                    backgroundColor: "#39A0C6",
                    boxShadow: "rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px"
                }}
            >
                <Box sx={{ width: "100%", height: 200, borderBottomRightRadius: "200px 200px", backgroundImage: "linear-gradient(to right, #ff512f, #f09819)", marginBottom: 4 }}>
                    <Stack sx={{ marginTop: 4, color: "#fff", margin: "0px 0px 0px 30px", height: "100%", justifyContent: "center" }}>
                        <Stack
                            sx={{ fontSize: "2rem" }}
                        >
                            Welcome to
                        </Stack>
                        <Stack
                            sx={{ fontFamily: "Lobster, cursive", fontSize: "3rem" }}
                        >
                            AuthTS
                        </Stack>

                    </Stack>
                </Box>


                <Box>
                    <Typography sx={{marginLeft: 2.5, fontSize: 13}}>
                        Username
                    </Typography>
                    <TextField
                        size='small'
                        sx={{
                            "& .MuiInputBase-root": {
                                borderRadius: 20,
                                backgroundColor: "rgba(255,255,255, 0.7)"
                            },
                            "& .MuiInputBase-input": {
                                width: 300
                            }
                        }}
                    />
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Typography sx={{marginLeft: 2.5, fontSize: 13}}>
                        Password
                    </Typography>
                    <TextField
                        size='small'
                        sx={{
                            "& .MuiInputBase-root": {
                                borderRadius: 20,
                                backgroundColor: "rgba(255,255,255, 0.7)"
                            },
                            "& .MuiInputBase-input": {
                                width: 300
                            }
                        }}
                    />
                </Box>

                <Button>Login</Button>
            </Box>
        </Container >
    )
}