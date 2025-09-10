import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { closeCart } from "../../store/reducers/cart";
import useAttributesFood from "../../hooks/useAttributesFood";
import DeliveryAddress from "../DeliveryAddress";
import ItemCart from "./ItemCart";
import { Button, Overlay } from "../../styles/GlobalStyles";
import * as S from "./CartStyled";

const Cart = () => {
  const dispatch = useDispatch();
  const { formatPrice } = useAttributesFood();
  const { isOpen, foods } = useSelector((state: RootReducer) => state.cart);
  const close = () => dispatch(closeCart());

  const getTotalPrice = () => {
    return foods.reduce((acc, currentValue) => {
      return (acc += currentValue.preco!)
    }, 0)
  };

  return (
    <S.CartContainer isopen={isOpen}>
      <Overlay onClick={() => close()} />
      <S.Siderbar>
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
          {foods.length === 0 ?
            <S.EmptyCart>
              <p>Seu carrinho está vazio! 🤔</p>
              <p>Que tal escolha alguma refeição! 😋</p>
              <img src="https://www.handmadecachoeiro.com.br/Content/projeto/img/cesta-vazia.png" alt="Carrinho Vazio" />
            </S.EmptyCart> :
            <>
              <S.Price>
                <p>Valor Total</p>
                <p>{formatPrice(getTotalPrice())}</p>
              </S.Price>
              <Button colorbutton="white" type="button">Continuar com a entrega</Button>
            </>
          }
        </>

        <DeliveryAddress />
      </S.Siderbar>
    </S.CartContainer>
  )
};

export default Cart;
