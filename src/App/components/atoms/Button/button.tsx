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
// Third party imports
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
// Types imports
import { ButtonProps, GradientButtonProps } from './types'
// import { gradientButtonStyles } from './styles'

/**
 * CustomizedButton component with icon support
 * @param param0 {
 *  variant: Button variant (text, outlined, contained)
 *  text: string
 *  classes: string
 *  icon: React.ReactNode
 *  iconPosition: string
 * }
 * @returns component
 */
// const CustomizedButton = ({
//   variant,
//   text,
//   classes,
//   icon,
//   iconPosition,
// }: ButtonProps) => {
//   return (
//     <Button variant={variant || 'text'} color="error" className={classes}>
//       {iconPosition === 'left' && icon && <Icon>{icon}</Icon>}
//       {text}
//       {iconPosition === 'right' && icon && <Icon>{icon}</Icon>}
//     </Button>
//   )
// }

// export default CustomizedButton

const GradientButton = ({ textvalue, variant }: GradientButtonProps) => {
  const isValidVariant = variant === 'contained' || variant === 'outlined' || variant === 'text'

  if (isValidVariant) {
    return (
      <Button variant={variant} fullWidth={true}>
        {textvalue}
      </Button>
    )
  }
  return null
}


export default GradientButton
