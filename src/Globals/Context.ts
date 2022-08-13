import { createContext } from 'react';
import { AuthSelectedCardType } from './ContextTypes';

export const AuthSelectedCardContext = createContext<AuthSelectedCardType | null>(null);