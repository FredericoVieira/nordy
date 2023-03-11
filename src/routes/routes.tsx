import { createBrowserRouter } from 'react-router-dom'

import { Base } from '~/layouts/Base'
import { Home } from '~/pages/Home'
import { Letter } from '~/pages/Letter'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '/:id?',
        element: <Home />,
      },
      {
        path: 'letter/:letter',
        element: <Letter />,
      },
    ],
  },
])
