import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Page = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[5]} ${theme.spacing[16]};

    ${media.lessThan('medium')`
      padding: ${theme.spacing[0]} ${theme.spacing[12]};
    `}
  `}
`
