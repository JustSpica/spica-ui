import React, { ComponentProps } from 'react'

import { BoxStyled } from '../styles/Box'

export interface BoxProps extends ComponentProps<typeof BoxStyled> {}

export function Box({ children, ...props }: BoxProps) {
  return <BoxStyled {...props}>{children}</BoxStyled>
}
