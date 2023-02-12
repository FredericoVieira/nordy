import styled, { css } from 'styled-components'

export const Page = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[60]};
  `}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
