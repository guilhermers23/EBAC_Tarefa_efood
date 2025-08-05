import styled, { createGlobalStyle } from "styled-components";
type PropsButton = { colorbutton: 'red' | 'white' };

export const colors =
{
  color1: "#FFF8F2",
  color2: "#E66767",
  white: "#FFFFFF"
};

export const fonts = {
  fontRoboto: '"Roboto", sans-serif',
};

export const Main = styled.main`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  width: 100%;
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
  padding: 6px 0;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.colorbutton === "white" ? `${colors.white}` : `${colors.color2}`};
  color: ${(props) => props.colorbutton === "white" ? `${colors.color2}` : `${colors.white}`};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  transition: all ease-in .2s;
  cursor: pointer;
`

export default GlobalStyles;
