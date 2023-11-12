import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ReactComponent as Home } from '~/assets/home.svg'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacing[5]} ${theme.spacing[16]};
  `}
`

type HeaderProps = {
  isHomePage?: boolean
}
export const Header = styled.div<HeaderProps>`
  ${({ theme, isHomePage }) => css`
    margin-top: ${theme.spacing[64]};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacing[isHomePage ? 16 : 48]};
    `}
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    width: fit-content;
    font-size: ${theme.fontSize.bodySmall};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray};
    text-transform: uppercase;
    letter-spacing: ${theme.spacing[4]};
    padding: ${theme.spacing[1]} ${theme.spacing[6]};
    margin-bottom: ${theme.spacing[4]};

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.label};
    `}
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: ${theme.spacing[8]};
  `}
`

export const HomeIcon = styled(Home)`
  width: 23px;
  margin-bottom: -2px;

  ${media.lessThan('medium')`
    width: 18px;
  `}
`

export const NavLink = styled(RouterNavLink)`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.gray};
    font-size: ${theme.fontSize.labelLarge};
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    border-bottom: 2px solid ${theme.colors.transparent};
    transition: 200ms ease-in-out;

    ${media.lessThan('medium')`
      font-size: ${theme.fontSize.label};
    `}

    &:hover {
      color: ${theme.colors.white};
    }

    &.active {
      color: ${theme.colors.yellow};
      border-color: ${theme.colors.yellow};
    }
  `}
`
