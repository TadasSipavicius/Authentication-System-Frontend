import React from 'react';
import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import styles from './LoginStyling';

export default function Login() {

    const classes = styles;

    return (
        <Container fixed sx={classes.loginContainer}>
            <Box sx={classes.loginCard}>
                <Box sx={classes.topLoginCardContainer}>
                    <Stack sx={classes.topLoginCardDescriptionContainer}>
                        <Stack sx={{ fontSize: "2rem" }} >
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
                <Box sx={{ display: "flex", flexDirection: "row", marginTop: 4 }}>
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