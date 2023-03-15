import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox_story$1',
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const Label: StoryObj<CheckboxProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          htmlFor="checkbox_story$1"
          css={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            gap: '$2',
            cursor: 'pointer',
          }}
        >
          <Text size="sm" css={{ lineHeight: 0 }}>
            Checkbox label
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
}
