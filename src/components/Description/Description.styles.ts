import styled, { css } from 'styled-components'

import { ReactComponent as Circle } from '~/assets/circle.svg'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: ${theme.spacing[80]};
  `}
`

export const CircleImage = styled(Circle)`
  position: absolute;
  width: 350px;
  top: -75px;
  left: 50px;
`

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 30%;
    font-size: ${theme.fontSize.regular};
    margin-left: ${theme.spacing[28]};
  `}
`

export const Motivation = styled.p`
  ${({ theme }) => css`
    max-width: 50%;
    font-size: ${theme.fontSize.xsmall};
    text-align: end;
    margin: ${theme.spacing[32]} ${theme.spacing[20]} ${theme.spacing[32]} auto;
    padding-top: ${theme.spacing[16]};
    padding-bottom: ${theme.spacing[16]};
    border-top: 1px solid ${theme.colors.gray[1]};
    border-bottom: 1px solid ${theme.colors.gray[1]};
  `}
`
