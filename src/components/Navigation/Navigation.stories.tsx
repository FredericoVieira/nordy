import { MemoryRouter } from 'react-router-dom'

import { Navigation } from './Navigation'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation',
  component: () => (
    <MemoryRouter>
      <Navigation isHomePage />
    </MemoryRouter>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
