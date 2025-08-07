import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const CardFood = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${colors.color2};
  border-radius: 5px;
  gap: 10px;
  color: ${colors.color3};

  img{
    width: 100%;
    object-fit: cover;
  }
`

export const FoodInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3{
    font-size: 18px;
    font-weight: 900;
  }

  p{
    font-size: 14px;
    line-height: 22px;
  }
`
