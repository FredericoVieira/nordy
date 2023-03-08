import { theme } from '~/styles'

import * as S from './HeaderBar.styles'

export function HeaderBar() {
  const { black, gray } = theme.colors

  return (
    <S.HeaderBar>
      <S.Title>Nordy - New word a day</S.Title>
      <S.GithubCorner
        href="https://github.com/FredericoVieira/nordy"
        octoColor={black}
        bannerColor={gray}
      />
    </S.HeaderBar>
  )
}
