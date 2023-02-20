import styled, { css } from 'styled-components'

export const Page = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacing[16]};
  `}
`
export const Star = styled.img`
  position: absolute;
  top: 0px;
  left: 30px;
  width: 280px;
`

export const Letter = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xlarge};
    text-transform: uppercase;
    position: relative;
    top: 20px;
    left: 90px;
  `}
`

export const LetterList = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing[72]} ${theme.spacing[0]} ${theme.spacing[60]}
      ${theme.spacing[0]};
  `}
`

export const WordList = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacing[24]} ${theme.spacing[0]} ${theme.spacing[24]}
      ${theme.spacing[40]};
  `}
`

export const Asterisk = styled.img`
  width: 35px;
`

export const Word = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.regular};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    margin: ${theme.spacing[0]} ${theme.spacing[8]};
  `}
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
  `}
`

export const Table = styled.img`
  position: absolute;
  bottom: -20px;
  right: 0px; // TODO: Adjust horizontal scroll
  width: 500px;
`
