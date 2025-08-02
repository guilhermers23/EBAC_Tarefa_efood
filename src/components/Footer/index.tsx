import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../Logo";
import * as S from "./Footer";

const Footer = () => (
  <S.Footer>
    <S.FooterContent>
      <Logo />
      <S.RedeSociais>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={25} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter size={25} />
        </a>
      </S.RedeSociais>
      <S.FooterInformation>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
      </S.FooterInformation>
    </S.FooterContent>
  </S.Footer>
);

export default Footer;
