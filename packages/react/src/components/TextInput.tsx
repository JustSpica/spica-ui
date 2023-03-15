import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputStyled } from '../styles/TextInput'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }) => {
    return (
      <TextInputStyled>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputStyled>
    )
  },
)

TextInput.displayName = 'TextInput'
