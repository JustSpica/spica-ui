import { styled } from '../theme'

export const ButtonStyled = styled('button', {
  all: 'unset',
  minWidth: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      solid: {
        color: '$white',
        backgroundColor: '$ignite500',
        transition: 'all 150ms ease-in',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      outline: {
        color: '$ignite300',
        border: '2px solid $ignite500',
        transition: 'all 150ms ease-in',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        },
      },
      text: {
        color: '$gray100',
        transition: 'all 150ms ease-in',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      md: {
        padding: '$3 $4',
        fontSize: '$sm',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
    variant: 'primary',
  },
})
