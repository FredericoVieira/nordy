import styled, { css } from 'styled-components'

export const Page = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[5]} ${theme.spacing[16]};
  `}
`
