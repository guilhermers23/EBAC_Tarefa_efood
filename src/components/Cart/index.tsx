import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { closeCart, openDelivery } from "../../store/reducers/cart";
import { formatPrice, getTotalPrice } from "../../utils";
import Checkout from "./Checkout";
import ItemCart from "./ItemCart";
import { Button, Overlay } from "../../styles/GlobalStyles";
import * as S from "./CartStyled";

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, foods, isDelivery } = useSelector((state: RootReducer) => state.cart);
  const close = () => dispatch(closeCart());
  const openDeliveryForm = () => {
    if (foods.length > 0) {
      dispatch(openDelivery())
    } else {
      alert("Carrinho Vazio!")
    }
  };

  return (
    <S.CartContainer isopen={isOpen}>
      <Overlay onClick={() => close()} />
      {isDelivery ? <Checkout /> :
        <S.Sidebar>
          {foods.length === 0 ?
            <S.EmptyCart>
              <p>Seu carrinho está vazio! 🤔</p>
              <p>Que tal escolha alguma refeição! 😋</p>
              <img src="https://www.handmadecachoeiro.com.br/Content/projeto/img/cesta-vazia.png" alt="Carrinho Vazio" />
            </S.EmptyCart> :
            (
              <>
                <ul>
                  {foods.map((food) =>
                    <ItemCart key={food.id} id={food.id}
                      title={food.nome}
                      cover={food.foto}
                      price={formatPrice(food.preco)}
                    />
                  )}
                </ul>
                <S.Price>
                  <p>Valor Total</p>
                  <p>{formatPrice(getTotalPrice(foods))}</p>
                </S.Price>
                <Button colorbutton="white" type="button" onClick={openDeliveryForm}>Continuar com a entrega</Button>
              </>
            )
          }
        </S.Sidebar>
      }
    </S.CartContainer >
  )
};

export default Cart;
