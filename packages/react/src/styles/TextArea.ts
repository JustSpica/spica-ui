import { styled } from '../theme'

export const TextAreaStyled = styled('textarea', {
  width: '100%',
  minHeight: 80,
  padding: '$3 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  color: '$white',
  boxSizing: 'border-box',
  resize: 'vertical',
  transition: 'border-color 150ms ease-in',

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})
