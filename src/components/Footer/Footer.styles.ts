import styled, { css } from 'styled-components'

import type { FooterProps } from './types'

export const Box = styled.div<FooterProps>`
  ${({ theme }) => css`
    padding: ${theme.spacing[4]};
  `}
`
