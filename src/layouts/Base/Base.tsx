import { Outlet } from 'react-router-dom'

import { Footer } from '~/components/Footer'
import { HeaderBar } from '~/components/HeaderBar'
import { Navigation } from '~/components/Navigation'

export function Base() {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <Navigation />
      <Footer />
    </>
  )
}
