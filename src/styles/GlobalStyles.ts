import styled, { createGlobalStyle } from "styled-components";

export const colors =
{
  color1: "#670D0F",
  color2: "#F01945",
  color3: "#F36444",
  color4: "#FFCE6F",
  color5: "#FFE3C9",
  white: "#FFFFFF"
};

export const fonts = {
  fontPoppins: '"Poppins", sans-serif',
  fontRubik: '"Rubik", sans-serif',
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
  font-family: ${fonts.fontPoppins};
}

body{
  background-color: ${colors.color1};
  color: ${colors.white} ;
}
`

export const Button = styled.button`
  display: block;
  padding: 6px 0;
  border-radius: 5px;
  border: none;
  background-color: ${colors.color2};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  transition: all ease-in .2s;
  cursor: pointer;
`

export default GlobalStyles;
