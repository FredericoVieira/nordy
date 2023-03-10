import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Description } from '.'

export default {
  title: 'Description',
  component: Description,
} as ComponentMeta<typeof Description>

const Template: ComponentStory<typeof Description> = () => <Description />

export const Default = Template.bind({})
