import * as S from './Navigation.styles'
import { NAVIGATION_LINKS } from './navigation-links'

import type { NavigationProps } from './types'

export function Navigation({ showHeader = false }: NavigationProps) {
  return (
    <S.Container>
      {showHeader && (
        <S.Header>
          <S.Text>Search by</S.Text>
          <S.Text>initial letter:</S.Text>
        </S.Header>
      )}
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
