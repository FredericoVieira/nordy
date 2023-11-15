import { Word } from './Word'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Word',
  component: Word,
  tags: ['autodocs'],
  args: {
    id: 'adhere',
    firstLetter: 'a',
    level: 2,
    type: 'verb',
    pronunciation: 'ad·heer',
    synonym: 'stick',
    translation: 'aderir',
    definitions: [
      'stick fast to a surface or substance',
      'to give support or maintain loyalty',
    ],
    examples: [
      'the stamp failed to adhere to the envelope',
      'adhere to traditional values',
    ],
    classification: 'formal',
    inflections: [],
  },
} satisfies Meta<typeof Word>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
