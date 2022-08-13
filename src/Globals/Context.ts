import * as React from 'react';
import { AuthSelectedCardType } from './ContextTypes';

export const AuthSelectedCardContext = React.createContext<AuthSelectedCardType | null>(null);