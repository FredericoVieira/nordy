import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacing[5]} ${theme.spacing[16]};
  `}
`

export const Header = styled.div``

export const Text = styled.p`
  ${({ theme }) => css`
    width: fit-content;
    font-size: ${theme.fontSize.regular};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray[1]};
    text-transform: uppercase;
    letter-spacing: ${theme.spacing[4]};
    padding: ${theme.spacing[1]} ${theme.spacing[6]};
    margin-bottom: ${theme.spacing[4]};
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

export const NavLink = styled(RouterNavLink)`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.gray[1]};
    font-size: ${theme.fontSize.small};
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    border-bottom: 2px solid ${theme.colors.transparent};
    transition: 200ms ease-in-out;

    &:hover {
      color: ${theme.colors.white};
    }

    &.active {
      color: ${theme.colors.yellow};
      border-color: ${theme.colors.yellow};
    }
  `}
`
