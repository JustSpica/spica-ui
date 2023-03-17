import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@spica-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    placeholder: 'Type your text',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const Prefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'col.com/',
  },
}
