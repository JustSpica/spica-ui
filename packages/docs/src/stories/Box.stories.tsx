import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Box element</Text>
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
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
