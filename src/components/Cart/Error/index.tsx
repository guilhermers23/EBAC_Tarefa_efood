import { Button } from "../../../styles/GlobalStyles";
import * as S from "../CartStyled";

const ErrorCheckout = ({ closePageError }: { closePageError: () => void }) => (
  <S.Sidebar>
    <S.EmptyCart>
      <p>Ops! Algo deu errado. ⚠️</p>
      <p>Ocoreu algum erro ao tentar finalizar seu pedido.</p>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-delivery-service-illustration-svg-png-download-9665347.png" alt="Error" />
      <p>Por favor, tente novamente mais tarde.</p>
    </S.EmptyCart>
    <Button colorbutton="white" type="button" onClick={closePageError}>Tentar novamente</Button>
  </S.Sidebar>
);

export default ErrorCheckout;
