import { MemoryRouter } from 'react-router-dom'

import { HeaderBar } from './HeaderBar'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/HeaderBar',
  component: () => (
    <MemoryRouter>
      <HeaderBar />
    </MemoryRouter>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
