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
// App component imports
import MainLayout from './App/components/templates/Layouts/Main/Main'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LoginForm from './App/components/molecules/LoginForm/LoginForm'
import lightTheme from './App/assets/styles/themes/lightTheme'

/**
 * App component
 * @returns component
 */
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <MainLayout>
          <LoginForm />
        </MainLayout>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
