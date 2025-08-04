import Banner from "../../components/Banner";
import CardFood from "../../components/CardFood";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./RestaurantStyled";

export const Restaurant = () => (
  <>
    <Banner typebanner="Restaurante" />
    <Main>
      <S.FoodList>
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
      </S.FoodList>
    </Main>
  </>
);
