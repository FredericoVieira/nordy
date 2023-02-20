import styled, { css } from 'styled-components'

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

export const WordProperties = styled.div`
  width: min-content;
`

export const Circles = styled.img`
  width: 55%;
  position: absolute;
  top: 15%;
  left: 20%;
`

export const Wrapper = styled.div`
  display: flex;
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
      margin-left: ${theme.spacing[16]};
    }
  `}
`

export const List = styled.ol`
  ${({ theme, isSingleDefinition, hasMargin }) => css`
    font-size: ${theme.fontSize.small};
    line-height: ${theme.fontSize.medium};
    padding: ${theme.spacing[3]} ${theme.spacing[0]};
    margin-left: ${hasMargin ? `-${theme.spacing[48]}` : theme.spacing[12]};

    ${isSingleDefinition &&
    `
      list-style: circle;
      
      ${Item} {        
        &:last-child {
          margin-left: ${theme.spacing[0]};
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
    width: 65%;
    position: relative;
    margin: ${theme.spacing[72]} ${theme.spacing[0]} ${theme.spacing[10]}
      ${theme.spacing[20]};
  `}
`

export const Cube = styled.img`
  position: absolute;
  width: 18%;
  top: -35px;
  left: -40px;
  /* width: 10%;
  bottom: -2%;
  left: 2%; */
`

export const AsteriskLine = styled.img`
  position: absolute;
  width: 25%;
  bottom: -155px;
  right: 0;
`
