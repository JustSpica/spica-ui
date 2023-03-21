import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TextAreaStyled } from '../styles/TextArea'

export interface TextAreaProps extends ComponentProps<typeof TextAreaStyled> {}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaStyled>,
  TextAreaProps
>((props, ref) => {
  return <TextAreaStyled ref={ref} {...props} />
})

TextArea.displayName = 'TextArea'
