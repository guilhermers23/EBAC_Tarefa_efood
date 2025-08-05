import { useParams } from "react-router";
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
          0 produto(s) no carrinho
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderBar>
  )
};

export default Header;
