import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardRestaurant from "../../components/CardRestaurant";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./HomeStyled";
import type { IRestaurant } from "../../interfaces/IRestaurant";
import { getAllRestaurant } from "../../services/restaurant.service";

export const Home = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const findRestaurants = async () => {
    try {
      const res = await getAllRestaurant();
      setRestaurants(res.data);
    } catch (error) {
      alert("Ocorreu erro ao buscar os Restuarantes")
      console.error(error)
    }
  };

  useEffect(() => { findRestaurants() }, []);

  return (
    <>
      <Banner typebanner="Banner" />
      <Main>
        <S.RestaurantList>
          {restaurants.map(restaurant =>
            <CardRestaurant key={restaurant.id} restaurant={restaurant} />
          )}
        </S.RestaurantList>
      </Main>
    </>
  )
};
