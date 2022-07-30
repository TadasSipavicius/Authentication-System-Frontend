import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
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
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
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
                    <Typography sx={{ marginLeft: 2.5, fontSize: 13, color: "white", letterSpacing: 0.9 }}>
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
                    <Typography sx={{ marginLeft: 2.5, fontSize: 13, color: "white", letterSpacing: 0.9 }}>
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

                <Button size='large'
                    sx={{ fontSize: 14, width: 150, borderRadius: 20, backgroundImage: "linear-gradient(to right, #ff512f, #f09819)", marginTop: 3.5, marginBottom: 3.5, textTransform: "uppercase" }}>
                    Login
                </Button>

                <Divider variant="middle" sx={{ width: "80%" }} />
                <Typography sx={{ fontSize: 13, marginTop: 1, color: "rgba(255,255,255, 0.7)" }}>
                    Forgot Password?
                </Typography>
                <Box sx={{display: "flex", flexDirection: "row", marginTop: 4}}>
                    <Typography sx={{ fontSize: 14, marginTop: 1, color: "rgba(255,255,255, 0.7)" }}>
                        Don't have an account?

                    </Typography>
                    <Typography sx={{ fontSize: 14, marginTop: 1, color: "rgba(255,255,255, 0.7)", marginLeft: 1 }}>
                        Sign up
                    </Typography>
                </Box>

            </Box>
        </Container >
    )
}