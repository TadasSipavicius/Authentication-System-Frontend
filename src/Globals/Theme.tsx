import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Theme {
        breakpoints: {
            values: {
                smallMobile: number;
                mobile: number;
                tablet: number;
                laptop: number;
                desktop: number;
            }

        };
    }

    interface ThemeOptions {
        breakpoints?: {
            values?: {
                smallMobile?: number;
                mobile?: number;
                tablet?: number;
                laptop?: number;
                desktop?: number;
            }
        };
    }
}

export const theme = createTheme({

    palette: {
        primary: {
            main: '#fff'
        },
    },
    
    breakpoints: {
        values: {
            smallMobile: 0,
            mobile: 400,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        }
    }

})