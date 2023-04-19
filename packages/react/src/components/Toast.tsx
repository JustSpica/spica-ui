import React, { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'

import {
  ToastCloseStyled,
  ToastContainerStyled,
  ToastDescriptionStyled,
  ToastTitleStyled,
  ToastViewportStyled,
} from '../styles/Toast'

export function ToastProvider({
  children,
  ...props
}: ToastPrimitive.ToastProviderProps) {
  return (
    <ToastPrimitive.Provider {...props}>
      {children}
      <ToastViewportStyled />
    </ToastPrimitive.Provider>
  )
}

export interface ToastProps
  extends ComponentProps<typeof ToastContainerStyled> {
  title: string
}

export const Toast = ({ title, children, ...props }: ToastProps) => {
  return (
    <ToastContainerStyled {...props}>
      <ToastTitleStyled>{title}</ToastTitleStyled>
      <ToastDescriptionStyled>{children}</ToastDescriptionStyled>
      <ToastCloseStyled>
        <X size={20} />
      </ToastCloseStyled>
    </ToastContainerStyled>
  )
}
Toast.displayName = 'Toast'
