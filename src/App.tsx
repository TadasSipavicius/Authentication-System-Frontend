import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Authentication } from './Globals/contexts/Context';
import { AuthSelectedCardContext, CARD_TYPES, theme } from './Globals/Index';
import MyRoutes from './MyRoutes';


function App() {

  const [selectedCard, setSelectedCard] = useState(CARD_TYPES.LOGIN_CARD);
  const [authenticated, setAuthenticated] = useState({
    isAuthenticated: false,
    user: null
  })

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
