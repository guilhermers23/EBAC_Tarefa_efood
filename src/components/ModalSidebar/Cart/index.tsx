import { formatPrice, getTotalPrice } from "../../../utils";
import ItemCart from "../ItemCart";
import { Button } from "../../../styles/GlobalStyles";
import * as S from "../ModalSidebar"

const Cart = ({ foods }: { foods: MenuItem[] }) => {
  return (
    <>
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
            <Button colorbutton="white" type="button">Continuar com a entrega</Button>
          </>
        )
      }
    </>
  )
};

export default Cart;
