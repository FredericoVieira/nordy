import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
  width: 100%;
  position: absolute;
  top: -30px;

  ${media.lessThan('medium')`
    top: -60px;
  `}
`
type WrapperProps = {
  hasMaxWidth?: boolean
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
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
          font-size: min(${theme.fontSize.titleLarge}, 10vw);
          line-height: ${theme.fontSize.titleLarge};
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

    &:last-child {
      margin-left: ${theme.spacing[12]};

      ${media.lessThan('medium')`
        margin-left: ${theme.spacing[0]};
      `}
    }
  `}
`
type ListProps = {
  hasSingleItem?: boolean
  isExample?: boolean
}
export const List = styled.ol<ListProps>`
  ${({ theme, hasSingleItem, isExample }) => css`
    font-size: ${theme.fontSize.labelLarge};
    line-height: ${theme.fontSize.body};
    margin-top: ${theme.spacing[2]};
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

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.label};
      line-height: ${theme.fontSize.labelLarge};
      list-style-position: inside;
      margin-top: ${theme.spacing[20]};

      ${
        isExample &&
        `
          margin-top: ${theme.spacing[60]};
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
    width: 60%;
    position: relative;
    margin: ${theme.spacing[72]} ${theme.spacing[0]} ${theme.spacing[10]}
      ${theme.spacing[20]};

    ${media.lessThan('medium')`
      width: 100%;
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
