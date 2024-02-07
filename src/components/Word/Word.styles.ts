import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

    ${media.lessThan('medium')`
      margin-top: ${theme.spacing[32]};
    `}
  `}
`

export const CirclesImage = styled(Circles)`
  z-index: -1;
  width: 100%;
  position: absolute;
  top: -30px;

  ${media.lessThan('medium')`
    top: -60px;
  `}
`

export const Wrapper = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
  `}
`

export const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Classification = styled.span`
  ${({ theme }) => css`
    position: relative;
    top: 0px;
    left: -45px;
    width: fit-content;
    border: 1px solid ${theme.colors.yellow};
    border-radius: 25px;
    font-size: ${theme.fontSize.labelSmall};
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: ${theme.spacing[2]};
    text-transform: uppercase;
    padding: ${theme.spacing[2]} ${theme.spacing[6]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelExtraSmall};
      letter-spacing: ${theme.spacing[1]};
      padding: ${theme.spacing[1]} ${theme.spacing[4]};
    `}
  `}
`

type WordProps = {
  main?: boolean
}
export const Word = styled.span<WordProps>`
  ${({ theme, main }) =>
    main
      ? css`
          font-size: ${theme.fontSize.titleLarge};
          font-size: min(${theme.fontSize.titleLarge}, 12vw);
          line-height: min(${theme.fontSize.titleLarge}, 12vw);
          text-transform: uppercase;
          margin-right: ${theme.spacing[6]};

          ${media.lessThan('medium')`
            font-size: ${theme.fontSize.body};
            line-height: ${theme.fontSize.bodyLarge};
            margin-right: ${theme.spacing[0]};
          `}
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
    font-size: ${theme.fontSize.bodySmall};

    ${media.lessThan('medium')`
      flex-direction: row;
      font-size: ${theme.fontSize.label};
    `}
  `}
`

export const Property = styled.span`
  text-transform: uppercase;
  white-space: nowrap;
  width: fit-content;

  ${({ theme }) => css`
    ${media.lessThan('medium')`
      margin-right: ${theme.spacing[4]};
    `}
  `}
`

export const Translation = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.bodySmall};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    height: fit-content;
    white-space: nowrap;
    color: ${theme.colors.black};
    background-color: ${theme.colors.yellow};
    letter-spacing: ${theme.spacing[4]};
    margin-right: ${theme.spacing[6]};
    padding: ${theme.spacing[0]} ${theme.spacing[6]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelLarge};
      text-align: center;
      white-space: inherit;
      margin-right: ${theme.spacing[0]};
      margin-top: ${theme.spacing[2]};
    `}
  `}
`

export const Pronunciation = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.bodySmall};
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: ${theme.spacing[4]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelLarge};
    `}
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    &:first-letter {
      text-transform: uppercase;
    }

    &:only-child {
      list-style: none;
    }

    &:nth-child(2) {
      margin-left: ${theme.spacing[8]};

      ${media.lessThan('medium')`
        margin-top: ${theme.spacing[1]};
        margin-left: ${theme.spacing[2]};
      `}
    }
  `}
`
type ListProps = {
  isExample?: boolean
}
export const List = styled.ol<ListProps>`
  ${({ theme, isExample }) => css`
    font-size: ${theme.fontSize.labelLarge};
    line-height: ${theme.fontSize.body};
    list-style-position: inside;
    margin: ${theme.spacing[2]} auto 0 auto;
    max-width: 70vw;

    ${isExample &&
    css`
      margin-left: ${theme.spacing[10]};

      &:has(li:only-child) {
        margin-top: ${theme.spacing[8]};
      }
    `}

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.label};
      line-height: ${theme.fontSize.labelLarge};
      margin-top: ${theme.spacing[20]};
      margin: ${theme.spacing[20]} auto 0 auto;
      max-width: 100%;

      ${
        isExample &&
        css`
          margin-top: ${theme.spacing[60]} !important;
          margin-left: ${theme.spacing[0]};
        `
      }

    `}
  `}
`

export const Examples = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 65vw;
    position: relative;
    margin: ${theme.spacing[72]} ${theme.spacing[0]} ${theme.spacing[10]}
      ${theme.spacing[20]};

    ${media.lessThan('medium')`
      max-width: 100%;
      margin: ${theme.spacing[0]};
    `}
  `}
`

export const CubeImage = styled(Cube)`
  position: absolute;
  top: -35px;
  left: -40px;

  ${media.lessThan('medium')`
    width: 20%;
    left: 30px;
    top: -5px;
  `}
`

export const AsteriskLineImage = styled(AsteriskLine)`
  ${({ theme }) => css`
    position: absolute;
    right: -${theme.spacing[16]};
    bottom: -${theme.spacing[80]};

    ${media.lessThan('medium')`
      width: 50%;
      right: -${theme.spacing[12]};
      bottom: -${theme.spacing[52]};
    `}
  `}
`
