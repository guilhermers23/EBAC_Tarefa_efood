import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import type { RootReducer } from "../../store";
import { closeCart } from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/restaurantService";
import { formatPrice, getTotalPrice } from "../../utils";
import ItemCart from "./ItemCart";
import { Button, Overlay } from "../../styles/GlobalStyles";
import * as S from "./CartStyled";

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, foods } = useSelector((state: RootReducer) => state.cart);
  const close = () => dispatch(closeCart());
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation();

  const formAtributes = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardDiplayName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: '',
    }, validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string().required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardDiplayName: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        products: foods.map(item => ({ id: item.id, price: item.preco as number })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: Number(values.zipCode),
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDiplayName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  });

  return (
    <S.CartContainer isopen={isOpen}>
      <Overlay onClick={() => close()} />
      <S.Sidebar>
        {/* Carrinho */}
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

        {(isSuccess && data) ? (
          <>
            {/* Pedido Realizado */}
            <S.OrderContainer>
              <h3>Pedido realizado - {data?.orderId}</h3>
              <S.Message>
                <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
              </S.Message>
              <Button colorbutton="white" type="button">Concluir</Button>
            </S.OrderContainer>
          </>
        ) : (
          <>
            {/* Formulário */}
            < form onSubmit={formAtributes.handleSubmit}>
              {/* Secao de Entrega */}
              <S.SectioForm>
                <h3>Entrega</h3>
                <S.InputSpan>
                  <label htmlFor="receiver">Quem irá receber?</label>
                  <input type="text" name="receiver" id="receiver"
                    value={formAtributes.values.receiver}
                    onChange={formAtributes.handleChange}
                    onBlur={formAtributes.handleBlur} />
                </S.InputSpan>
                <S.InputSpan>
                  <label htmlFor="address">Endereço</label>
                  <input type="text" name="address" id="address"
                    value={formAtributes.values.address}
                    onChange={formAtributes.handleChange}
                    onBlur={formAtributes.handleBlur} />
                </S.InputSpan>
                <S.InputSpan>
                  <label htmlFor="city">Cidade</label>
                  <input type="text" name="city" id="city"
                    value={formAtributes.values.city}
                    onChange={formAtributes.handleChange}
                    onBlur={formAtributes.handleBlur} />
                </S.InputSpan>

                <S.InputGrup>
                  <S.InputSpan>
                    <label htmlFor="zipCode">CEP</label>
                    <input type="text" name="zipCode" id="zipCode"
                      value={formAtributes.values.zipCode}
                      onChange={formAtributes.handleChange}
                      onBlur={formAtributes.handleBlur} />
                  </S.InputSpan>
                  <S.InputSpan>
                    <label htmlFor="number">Número</label>
                    <input type="text" name="number" id="number"
                      value={formAtributes.values.number}
                      onChange={formAtributes.handleChange}
                      onBlur={formAtributes.handleBlur} />
                  </S.InputSpan>
                </S.InputGrup>

                <S.InputSpan className="marginBottom">
                  <label htmlFor="complement">Complemento(opcional)</label>
                  <input type="text" name="complement" id="complement"
                    value={formAtributes.values.complement}
                    onChange={formAtributes.handleChange}
                    onBlur={formAtributes.handleBlur} />
                </S.InputSpan>

                <Button colorbutton="white" type="button">Continuar com pagamento</Button>
                <Button colorbutton="white" type="button">Voltar para o carrinho</Button>
              </S.SectioForm>

              {/* Secao de Pagamento */}
              <S.SectioForm>
                <h3>Pagamento - Valor a pagar R$ 190,90</h3>
                <S.InputSpan>
                  <label htmlFor="cardDiplayName">Nome no cartão</label>
                  <input type="text" name="cardDiplayName" id="cardDiplayName"
                    value={formAtributes.values.cardDiplayName}
                    onChange={formAtributes.handleChange}
                    onBlur={formAtributes.handleBlur} />
                </S.InputSpan>

                <S.InputGrup>
                  <S.InputSpan>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" name="cardNumber" id="cardNumber"
                      value={formAtributes.values.cardNumber}
                      onChange={formAtributes.handleChange}
                      onBlur={formAtributes.handleBlur} />
                  </S.InputSpan>
                  <S.InputSpan className="limitWith">
                    <label htmlFor="cvv">CVV</label>
                    <input type="number" name="cvv" id="cvv"
                      value={formAtributes.values.cvv}
                      onChange={formAtributes.handleChange}
                      onBlur={formAtributes.handleBlur} />
                  </S.InputSpan>
                </S.InputGrup>

                <S.InputGrup className="marginBottom">
                  <S.InputSpan>
                    <label htmlFor="expiresYear">Mês de vencimento</label>
                    <input type="number" name="expiresMonth" id="expiresMonth"
                      value={formAtributes.values.expiresMonth}
                      onChange={formAtributes.handleChange}
                      onBlur={formAtributes.handleBlur} />
                  </S.InputSpan>
                  <S.InputSpan>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="number" name="expiresYear" id="expiresYear"
                      value={formAtributes.values.expiresYear}
                      onChange={formAtributes.handleChange}
                      onBlur={formAtributes.handleBlur} />
                  </S.InputSpan>
                </S.InputGrup>

                <Button colorbutton="white" type="submit">{isLoading ? "Finalizando sua compra..." : "Finalizar pagamento"}</Button>
                <Button colorbutton="white" type="button">Voltar para o edição do endereço</Button>
              </S.SectioForm>
            </form>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer >
  )
};

export default Cart;
