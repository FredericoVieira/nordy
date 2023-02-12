import styled, { css } from 'styled-components'

export const HeaderBar = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[5]} ${theme.spacing[16]};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSize.large};
    color: ${theme.colors.yellow};
  `}
`
