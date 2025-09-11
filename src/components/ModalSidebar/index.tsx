import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import DeliveryAddress from "./DeliveryAddress";
import OrderCompleted from "./OrderCompleted";
import Cart from "./Cart";
import { closeCart } from "../../store/reducers/cart";
import { Overlay } from "../../styles/GlobalStyles";
import * as S from "./ModalSidebar";

const ModalSidebar = () => {
  const dispatch = useDispatch();;
  const { isOpen, foods } = useSelector((state: RootReducer) => state.cart);
  const close = () => dispatch(closeCart());

  return (
    <S.CartContainer isopen={isOpen}>
      <Overlay onClick={() => close()} />
      <S.Sidebar>
        <Cart foods={foods} />
        <DeliveryAddress />
        <OrderCompleted order="123456" />
      </S.Sidebar>
    </S.CartContainer>
  )
};

export default ModalSidebar;
