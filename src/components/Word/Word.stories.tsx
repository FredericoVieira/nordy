import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Word } from '.'

export default {
  title: 'Word',
  component: Word,
} as ComponentMeta<typeof Word>

const Template: ComponentStory<typeof Word> = (args) => <Word {...args} />

export const Default = Template.bind({})
