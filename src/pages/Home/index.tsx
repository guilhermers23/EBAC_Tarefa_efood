import Banner from "../../components/Banner";
import CardRestaurant from "../../components/CardRestaurant";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./HomeStyled";

export const Home = () => (
  <>
    <Banner typebanner="Banner" />
    <Main>
      <S.RestaurantList>
        <CardRestaurant />
        <CardRestaurant />
        <CardRestaurant />
        <CardRestaurant />
        <CardRestaurant />
        <CardRestaurant />
      </S.RestaurantList>
    </Main>
  </>
);
