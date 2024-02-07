import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ReactComponent as Map } from '~/assets/map.svg'

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[8]};
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.label};
    margin-bottom: ${theme.spacing[4]};
  `}
`

export const FloatingButton = styled.button`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1;
    bottom: 5%;
    right: 5%;
    display: flex;
    background-color: ${theme.colors.yellow};
    padding: ${theme.spacing[2]} ${theme.spacing[6]};
    border-radius: 50px;
    border: 2px outset ${theme.colors.gray};
    box-shadow: 2px 2px 3px ${theme.colors.gray};

    ${media.lessThan('medium')`
      right: 10%;
    `}
  `}
`

export const MapIcon = styled(Map)`
  width: 24px;
  height: 24px;

  ${media.lessThan('medium')`
    width: 20px;
    height: 20px;
  `}
`
