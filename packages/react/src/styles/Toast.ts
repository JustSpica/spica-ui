import * as Toast from '@radix-ui/react-toast'

import { styled, keyframes } from '../theme'

const swipeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(0%, 50%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(0%, 0%) scale(1)',
  },
})

const swipeOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translate(0%, 0%) scale(1)',
  },
  to: {
    opacity: 0,
    transform: 'translate(0%, 50%) scale(0.96)',
  },
})

export const ToastContainerStyled = styled(Toast.Root, {
  padding: '$3 $5',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  '&[data-state="open"]': {
    animation: `${swipeIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);`,
  },

  '&[data-state="closed"]': {
    animation: `${swipeOut} 150ms cubic-bezier(0.16, 1, 0.3, 1);`,
  },
})

export const ToastTitleStyled = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescriptionStyled = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastCloseStyled = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  display: 'flex',
  color: '$gray200',
  cursor: 'pointer',
  transition: 'color 150ms ease-in',

  '&:hover': {
    color: '$gray400',
  },
})

export const ToastViewportStyled = styled(Toast.Viewport, {
  width: '100%',
  maxWidth: '360px',
  position: 'fixed',
  bottom: 0,
  right: 0,
  listStyle: 'none',
  zIndex: 100,
})
