import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    steps: 4,
  },
  decorators: [
    (Story) => {
      return <Box css={{ width: '480px' }}>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}
