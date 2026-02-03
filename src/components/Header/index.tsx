import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";
import type { RootReducer } from "../../store";
import { openCart } from "../../store/reducers/cart";
import Logo from "../Logo";
import * as S from "./HeaderStyled";

const Header = () => {
  const dispatch = useDispatch();
  const { foods } = useSelector((state: RootReducer) => state.cart);
  const { name } = useParams();
  const open = () => dispatch(openCart());
  const bag = foods.length > 0 ?
    <MdShoppingBag size={25} /> : <MdOutlineShoppingBag size={25} />;

  return (
    <S.HeaderBar>
      <S.HeaderContainer page={name}>
        <S.Title page={name}>Resturantes</S.Title>
        <S.NavbarHeader>
          <Logo />
        </S.NavbarHeader>
        <S.LinkCart onClick={open} page={name}>
          <p>{foods.length} </p>
          {bag}
          <span>Sacola</span>
        </S.LinkCart>
      </S.HeaderContainer>
    </S.HeaderBar>
  )
};

export default Header;
