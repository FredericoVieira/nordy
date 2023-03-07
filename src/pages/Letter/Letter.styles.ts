import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ReactComponent as Asterisk } from '~/assets/asterisk.svg'
import { ReactComponent as Star } from '~/assets/star.svg'
import { ReactComponent as Table } from '~/assets/table.svg'

export const Page = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacing[16]};

    ${media.lessThan('medium')`
      padding: ${theme.spacing[12]};
    `}
  `}
`
export const StarImage = styled(Star)`
  position: absolute;
  width: 280px;
  top: -60px;
  left: 30px;

  ${media.lessThan('medium')`
    width: 180px;
    top: -110px;
    left: 30px;
  `}
`

export const Letter = styled.span`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.fontSize.title};
    text-transform: uppercase;
    top: 20px;
    left: 90px;

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.bodyLarge};
      left: 70px;
    `}
  `}
`

export const LetterList = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing[72]} ${theme.spacing[0]} ${theme.spacing[60]}
      ${theme.spacing[40]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.bodyLarge};
      margin-top: ${theme.spacing[40]};
      margin-left: ${theme.spacing[0]};    
    `}
  `}
`

export const WordList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacing[24]} ${theme.spacing[0]};

    ${media.lessThan('medium')`
      margin: ${theme.spacing[16]} ${theme.spacing[0]};
    `}
  `}

  &:hover {
    cursor: pointer;
  }
`

export const AsteriskImage = styled(Asterisk)`
  width: 35px;

  ${media.lessThan('medium')`
    width: 20px;
    min-width: auto;
  `}
`

export const Word = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.bodySmall};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    margin: ${theme.spacing[0]} ${theme.spacing[8]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.label};
      margin: ${theme.spacing[0]} ${theme.spacing[4]};
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
      font-size: ${theme.fontSize.label};
      letter-spacing: ${theme.spacing[1]};
      white-space: inherit;
      margin-right: ${theme.spacing[0]};
      padding: ${theme.spacing[0]} ${theme.spacing[2]};
    `}
  `}
`

export const Pronunciation = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.bodySmall};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const EmptyLetterListMessage = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.bodySmall};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.labelLarge};
    `}
  `}
`

export const TableImage = styled(Table)`
  position: absolute;
  bottom: -40px;
  right: 0px;
  width: 450px;

  ${media.lessThan('medium')`
    width: 300px;
  `}
`
