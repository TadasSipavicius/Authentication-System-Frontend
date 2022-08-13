import * as React from 'react';
import { SelectedCardType } from './ContextTypes';

export const SelectedCardContext = React.createContext<SelectedCardType | null>(null);