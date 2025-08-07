import { FaStar } from "react-icons/fa";
import imgRestaurant from "../../assets/imagem.png";
import { Button } from "../../styles/GlobalStyles";
import * as S from "./CardRestaurantStyled";

const CardRestaurant = () => {
  return (
    <S.Card>
      <S.Tags>
        <S.Tag>Destaque da Semana</S.Tag>
        <S.Tag>Japonesa</S.Tag>
      </S.Tags>
      <img src={imgRestaurant} alt="Restaurante X" />

      <S.Infos>
        <S.RestaurantInfo>
          <h3>Hioki Sushi</h3>
          <span>4.9 <FaStar size={24} /></span>
        </S.RestaurantInfo>
        <S.AboutRestaurant>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
        </S.AboutRestaurant>

        <S.LinkButton to={`/restaurante/name`}>
          <Button colorbutton="red" type="button">Saiba mais</Button>
        </S.LinkButton>

      </S.Infos>
    </S.Card>
  )
};

export default CardRestaurant;
