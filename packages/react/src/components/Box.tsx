import React, { ComponentProps } from 'react'

import { BoxStyled } from '../styles/Box'

export interface BoxProps extends ComponentProps<typeof BoxStyled> {
  as?: React.ElementType
  htmlFor?: string
}

export function Box({ children, ...props }: BoxProps) {
  return <BoxStyled {...props}>{children}</BoxStyled>
}
