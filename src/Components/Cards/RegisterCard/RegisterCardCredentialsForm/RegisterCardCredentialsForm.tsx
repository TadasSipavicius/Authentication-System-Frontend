import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import styles from './RegisterCardCredentialsForm.Styling';

const RegisterCardCredentialsForm = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validation, setValidation] = useState<string | null>(null);

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const onButtonClick = async () => {
        const body = {
            userName: username,
            email: email,
            password: password
        }
        try {
            const response = await axios.post('https://apieurpfantasy.herokuapp.com/api/register', body)
                .catch(error => {
                    console.log("error", error)
                    setValidation(error.response.data.hasOwnProperty('message') ? error.response.data.message : error.response.data)
                });
            console.log("REIZ", response)
            if (response) {
                if(response.status === 201) setValidation("User Successfully Registered");
            }
        } catch (err) {
            console.log("Eror", err)
        }
    }
    return (
        <>
            <Box>
                <Box sx={{ maxWidth: "300px", fontSize: 12, color: "grey", marginBottom: 3 }}>{validation}</Box>
                <Typography sx={styles.textFieldLabel}>
                    Username
                </Typography>
                <TextField
                    placeholder='example'
                    sx={styles.usernameEmailTextInput}
                    value={username}
                    onChange={handleUsernameChange}
                />

                <Typography sx={styles.textFieldLabel}>
                    Email
                </Typography>
                <TextField
                    placeholder='example@gmail.com'
                    sx={styles.usernameEmailTextInput}
                    value={email}
                    onChange={handleEmailChange}
                />

                <Typography sx={styles.textFieldLabel}>
                    Password
                </Typography>
                <TextField
                    placeholder='6 letters or more'
                    sx={styles.passwordTextInput}
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />

                {/* <Typography sx={styles.textFieldLabel}>
                    Confirm Password
                </Typography>
                <TextField
                    placeholder='6 letters or more'
                    sx={styles.passwordTextInput}
                    type='password'
                /> */}
            </Box>

            <Button sx={styles.registerButton} onClick={onButtonClick}>
                Register
            </Button>
        </>
    )
}

export default RegisterCardCredentialsForm;