import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JustSpica.png',
    alt: 'Alternative Text',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}