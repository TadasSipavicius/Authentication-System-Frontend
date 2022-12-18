import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './LoginCardCredentialsForm.Styling';
import axios from 'axios';
import { Authentication } from '../../../../Globals/contexts/Context';
import { Auth } from '../../../../Globals/contexts/types/ContextTypes';
import jwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const LoginCardCredentialsForm = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validation, setValidation] = useState<string | null>(null);
    const { authenticated, setAuthenticated } = useContext(Authentication) as Auth;
    const navigate = useNavigate();

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const onButtonClick = async () => {
        const body = {
            email: username,
            password: password
        }
        try {
            const response = await axios.post('https://apieurpfantasy.herokuapp.com/api/login', body)
                .catch(error => {
                    setValidation(error.response.data)
                });
            console.log("REIZ", response)
            if (response) {
                const accessToken = response.data.accessToken;
                const user = jwt(accessToken);
                document.cookie = `auth-access-token=${accessToken}`;
                setAuthenticated({ isAuthenticated: true, user: user })
                console.log("authenticated", authenticated);
                navigate('/teams');
            }
        } catch (err) {
            console.log("Eror", err)
        }
    }

    return (
        <>
            <Box>
                <Box sx={{ maxWidth: "300px", fontSize: 12, color: "#F0951A", marginBottom: 3 }}>{validation}</Box>
                <Typography sx={styles.textFieldLabel}>
                    Username
                </Typography>
                <TextField
                    sx={styles.usernameTextInput}
                    autoComplete='off'
                    value={username}
                    onChange={handleUsernameChange}
                />
            </Box>

            <Box sx={styles.passowordContainer}>
                <Typography sx={styles.textFieldLabel}>
                    Password
                </Typography>
                <TextField
                    sx={styles.passowrdTextInput}
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
            </Box>

            <Button
                size='large'
                sx={styles.loginButton}
                onClick={onButtonClick}
            >
                Login
            </Button>
        </>

    )
}

export default LoginCardCredentialsForm;