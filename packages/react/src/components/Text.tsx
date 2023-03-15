import React, { ComponentProps } from 'react'
import { TextStyled } from '../styles/Text'

export interface TextProps extends ComponentProps<typeof TextStyled> {
  as?: React.ElementType
}

export function Text({ children, ...props }: TextProps) {
  return <TextStyled {...props}>{children}</TextStyled>
}
