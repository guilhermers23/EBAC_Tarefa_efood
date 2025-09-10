import styled from "styled-components";
import { breakpoints } from "../../styles/GlobalStyles";

export const RestaurantList = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 120px;
  @media (max-width:${breakpoints.tablet}) {
    gap: 55px;
  }
  @media (max-width:${breakpoints.mobile}) {
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`
