import { useParams } from "react-router";
import cart from "../../assets/carrinho.svg";
import Logo from "../Logo";
import * as S from "./HeaderStyled";

const Header = () => {
  const { name } = useParams();

  return (
    <S.HeaderBar>
      <S.HeaderContainer page={name}>
        <S.Title page={name}>Resturantes</S.Title>
        <S.NavbarHeader>
          <Logo />
        </S.NavbarHeader>
        <S.LinkCart href="#" page={name}>
          0 - Produtos
          <img src={cart} alt="Cart" />
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderBar>
  )
};

export default Header;
