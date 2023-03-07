import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ReactComponent as AsteriskLine } from '~/assets/asterisk-line.svg'
import { ReactComponent as Circle } from '~/assets/circle.svg'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: ${theme.spacing[80]};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacing[52]};
    `}
  `}
`

export const AsteriskLineImage = styled(AsteriskLine)`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    right: -${theme.spacing[16]};

    ${media.lessThan('medium')`
      width: 50%;
      top: -135px;
    `}
  `}
`

export const CircleImage = styled(Circle)`
  position: absolute;
  width: 350px;
  top: -75px;
  left: 50px;

  ${media.lessThan('medium')`
    width: 150px;
    top: -100px;
    left: -20px;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 30%;
    font-size: ${theme.fontSize.bodySmall};
    margin-left: ${theme.spacing[28]};

    ${media.lessThan('medium')`
      max-width: 100%;
      font-size: ${theme.fontSize.label};
      margin-left: ${theme.spacing[0]};
    `}
  `}
`

export const Motivation = styled.p`
  ${({ theme }) => css`
    max-width: 540px;
    font-size: ${theme.fontSize.label};
    text-align: end;
    margin: ${theme.spacing[32]} ${theme.spacing[20]} ${theme.spacing[32]} auto;
    padding-top: ${theme.spacing[16]};
    padding-bottom: ${theme.spacing[16]};
    border-top: 1px solid ${theme.colors.gray[1]};
    border-bottom: 1px solid ${theme.colors.gray[1]};

    ${media.lessThan('medium')`
      max-width: 100%;
      text-align: center;
      margin: ${theme.spacing[20]} ${theme.spacing[0]};
    `}
  `}
`
