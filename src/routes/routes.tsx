import { Route, Routes } from 'react-router-dom'

import { Base } from '~/layouts/Base'
import { About } from '~/pages/About'
import { Home } from '~/pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/:letter" element={<About />} />
      </Route>
    </Routes>
  )
}
