import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IRestaurant } from "../../interfaces/IRestaurant";
import { getRestaurantByID } from "../../services/restaurant.service";
import Banner from "../../components/Banner";
import CardFood from "../../components/CardFood";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./RestaurantStyled";

export const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<IRestaurant>();

  const findRestaurantID = async (restaurantID: string) => {
    try {
      const res = await getRestaurantByID(restaurantID);
      setRestaurant(res.data);
    } catch (error) {
      alert("Ocorreu erro ao buscar esse Resturante");
      console.error(error)
    }
  };

  useEffect(() => { if (id) findRestaurantID(id) }, [id]);
  if (!restaurant) return <h3>Carregando...</h3>

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
