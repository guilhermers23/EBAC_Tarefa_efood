import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootReducer } from "../../store";
import { openCart } from "../../store/reducers/cart";
import Logo from "../Logo";
import * as S from "./HeaderStyled";

const Header = () => {
  const dispatch = useDispatch();
  const { foods } = useSelector((state: RootReducer) => state.cart);
  const { name } = useParams();
  const open = () => dispatch(openCart())

  return (
    <S.HeaderBar>
      <S.HeaderContainer page={name}>
        <S.Title page={name}>Resturantes</S.Title>
        <S.NavbarHeader>
          <Logo />
        </S.NavbarHeader>
        <S.LinkCart onClick={open} page={name}>
          {foods.length} produto(s) no carrinho
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderBar>
  )
};

export default Header;
