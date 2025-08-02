import CardRestaurant from "../../components/CardRestaurant";
import * as S from "./HomeStyled";

export const Home = () =>
  <S.RestaurantList>
    <CardRestaurant />
    <CardRestaurant />
    <CardRestaurant />
    <CardRestaurant />
    <CardRestaurant />
    <CardRestaurant />
  </S.RestaurantList>;
