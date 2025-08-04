import styled from "styled-components";
import type { PropsBanner } from ".";

export const Banner = styled.section<PropsBanner>`
  background-image: ${({ typebanner }) => typebanner === "Banner" ? "url('../src/assets/banner.jpg')" : "url('../src/assets/fundo.png')"};
  background-size: cover;
  background-position: center;
  padding: 2rem;
  margin-bottom: 80px;
`

export const FoodNation = styled.h3`
  font-weight: 100;
  font-size: 2rem;
`

export const BannerContent = styled.div<PropsBanner>`
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
