import { Route, Routes } from 'react-router-dom'

import { Base } from '~/layouts/Base'
import { Home } from '~/pages/Home'
import { Letter } from '~/pages/Letter'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/:id?" element={<Home />} />
        <Route path="letter/:letter" element={<Letter />} />
      </Route>
    </Routes>
  )
}
