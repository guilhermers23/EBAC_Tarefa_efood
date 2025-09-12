import styled, { createGlobalStyle } from "styled-components";
type PropsButton = { colorbutton: 'red' | 'white' };

export const colors =
{
  color1: "#FFF8F2",
  color2: "#E66767",
  color3: "#FFEBD9",
  black: "#000",
  white: "#FFFFFF",
  red: "#E62727"
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "468px"
};

export const fonts = {
  fontRoboto: '"Roboto", sans-serif',
};

export const Main = styled.main`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }
`

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: ${fonts.fontRoboto};
}

body{
  background-color: ${colors.color1};
  color: ${colors.color2};
}
`

export const Button = styled.button<PropsButton>`
  display: block;
  padding: 6px;
  border: none;
  background-color: ${(props) => props.colorbutton === "white" ? `${colors.color3}` : `${colors.color2}`};
  color: ${(props) => props.colorbutton === "white" ? `${colors.color2}` : `${colors.color3}`};
  font-size: 14px;
  font-weight: 700;
  transition: all ease-in .2s;
  cursor: pointer;
`

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
`

export default GlobalStyles;
