import Banner from "../../components/Banner";
import CardRestaurant from "../../components/CardRestaurant";
import Loader from "../../components/Loader";
import { useGetAllRestaurantQuery } from "../../services/restaurantService";
import { Main } from "../../styles/GlobalStyles";
import * as S from "./HomeStyled";

export const Home = () => {
  const { data: restaurants, isLoading } = useGetAllRestaurantQuery();

  if (restaurants && !isLoading) {
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

  return <Loader />
};
