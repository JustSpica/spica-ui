import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import { CheckboxStyled, Indicator } from '../styles/Checkbox'

export interface CheckboxProps extends ComponentProps<typeof CheckboxStyled> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxStyled {...props}>
      <Indicator>
        <Check weight="bold" />
      </Indicator>
    </CheckboxStyled>
  )
}
