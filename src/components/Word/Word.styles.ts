import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
  `}
`

export const Circles = styled.img`
  ${({ theme }) => css`
    z-index: -1;
    width: 120%;
    position: absolute;
    top: -100px;
    left: -60px;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
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

export const Property = styled.span``

export const Translation = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.regular};
    font-weight: ${theme.fontWeight.bold};
    height: fit-content;
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

export const List = styled.ol`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    line-height: ${theme.fontSize.medium};
    margin-left: ${theme.spacing[7]};
    padding: ${theme.spacing[3]};
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

export const Examples = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: ${theme.spacing[80]} ${theme.spacing[0]} ${theme.spacing[10]} -${theme.spacing[48]};
  `}
`

export const Cube = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: -35px;
    left: -40px;
  `}
`

export const AsteriskLine = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 130px;
    left: 80%;
  `}
`
