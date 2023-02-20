import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { NAVIGATION_LINKS } from './navigation-links'

import { Navigation } from '.'

export default {
  title: 'Navigation',
  component: Navigation,
  args: {
    links: NAVIGATION_LINKS,
  },
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
