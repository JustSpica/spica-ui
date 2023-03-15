import { styled } from '../theme'

export const TextInputStyled = styled('div', {
  width: '100%',
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'baseline',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  transition: 'all 150ms ease-in',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray400',
})

export const Input = styled('input', {
  all: 'unset',
  flex: 1,
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  color: '$white',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
