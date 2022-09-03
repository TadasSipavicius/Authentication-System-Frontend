import { ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { AuthSelectedCardContext, CARD_TYPES, MyRoutes, theme } from './Globals/Index';


function App() {

  const [selectedCard, setSelectedCard] = useState(CARD_TYPES.LOGIN_CARD);

  return (
    <ThemeProvider theme={theme}>
      <AuthSelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
        <MyRoutes />
      </AuthSelectedCardContext.Provider>
    </ThemeProvider>
  );
}

export default App;
