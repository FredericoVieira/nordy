import { Outlet, ScrollRestoration, useMatch } from 'react-router-dom'

import { Footer } from '~/components/Footer'
import { HeaderBar } from '~/components/HeaderBar'
import { Navigation } from '~/components/Navigation'

export function Base() {
  const matchHomePage = useMatch('/')

  return (
    <>
      <HeaderBar />
      <Outlet />
      <Navigation isHomePage={!!matchHomePage} />
      <Footer />
      <ScrollRestoration />
    </>
  )
}
