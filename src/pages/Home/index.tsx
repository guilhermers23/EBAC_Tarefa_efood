import Banner from "../../components/Banner";
import CardRestaurant from "../../components/CardRestaurant";
import { useGetAllRestaurantQuery } from "../../services/restaurantService";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./HomeStyled";

export const Home = () => {
  const { data: restaurants } = useGetAllRestaurantQuery();

  if (restaurants) {
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
  }

  return <h3>Carregando</h3>
};
