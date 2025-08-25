import styled from "styled-components";
import { breakpoints } from "../../styles/GlobalStyles";

export const FoodList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 120px;
  @media (max-width:${breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width:${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
`
