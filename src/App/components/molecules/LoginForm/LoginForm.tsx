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

// React imports
import React from 'react'
import GradientButton from '../../atoms/Button/button'
import CustomisedInput from '../../atoms/Input/input'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@emotion/react'
import lightTheme from '../../../assets/styles/themes/lightTheme'
import { CssBaseline, InputLabel } from '@mui/material'
import logo from '../../../assets/media/logo.png'
import loginImg from '../../../assets/media/login_img.png'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import darkTheme from '../../../assets/styles/themes/darkTheme'

const LoginForm: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Access the new value from the event object
    const newValue = event.target.value
    // Handle the new value
    console.log(newValue)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Form Submitted')
  }
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Box  sx={{height: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Grid container spacing={3} sx={{margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 4px rgba(114, 142, 171, 0.1), -6px -6px 20px #FFFFFF, 4px 4px 20px rgba(111, 140, 176, 0.41)', borderRadius: '12px', width: '70vw', padding: '55px'}}>
            <Grid item xs={6}>
              <Box>
                <img width='270px'src={logo}></img>
              </Box>
              <Typography sx={{marginTop: '20px', color: '#AFB0BB', fontSize: '14px'}}>Lorem ipsum, or lipsum as it is sometimes <br />known, is dummy text used</Typography>
              <Box sx={{marginTop: '50px'}}>
                <img width='340px'src={loginImg}></img>
              </Box>
            </Grid>
            <Grid item xs={6} >
              <Box sx={{padding: '0px 30px'}}>
                <Typography component='h4' variant='h4' sx={{marginBottom: '14px'}}>Test Drive</Typography>
                <Typography component='h3' variant='h3' sx={{marginBottom: '35px'}}>Cisco SD-WAN</Typography>
                <Box component='form' onSubmit={handleSubmit}>
                  <InputLabel htmlFor='email' sx={{marginBottom: '7px'}}>Email</InputLabel>
                  <CustomisedInput id='email' type='input' onChange={handleChange} label='Email' value='Email Address' iconPosition='end' icon={<AlternateEmailIcon />} />
                  <InputLabel htmlFor='password' sx={{marginBottom: '7px', marginTop: '30px'}}>Password</InputLabel>
                  <CustomisedInput id='password' type='password' onChange={handleChange} label='Password' value='' iconPosition='end' icon={<RemoveRedEyeOutlinedIcon />} />
                  <Typography sx={{marginBottom: '25px', marginTop: '15px'}}>By registering you agree to the Cisco <Link>{'Terms of Use'}</Link></Typography>
                  <GradientButton variant='contained' textvalue="Log In" />
                  <Grid sx={{marginTop: '26px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} container>
                    <Grid item>
                      <Typography>Don&apos;t have an account? <Link>{'Sign Up'}</Link></Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default LoginForm
