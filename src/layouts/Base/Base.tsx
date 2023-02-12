import { Outlet } from 'react-router-dom'

import { Footer } from '~/components/Footer'
import { HeaderBar } from '~/components/HeaderBar'
import { Navigation } from '~/components/Navigation'
import { NAV_LINKS } from '~/constants'

export function Base() {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <Navigation links={NAV_LINKS} />
      <Footer />
    </>
  )
}
