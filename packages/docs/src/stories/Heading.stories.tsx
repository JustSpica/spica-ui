import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@spica-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    as: 'h1',
    size: 'md',
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading Title',
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Title',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
  },
}
