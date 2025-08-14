import { Link } from "react-router";
import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  position: relative;
  border-radius: 5px;

  img{
    max-width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    height: 217px;
  }
`
export const Tag = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 8px 8px;
  background-color: ${colors.color2};
  color: ${colors.white};
`

export const Tags = styled.div`
  font-weight: bold;
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  gap: 15px;
`

export const Infos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
 `

export const RestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

 span{
  display: flex;
  align-items: center;
  gap: 8px;
 }
`

export const AboutRestaurant = styled.p`
  font-size: 14px;
  line-height: 1.5rem;
`

export const LinkButton = styled(Link)`
  max-width: 150px;
  :hover{
  transform: scale(1.1);
  transition: all ease-in .2s;
 }
`
