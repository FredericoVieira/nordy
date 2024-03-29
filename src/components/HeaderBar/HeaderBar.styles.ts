import GithubCornerIcon from 'react-github-corner'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeaderBar = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing[5]} ${theme.spacing[16]};

    ${media.lessThan('medium')`
      padding: ${theme.spacing[5]} ${theme.spacing[8]};
    `}
  `}
`

export const Title = styled(Link)`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.title};
    font-size: ${theme.fontSize.bodyLarge};
    color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.body};
    `}
  `}
`

export const GithubCorner = styled(GithubCornerIcon)`
  ${media.lessThan('medium')`
    & > svg {
      width: 50px;
      height: 50px;
    }
  `}
`
