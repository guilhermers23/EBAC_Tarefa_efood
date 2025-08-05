import styled from "styled-components";
import bannerIMG from "../../assets/banner.png";

export const Footer = styled.footer`
  background-image: url(${bannerIMG});
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
  padding-top: 40px;
`

export const RedeSociais = styled.div`
 display: flex;
 gap: 10px;
 margin-bottom: 80px;
 a{
     color: var(--color-white);
     &:hover{
        transform: scale(1.1);
     }
    }
`

export const FooterInformation = styled.div`
    margin: 2rem auto;
    p{
      font-size: 10px;
    }
`
