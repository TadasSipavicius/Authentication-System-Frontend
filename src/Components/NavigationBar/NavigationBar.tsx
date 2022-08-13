import { AppBar, Box, Button, Container, Link, Toolbar } from '@mui/material';
import * as React from 'react';

export default function NavigationBar() {

    return (
        <AppBar position="sticky" sx={{ height: 70, justifyContent: "center", background: 'transparent', borderBottom: "1px solid white", boxShadow: "none" }} >
            <Toolbar disableGutters>
                <Container maxWidth={false} sx={{ display: "flex", flexDirection: "row", float: "right", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link sx={{ fontSize: 24, fontFamily: "PT Sans Narrow, sans-serif", color: "white", textDecoration: "none" }} component={Link} href="/">
                            AuthTS
                        </Link>
                    </Box>

                    <Box sx={{ float: "right" }}>
                        <Button sx={{ color: "white", fontSize: 16, marginRight: 1 }}>Sign up</Button>
                        <Button sx={{ color: "white", fontSize: 16 }}>Register</Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar >
    )
}