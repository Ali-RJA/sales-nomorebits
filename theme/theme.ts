'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5A3C',
      light: '#FF7A5C',
      dark: '#E04A2C',
    },
    secondary: {
      main: '#FFB800',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      '@media (max-width:900px)': {
        fontSize: '2.75rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1.25rem',
      lineHeight: 1.7,
      '@media (max-width:900px)': {
        fontSize: '1.125rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '16px 32px',
          fontSize: '1rem',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#FF5A3C',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#E04A2C',
            boxShadow: '0 8px 24px rgba(255, 90, 60, 0.3)',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          borderColor: '#FF5A3C',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(255, 90, 60, 0.05)',
          },
        },
      },
    },
  },
});

export default theme;

