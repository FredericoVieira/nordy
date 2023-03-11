import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from '~/routes'
import { GlobalStyle, theme } from '~/styles'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
