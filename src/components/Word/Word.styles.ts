import styled, { css } from 'styled-components'

import { ReactComponent as AsteriskLine } from '~/assets/asterisk-line.svg'
import { ReactComponent as Circles } from '~/assets/circles.svg'
import { ReactComponent as Cube } from '~/assets/cube.svg'

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: ${theme.spacing[52]};
  `}
`

export const CirclesImage = styled(Circles)`
  z-index: -1;
  width: 500px;
  position: absolute;
  top: -30px;
`
type WrapperProps = {
  hasMaxWidth?: boolean
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  max-width: ${({ hasMaxWidth }) => (hasMaxWidth ? '70%' : 'auto')};
`

type WordProps = {
  main?: boolean
}
export const Word = styled.span<WordProps>`
  ${({ theme, main }) =>
    main
      ? css`
          font-size: ${theme.fontSize.xxlarge};
          line-height: ${theme.fontSize.xxlarge};
          text-transform: uppercase;
          margin-right: ${theme.spacing[6]};
        `
      : css`
          font-weight: ${theme.fontWeight.bold};
          color: ${theme.colors.yellow};
        `}
`

export const Properties = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${theme.fontSize.regular};
  `}
`

export const Property = styled.span`
  text-transform: uppercase;
  white-space: nowrap;
`

export const Translation = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.regular};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    height: fit-content;
    white-space: nowrap;
    color: ${theme.colors.black};
    background-color: ${theme.colors.yellow};
    letter-spacing: ${theme.spacing[4]};
    margin-right: ${theme.spacing[6]};
    padding: ${theme.spacing[0]} ${theme.spacing[6]};
  `}
`

export const Pronunciation = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.regular};
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: ${theme.spacing[4]};
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    &:first-letter {
      text-transform: uppercase;
    }

    &:last-child {
      margin-left: ${theme.spacing[12]};
    }
  `}
`
type ListProps = {
  hasSingleItem?: boolean
  isExample?: boolean
}
export const List = styled.ol<ListProps>`
  ${({ theme, hasSingleItem, isExample }) => css`
    font-size: ${theme.fontSize.small};
    line-height: ${theme.fontSize.medium};
    ${isExample && `margin-left: ${theme.spacing[10]};`}

    ${hasSingleItem &&
    `
      list-style: none;
      
      ${Item} {        
        &:last-child {
          ${
            isExample &&
            `
              margin-top: ${theme.spacing[8]};
              margin-left: ${theme.spacing[0]};
            `
          }
        }
      }
    `}
  `}
`

export const Examples = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 60%;
    position: relative;
    margin: ${theme.spacing[72]} ${theme.spacing[0]} ${theme.spacing[10]}
      ${theme.spacing[20]};
  `}
`

export const CubeImage = styled(Cube)`
  position: absolute;
  width: 150px;
  top: -35px;
  left: -40px;
`

export const AsteriskLineImage = styled(AsteriskLine)`
  position: absolute;
  width: 300px;
  bottom: -155px;
  right: 0;
`
