import { Outlet, useMatch } from 'react-router-dom'

import { Footer } from '~/components/Footer'
import { HeaderBar } from '~/components/HeaderBar'
import { Navigation } from '~/components/Navigation'

export function Base() {
  const match = useMatch('/')

  return (
    <>
      <HeaderBar />
      <Outlet />
      <Navigation showHeader={!!match} />
      <Footer />
    </>
  )
}
