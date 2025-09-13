
import { useParams } from "react-router";
import { useGetResturantByIdQuery } from "../../services/restaurantService";
import Banner from "../../components/Banner";
import CardFood from "../../components/CardFood";
import Loader from "../../components/Loader";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./RestaurantStyled";

export const Restaurant = () => {
  const { id } = useParams();
  const { data: restaurant } = useGetResturantByIdQuery(id!);

  if (!restaurant) return <Loader />

  return (
    <>
      <Banner restaurant={restaurant} typebanner="Restaurante" />
      <Main>
        <S.FoodList>
          <CardFood menu={restaurant.cardapio} />
        </S.FoodList>
      </Main>
    </>
  )
};
