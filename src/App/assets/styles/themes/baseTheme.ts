
import { createTheme } from '@mui/material/styles'

// Define your custom theme
const baseTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '14px'
    },
    h4: {
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px'
    },
    h3: {
      fontWeight: '700',
      fontSize: '28px',
      lineHeight: '33px'
    },
    h2: {
      fontWeight: '500',
      fontSize: '38px',
      lineHeight: '45px'
    },
    h1: {
      fontWeight: '500',
      fontSize: '50px',
      lineHeight: '59px'
    },
    body1: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '150%'
    },
    body2: {
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '14px',
      textTransform: 'uppercase'
    },
    subtitle2: {
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '14px',
      textTransform: 'uppercase'
    }

  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          border: 'none',
          padding: '3px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '12px'
            },
            '&:hover fieldset': {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '12px'
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '12px'
            },
            '& input': {
              fontSize: '16px'
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: '700',
          fontSize: '16px '
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '12px',
          fontWeight: '700',
          fontStyle: 'normal',
          textTransform: 'capitalize',
          fontSize: '14px',
          padding: '14px 100px',
        },
        outlined: {
          borderRadius: '12px'
        }
      },
    },
  },
})

export default baseTheme
