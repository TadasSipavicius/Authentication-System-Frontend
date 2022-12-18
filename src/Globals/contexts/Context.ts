import { createContext } from 'react';
import { AuthSelectedCardType, Auth } from './types/ContextTypes';

export const AuthSelectedCardContext = createContext<AuthSelectedCardType | null>(null);

export const Authentication = createContext<Auth | null>(null);