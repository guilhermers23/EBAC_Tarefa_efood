import styled from "styled-components";
import { colors, fonts } from "../../styles/GlobalStyles";

export const Footer = styled.footer`
  background-color: ${colors.color2};
  padding: 2rem;
  margin-top: 2rem;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const RedeSociais = styled.div`
 display: flex;
 gap: 10px;
 a{
     color: var(--color-white);
     &:hover{
        transform: scale(1.1);
     }
    }
`

export const FooterInformation = styled.div`
    margin: 2rem auto;

    p {
        color: ${colors.white};
        font-family: ${fonts.fontRubik};
    }
`
