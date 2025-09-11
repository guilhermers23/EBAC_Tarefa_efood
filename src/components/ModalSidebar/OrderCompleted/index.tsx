import { Button } from "../../../styles/GlobalStyles";
import * as S from "./OrderCompleted";

const OrderCompleted = ({ order }: { order: string }) => {
  return (
    <S.OrderContainer>
      <h3>Pedido realizado - {order}</h3>
      <S.Message>
        <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
        <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
        <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
        <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
      </S.Message>
      <Button colorbutton="white" type="button">Concluir</Button>
    </S.OrderContainer>
  )
};

export default OrderCompleted;
