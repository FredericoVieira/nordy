import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HeaderBar } from '.'

export default {
  title: 'HeaderBar',
  component: HeaderBar,
} as ComponentMeta<typeof HeaderBar>

const Template: ComponentStory<typeof HeaderBar> = () => <HeaderBar />

export const Default = Template.bind({})
