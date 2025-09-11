import * as S from "./BannerStyled";

type PropsBanner = { typebanner: "Banner" | "Restaurante", restaurant?: IRestaurant };

const Banner = ({ typebanner, restaurant }: PropsBanner) => {
  const background = restaurant?.capa;
  return (
    <S.Banner typebanner={typebanner} restaurant={background as string}>
      <S.BannerContent typebanner={typebanner} >
        {typebanner === "Banner" ?
          <h2>Viva experiências gastronômicas <br />
            no conforto da sua casa</h2> :
          <>
            <S.FoodNation>{restaurant?.tipo}</S.FoodNation>
            <h2>{restaurant?.titulo}</h2>
          </>
        }
      </S.BannerContent>
    </S.Banner>
  )
};

export default Banner;
