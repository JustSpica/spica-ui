import { FloppyDisk } from 'phosphor-react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@spica-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'solid',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'text'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<ButtonProps>

export const Solid: StoryObj<ButtonProps> = {}
export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}
export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
  },
}
export const Icon: StoryObj<ButtonProps> = {
  args: {
    variant: 'solid',
    children: (
      <>
        Button with icon
        <FloppyDisk />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
