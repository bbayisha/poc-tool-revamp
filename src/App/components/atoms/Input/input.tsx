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
import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import { CustomisedInputProps } from './types'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

const CustomisedInput: React.FC<CustomisedInputProps> = ({
  label,
  id,
  value,
  onChange,
  icon,
  type,
  iconPosition,
  ...rest
}) => {
  const isValidPosition = iconPosition === 'start' || iconPosition === 'end'
  return (
    <>
      <TextField
        id={id}
        variant='outlined'
        value={value}
        type={type}
        onChange={(e) => onChange(e)}
        fullWidth
        {...rest}
        InputProps={{
          ...(icon && isValidPosition &&{
            [iconPosition + 'Adornment']: (
              <InputAdornment position={iconPosition}>
                {icon}
              </InputAdornment>
            ),
          }),
        }}
      />
    </>
  )
}

export default CustomisedInput
