import { createGlobalStyle } from "styled-components";

export const colors =
{
  dark: "#2b1719",
  greenDark: "#02483e",
  green: "#057c46",
  greenLigth: "#9bb61b",
  yellow: "#f8be00",
};

export const fonts = {
  fontPoppins: '"Poppins", sans-serif',
  fontRubik: '"Rubik", sans-serif',
};

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
  background-color: ${colors.dark};
}
`
export default GlobalStyles;
