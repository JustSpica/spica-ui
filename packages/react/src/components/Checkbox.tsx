import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Check } from 'phosphor-react'

import { CheckboxStyled, Indicator } from '../styles/Checkbox'

export interface CheckboxProps extends ComponentProps<typeof CheckboxStyled> {}

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxStyled>,
  CheckboxProps
>((props, ref) => {
  return (
    <CheckboxStyled ref={ref} {...props}>
      <Indicator>
        <Check weight="bold" />
      </Indicator>
    </CheckboxStyled>
  )
})

Checkbox.displayName = 'Checkbox'
