import { Button } from "../../styles/GlobalStyles";
import * as S from "./DeliveryStyled";

const DeliveryAddress = () => {
  return (
    <form action="">
      {/* Secao de Entrega */}
      <S.SectioForm>
        <h3>Entrega</h3>
        <S.InputSpan>
          <label htmlFor="">Quem irá receber?</label>
          <input type="text" />
        </S.InputSpan>
        <S.InputSpan>
          <label htmlFor="">Endereço</label>
          <input type="text" />
        </S.InputSpan>
        <S.InputSpan>
          <label htmlFor="">Cidade</label>
          <input type="text" />
        </S.InputSpan>

        <S.InputGrup>
          <S.InputSpan>
            <label htmlFor="">CEP</label>
            <input type="number" />
          </S.InputSpan>
          <S.InputSpan>
            <label htmlFor="">Número</label>
            <input type="number" />
          </S.InputSpan>
        </S.InputGrup>

        <S.InputSpan className="marginBottom">
          <label htmlFor="">Complemento(opcional)</label>
          <input type="text" />
        </S.InputSpan>

        <Button colorbutton="white" type="button">Continuar com pagamento</Button>
        <Button colorbutton="white" type="button">Voltar para o carrinho</Button>
      </S.SectioForm>

      {/* Secao de Pagamento */}
      <S.SectioForm>
        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
        <S.InputSpan>
          <label htmlFor="">Nome no cartão</label>
          <input type="text" />
        </S.InputSpan>

        <S.InputGrup>
          <S.InputSpan>
            <label htmlFor="">Número do cartão</label>
            <input type="number" />
          </S.InputSpan>
          <S.InputSpan className="limitWith">
            <label htmlFor="">CVV</label>
            <input type="number" />
          </S.InputSpan>
        </S.InputGrup>

        <S.InputGrup className="marginBottom">
          <S.InputSpan>
            <label htmlFor="">Mês de vencimento</label>
            <input type="number" />
          </S.InputSpan>
          <S.InputSpan>
            <label htmlFor="">Ano de vencimento</label>
            <input type="number" />
          </S.InputSpan>
        </S.InputGrup>

        <Button colorbutton="white" type="submit">Finalizar pagamento</Button>
        <Button colorbutton="white" type="button">Voltar para o edição do endereço</Button>
      </S.SectioForm>
    </form>
  )
};

export default DeliveryAddress;

