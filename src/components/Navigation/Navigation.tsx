import * as S from './Navigation.styles'
import { NAVIGATION_LINKS } from './navigation-links'

import type { NavigationProps } from './types'

export function Navigation({ isHomePage = false }: NavigationProps) {
  return (
    <S.Container>
      <S.Header isHomePage={isHomePage}>
        <S.Text>Search by</S.Text>
        <S.Text>initial letter:</S.Text>
      </S.Header>
      <S.Nav>
        {NAVIGATION_LINKS.map(({ to, label }) => (
          <S.NavLink key={to} to={to}>
            {label}
          </S.NavLink>
        ))}
      </S.Nav>
    </S.Container>
  )
}
