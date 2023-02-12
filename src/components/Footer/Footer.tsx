import * as S from './Footer.styles'

import type { FooterProps } from './types'

export function Footer({ prop = 'Footer' }: FooterProps) {
  return (
    <S.Box>
      <h1>{prop}</h1>
    </S.Box>
  )
}
