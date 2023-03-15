import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Type your text',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}
