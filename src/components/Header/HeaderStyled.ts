import styled from "styled-components"
import { breakpoints, colors } from "../../styles/GlobalStyles"

type PropsPage = { page: string | undefined };

export const HeaderBar = styled.header`
  background-color: ${colors.color2};
  padding: 24px;
  color: ${colors.white};
`
export const HeaderContainer = styled.div<PropsPage>`
  display: flex;
  align-items: center;
  justify-content: ${({ page }) => page === undefined ? "center" : "space-between"};
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

   a{
    color: ${colors.color2};
    font-size: 18px;
    font-weight: 900;
  }
`
export const Title = styled.h3<PropsPage>`
  font-size: 18px;
  font-weight: 900;
  display: ${({ page }) => page === undefined ? "none" : "block"};
  @media (max-width:${breakpoints.mobile}) {
    display: none;
  }
`

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
`

export const LinkCart = styled.button<PropsPage>`
  display: ${({ page }) => page === undefined ? "none" : "flex"};
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
p{
  display: none;
}

  @media (max-width: ${breakpoints.mobile}) {
    span{
      display: none;
    }

    p{
      display: block;
    }
  }
`
