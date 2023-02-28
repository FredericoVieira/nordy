import { generateAlphabet } from '~/utils/helpers'

import * as S from './Navigation.styles'

export const NAVIGATION_LINKS = [
  {
    to: '/',
    label: <S.HomeIcon />,
  },
  ...generateAlphabet().map(({ letter, capital }) => ({
    to: `letter/${letter}`,
    label: capital,
  })),
]
