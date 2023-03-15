import React, { ComponentProps } from 'react'
import { HeadingStyled } from '../styles/Heading'

export interface HeadingProps extends ComponentProps<typeof HeadingStyled> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ children, ...props }: HeadingProps) {
  return <HeadingStyled {...props}>{children}</HeadingStyled>
}
