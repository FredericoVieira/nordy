import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../src/styles'

import type { StoryFn } from '@storybook/react'

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: theme.colors.black,
      },
    ],
  },
}

export const decorators = [
  (Story: StoryFn) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]
