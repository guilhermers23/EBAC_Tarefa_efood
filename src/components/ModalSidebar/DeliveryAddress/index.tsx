import { useFormik } from "formik";
import { Button } from "../../../styles/GlobalStyles";
import * as Yup from "yup";
import * as S from "./DeliveryStyled";

const DeliveryAddress = () => {
  const formAtributes = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDiplayName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: '',
    }, validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      adress: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardDiplayName: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  });

  return (
    <form onSubmit={formAtributes.handleSubmit}>
      {/* Secao de Entrega */}
      <S.SectioForm>
        <h3>Entrega</h3>
        <S.InputSpan>
          <label htmlFor="name">Quem irá receber?</label>
          <input type="text" name="name" id="name"
            value={formAtributes.values.name}
            onChange={formAtributes.handleChange}
            onBlur={formAtributes.handleBlur} />
        </S.InputSpan>
        <S.InputSpan>
          <label htmlFor="adress">Endereço</label>
          <input type="text" name="adress" id="adress"
            value={formAtributes.values.adress}
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
            <label htmlFor="cep">CEP</label>
            <input type="text" name="cep" id="cep"
              value={formAtributes.values.cep}
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

        <Button colorbutton="white" type="submit">Finalizar pagamento</Button>
        <Button colorbutton="white" type="button">Voltar para o edição do endereço</Button>
      </S.SectioForm>
    </form>
  )
};

export default DeliveryAddress;

