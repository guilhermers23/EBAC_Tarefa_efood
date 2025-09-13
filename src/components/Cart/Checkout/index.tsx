import { useFormik } from "formik";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup"
import { usePurchaseMutation } from "../../../services/restaurantService";
import type { RootReducer } from "../../../store";
import { clearCart, closeDelivery, closePayment, openPayment } from "../../../store/reducers/cart";
import { formatPrice, getTotalPrice } from "../../../utils";
import { Button } from "../../../styles/GlobalStyles";
import * as S from "../CartStyled";
import ErrorCheckout from "../Error";

const Checkout = () => {
  const dispacth = useDispatch();
  const [purchase, { isLoading, isSuccess, isError, data }] = usePurchaseMutation();
  const { foods, isPayment } = useSelector((state: RootReducer) => state.cart);

  const openPaymentForm = () => { dispacth(openPayment()) };
  const closePaymentForm = () => { dispacth(closePayment()) };
  const closeDeliveryForm = () => { dispacth(closeDelivery()) };
  const closeCheckout = () => { closePaymentForm(); closeDeliveryForm(); dispacth(clearCart()) };

  const formDelivery = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
    }, validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string().required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
    }),
    onSubmit: () => { openPaymentForm() },
  });

  const formPayment = useFormik({
    initialValues: {
      cardDiplayName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: '',
    }, validationSchema: Yup.object({
      cardDiplayName: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório').max(12).min(1),
      expiresYear: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        products: foods.map(item => ({ id: item.id, price: item.preco as number })),
        delivery: {
          receiver: formDelivery.values.receiver,
          address: {
            description: formDelivery.values.address,
            city: formDelivery.values.city,
            zipCode: Number(formDelivery.values.zipCode),
            number: formDelivery.values.number,
            complement: formDelivery.values.complement
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

  const checkInputHasError = (fieldName: string, formAttributes: 'formDelivery' | 'formPayment') => {
    const formValidatedIsTouched = (formAttributes === 'formDelivery' ? (fieldName in formDelivery.touched) : (fieldName in formPayment.touched));
    const formValidatedHasError = (formAttributes === 'formDelivery' ? (fieldName in formDelivery.errors) : (fieldName in formPayment.errors));
    const isTouched = formValidatedIsTouched;
    const isInvalid = formValidatedHasError;
    const hasError = isTouched && isInvalid;
    return hasError;
  };

  if (isError) return <ErrorCheckout closePageError={closeCheckout} />;
  return (
    <S.Sidebar>
      {(isSuccess && data) ? <>
        {/* Pedido Realizado */}
        <S.OrderContainer>
          <h3>Pedido realizado - {data?.orderId}</h3>
          <S.Message>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
          </S.Message>
          <Button colorbutton="white" type="button" onClick={closeCheckout}>Concluir</Button>
        </S.OrderContainer>
      </> :
        <>{isPayment ? <>
          {/* Secao de Pagamento */}
          <form onSubmit={formPayment.handleSubmit}>
            <S.SectioForm>
              <h3>Pagamento - Valor a pagar {formatPrice(getTotalPrice(foods))}</h3>

              <S.InputSpan>
                <label htmlFor="cardDiplayName">Nome no cartão</label>
                <input type="text" name="cardDiplayName" id="cardDiplayName"
                  value={formPayment.values.cardDiplayName}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                  className={checkInputHasError("cardDiplayName", "formPayment") ? "error" : ""} />
              </S.InputSpan>

              <S.InputGrup>
                <S.InputSpan>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <IMaskInput mask="0000 0000 0000 0000" type="text" name="cardNumber" id="cardNumber"
                    value={formPayment.values.cardNumber}
                    onAccept={(value) => {
                      formPayment.handleChange({
                        target: {
                          name: 'cardNumber',
                          value,
                        },
                      });
                    }}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError("cardNumber", "formPayment") ? "error" : ""} />
                </S.InputSpan>
                <S.InputSpan className="limitWith">
                  <label htmlFor="cvv">CVV</label>
                  <IMaskInput mask="000" type="number" name="cvv" id="cvv"
                    value={formPayment.values.cvv}
                    onAccept={(value) => {
                      formPayment.handleChange({
                        target: {
                          name: 'cvv',
                          value,
                        },
                      });
                    }}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError("cvv", "formPayment") ? "error" : ""} />
                </S.InputSpan>
              </S.InputGrup>

              <S.InputGrup className="marginBottom">
                <S.InputSpan>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <IMaskInput mask="00" type="number" name="expiresMonth" id="expiresMonth"
                    value={formPayment.values.expiresMonth}
                    onAccept={(value) => {
                      formPayment.handleChange({
                        target: {
                          name: 'expiresMonth',
                          value,
                        },
                      });
                    }}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError("expiresMonth", "formPayment") ? "error" : ""} />
                </S.InputSpan>

                <S.InputSpan>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <IMaskInput mask="00" type="number" name="expiresYear" id="expiresYear"
                    value={formPayment.values.expiresYear}
                    onAccept={(value) => {
                      formPayment.handleChange({
                        target: {
                          name: 'expiresYear',
                          value,
                        },
                      });
                    }}
                    onBlur={formPayment.handleBlur}
                    className={checkInputHasError("expiresYear", "formPayment") ? "error" : ""} />
                </S.InputSpan>
              </S.InputGrup>

              <Button colorbutton="white" type="submit" disabled={isLoading}>
                {isLoading ? "Finalizando sua compra..." : "Finalizar pagamento"}
              </Button>
              <Button colorbutton="white" type="button" onClick={closePaymentForm}>Voltar para o edição do endereço</Button>
            </S.SectioForm>
          </form>
        </> : <>
          {/* Secao de Entrega */}
          <form onSubmit={formDelivery.handleSubmit}>
            <S.SectioForm>
              <h3>Entrega</h3>

              <S.InputSpan>
                <label htmlFor="receiver">Quem irá receber?</label>
                <input type="text" name="receiver" id="receiver"
                  value={formDelivery.values.receiver}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError("receiver", "formDelivery") ? "error" : ""} />
              </S.InputSpan>

              <S.InputSpan>
                <label htmlFor="address">Endereço</label>
                <input type="text" name="address" id="address"
                  value={formDelivery.values.address}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError("address", "formDelivery") ? "error" : ""} />
              </S.InputSpan>
              <S.InputSpan>
                <label htmlFor="city">Cidade</label>
                <input type="text" name="city" id="city"
                  value={formDelivery.values.city}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur}
                  className={checkInputHasError("city", "formDelivery") ? "error" : ""} />
              </S.InputSpan>

              <S.InputGrup>
                <S.InputSpan>
                  <label htmlFor="zipCode">CEP</label>
                  <IMaskInput mask="00000-000" type="text" name="zipCode" id="zipCode"
                    value={formDelivery.values.zipCode}
                    onAccept={(value) => {
                      formDelivery.handleChange({
                        target: {
                          name: 'zipCode',
                          value,
                        },
                      });
                    }}
                    onBlur={formDelivery.handleBlur}
                    className={checkInputHasError("zipCode", "formDelivery") ? "error" : ""} />
                </S.InputSpan>

                <S.InputSpan>
                  <label htmlFor="number">Número</label>
                  <input type="text" name="number" id="number"
                    value={formDelivery.values.number}
                    onChange={formDelivery.handleChange}
                    onBlur={formDelivery.handleBlur}
                    className={checkInputHasError("number", "formDelivery") ? "error" : ""} />
                </S.InputSpan>
              </S.InputGrup>

              <S.InputSpan className="marginBottom">
                <label htmlFor="complement">Complemento(opcional)</label>
                <input type="text" name="complement" id="complement"
                  value={formDelivery.values.complement}
                  onChange={formDelivery.handleChange}
                  onBlur={formDelivery.handleBlur} />

              </S.InputSpan>
              <Button colorbutton="white" type="submit">Continuar com pagamento</Button>
              <Button colorbutton="white" type="button" onClick={closeDeliveryForm}>Voltar para o carrinho</Button>
            </S.SectioForm>
          </form>
        </>}</>}
    </S.Sidebar>
  )
};

export default Checkout;
