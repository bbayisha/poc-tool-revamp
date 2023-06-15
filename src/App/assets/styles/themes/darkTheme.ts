import { createTheme } from '@mui/material/styles'
import baseTheme from './baseTheme'
import { deepmerge } from '@mui/utils'


// Define your custom theme
const dark = createTheme({
  palette: {
    background: {
      default: '#323232',
    }
  },
  typography: {
    h5: {
      color: '#ffffff',
    },
    h4: {
      color: '#ffffff',
    },
    h3: {
      color: '#ffffff',
    },
    h2: {
      color: '#ffffff',
    },
    h1: {
      color: '#ffffff',
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
              borderColor: 'none',
              boxShadow: '1px 1px 2px rgba(66, 66, 66, 0.3), -1px -1px 2px rgba(36, 36, 36, 0.5), inset -1px 1px 2px rgba(36, 36, 36, 0.2), inset 1px -1px 2px rgba(36, 36, 36, 0.2), inset -1px -1px 2px rgba(66, 66, 66, 0.9), inset 1px 1px 3px rgba(36, 36, 36, 0.9)'
            },
            '&:hover fieldset': {
              borderColor: 'none',
              boxShadow: '1px 1px 2px rgba(66, 66, 66, 0.3), -1px -1px 2px rgba(36, 36, 36, 0.5), inset -1px 1px 2px rgba(36, 36, 36, 0.2), inset 1px -1px 2px rgba(36, 36, 36, 0.2), inset -1px -1px 2px rgba(66, 66, 66, 0.9), inset 1px 1px 3px rgba(36, 36, 36, 0.9)'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'none',
              boxShadow: '1px 1px 2px rgba(66, 66, 66, 0.3), -1px -1px 2px rgba(36, 36, 36, 0.5), inset -1px 1px 2px rgba(36, 36, 36, 0.2), inset 1px -1px 2px rgba(36, 36, 36, 0.2), inset -1px -1px 2px rgba(66, 66, 66, 0.9), inset 1px 1px 3px rgba(36, 36, 36, 0.9)'
            },
            '& input': {
              color: 'rgba(221, 226, 229, 0.3)',
            },
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#D2D6DA'
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(271.18deg, #2152FF 0%, #21D4FD 96.24%)',
          color: 'white',
          boxShadow: '2.64183px 2.64183px 5.28366px rgba(114, 142, 171, 0.1), -7.92548px -7.92548px 26.4183px #FFFFFF, 5.28366px 5.28366px 26.4183px rgba(111, 140, 176, 0.41)',
          '&:hover': {
            background: 'linear-gradient(271.18deg, #2152FF 0%, #21D4FD 96.24%)',
          },
        },
        outlined: {
          background: '#F0F0F3',
          color: '#1BA0D7',
          boxShadow: '2.64183px 2.64183px 5.28366px rgba(114, 142, 171, 0.1), -7.92548px -7.92548px 26.4183px #FFFFFF, 5.28366px 5.28366px 26.4183px rgba(111, 140, 176, 0.41)',
          '&:hover': {
            background: '#F0F0F3',
          },
        },
      },
    },
  },
})


const darkTheme = createTheme(deepmerge(dark, baseTheme))


export default darkTheme
