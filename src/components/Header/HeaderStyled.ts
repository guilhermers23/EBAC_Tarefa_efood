import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import bannerImg from "../../assets/banner.png";

type PropsPage = { page: string | undefined };

export const HeaderBar = styled.header`
  background-image: url(${bannerImg});
  padding: 24px;
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
`

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
`

export const LinkCart = styled.a<PropsPage>`
  display: ${({ page }) => page === undefined ? "none" : "flex"};
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
`
