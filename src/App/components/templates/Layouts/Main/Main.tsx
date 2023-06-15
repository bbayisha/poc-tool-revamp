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
import * as React from 'react'
// App component imports
import Sidebar from '../../../organisms/Sidebar/Sidebar'
import Header from '../../../organisms/Header/Header'
// Type imports
import { MainLayoutProps } from './types'

/**
 * The MainLayout function renders a layout for protected routes
 * @param param0 MainLayoutProps
 * @returns component
 */
const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="main-layout">
      {/* <Header /> */}
      <div className="content">
        {/* <Sidebar /> */}
        <main>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout