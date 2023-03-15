import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../theme'

export const CheckboxStyled = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 0,
  border: '2px solid $gray900',
  borderRadius: '$xs',
  backgroundColor: '$gray900',
  boxSizing: 'border-box',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'all 150ms ease-in',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
    borderColor: '$ignite300',
  },

  '&:focus': {
    borderColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const Indicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 150ms ease-in`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 150ms ease-in`,
  },
})
