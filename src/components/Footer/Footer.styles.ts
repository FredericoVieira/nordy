import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${theme.fontSize.label};
    margin-top: ${theme.spacing[10]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelSmall};
      margin-top: ${theme.spacing[4]};
    `}
  `}
`

export const Hr = styled.hr`
  ${({ theme }) => css`
    width: 50%;
    margin-bottom: 1rem;
    border: 0;
    border-top: 2px solid ${theme.colors.gray};
  `}
`

export const Note = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacing[4]};
  `}
`

export const Link = styled.a``
