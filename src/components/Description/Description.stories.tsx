import { Description } from './Description'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Description',
  component: Description,
  tags: ['autodocs'],
} satisfies Meta<typeof Description>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
