import { Button } from "../../styles/GlobalStyles";
import pizza from "../../assets/pizza.png";
import * as S from "./CardFood";

const CardFood = () => {
  return (
    <S.CardFood>
      <img src={pizza} alt="Pizza" />
      <S.FoodInfos>
        <h3>Pizza Marguerita</h3>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
      </S.FoodInfos>
      <Button colorbutton="white" type="button">Adicionar ao carrinho</Button>
    </S.CardFood>
  )
};

export default CardFood;
