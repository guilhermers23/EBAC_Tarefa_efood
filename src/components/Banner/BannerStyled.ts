import { colors } from './../../styles/GlobalStyles';
import styled from "styled-components";
import bannerHome from "../../assets/banner.png";
type Props = { typebanner: "Banner" | "Restaurante", restaurant: string }

export const Banner = styled.section<Props>`
  position: relative;
  background-image: ${(props) => props.typebanner === "Banner" ? `url(${bannerHome})` : `url(${props.restaurant})`};
  background-size: cover;
  background-position: center;
  padding: 2rem;
  margin-bottom: 80px;
  color: ${colors.white};

  &::after{
      position: absolute;
      background-color: ${colors.black};
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      opacity: ${props => props.typebanner === "Banner" ? "0" : "70%"};
    }
`

export const FoodNation = styled.h3`
  font-weight: 100;
  font-size: 2rem;
`

export const BannerContent = styled.div<Omit<Props, "restaurant">>`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: ${({ typebanner }) => typebanner === "Banner" ? "center" : "space-between"};
  align-items: ${({ typebanner }) => typebanner === "Banner" ? "center" : "self-start"};
  flex-direction: ${({ typebanner }) => typebanner === "Banner" ? "row" : "column"};
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 250px;
  text-align: center;

  h2{
    font-size: 2rem;
    font-weight: 900;
  }
`
