import { ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Authentication } from './Globals/contexts/Context';
import { AuthSelectedCardContext, CARD_TYPES, theme } from './Globals/Index';
import MyRoutes from './MyRoutes';
import jwt from 'jwt-decode';

function App() {

  const [selectedCard, setSelectedCard] = useState(CARD_TYPES.LOGIN_CARD);
  const [authenticated, setAuthenticated] = useState({
    isAuthenticated: false,
    user: null
  });

  useEffect(() => {
    const authCookie = Cookies.get('auth-access-token');

    if (authCookie) {
      setAuthenticated({ isAuthenticated: true, user: jwt(authCookie) })
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthSelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
        <Authentication.Provider value={{ authenticated, setAuthenticated }}>
          <MyRoutes />
        </Authentication.Provider>
      </AuthSelectedCardContext.Provider>
    </ThemeProvider>
  );
}

export default App;
