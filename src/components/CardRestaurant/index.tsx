import { FaStar } from "react-icons/fa";
import { Button } from "../../styles/GlobalStyles";
import type { IRestaurant } from "../../interfaces/IRestaurant";
import * as S from "./CardRestaurantStyled";

export type PropsRestaurant = { restaurant: IRestaurant }

const CardRestaurant = ({ restaurant }: PropsRestaurant) => {
  return (
    <S.Card>
      <S.Tags>
        {restaurant.destacado &&
          <S.Tag>Destaque da Semana</S.Tag>
        }
        <S.Tag>{restaurant.tipo}</S.Tag>
      </S.Tags>
      <img src={restaurant.capa} alt={restaurant.titulo} />

      <S.Infos>
        <S.RestaurantInfo>
          <h3>{restaurant.titulo}</h3>
          <span>{restaurant.avaliacao} <FaStar size={24} /></span>
        </S.RestaurantInfo>
        <S.AboutRestaurant>{restaurant.descricao}</S.AboutRestaurant>

        <S.LinkButton to={`/restaurante/${restaurant.id}/${restaurant.titulo}`}>
          <Button colorbutton="red" type="button">Saiba mais</Button>
        </S.LinkButton>

      </S.Infos>
    </S.Card>
  )
};

export default CardRestaurant;
