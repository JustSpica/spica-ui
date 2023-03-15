import React, { ComponentProps } from 'react'
import { ButtonStyled } from '../styles/Button'

export interface ButtonProps extends ComponentProps<typeof ButtonStyled> {
  as?: React.ElementType
}

export function Button(props: ButtonProps) {
  return <ButtonStyled {...props} />
}
