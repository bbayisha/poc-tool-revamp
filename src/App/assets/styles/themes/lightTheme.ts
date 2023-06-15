/**
  Copyright © 2023 Boilerplate.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 */

// Third party imports
import {  createTheme } from '@mui/material/styles'
import baseTheme from './baseTheme'
import { deepmerge } from '@mui/utils'

// Define your custom theme
const light = createTheme({
  palette: {
    background: {
      default: '#ff0000',
    },
  },
  typography: {
    h5: {
      color: '#344767',
    },
    h4: {
      color: '#344767',
    },
    h3: {
      color: '#344767',
    },
    h2: {
      color: '#344767',
    },
    h1: {
      color: '#344767',
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
              borderColor: '#D2D6DA',
            },
            '&:hover fieldset': {
              borderColor: '#D2D6DA',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D2D6DA',
            },
            '& input': {
              color: '#9A9A9A',
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
          color: '#303E67',
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
            backgroundImage: 'linear-gradient(271.18deg, #2152FF 0%, #21D4FD 96.24%)',
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


const lightTheme = createTheme(deepmerge(light, baseTheme))
console.log('light merged theme', lightTheme)



export default lightTheme
