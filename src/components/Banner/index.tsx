import * as S from "./BannerStyled";

export type PropsBanner = { typebanner: "Banner" | "Restaurante" };

const Banner = ({ typebanner }: PropsBanner) => {
  return (
    <S.Banner typebanner={typebanner}>
      <S.BannerContent typebanner={typebanner}>
        {typebanner === "Banner" ?
          <h2>Viva experiências gastronômicas <br />
            no conforto da sua casa</h2> :
          <>
            <S.FoodNation>Italiana</S.FoodNation>
            <h2>La Dolce Vita Trattoria</h2>
          </>
        }
      </S.BannerContent>
    </S.Banner>
  )
};

export default Banner;
