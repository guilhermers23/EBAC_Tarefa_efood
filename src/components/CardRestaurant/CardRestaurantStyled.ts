import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Link } from "react-router";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.color3};
  position: relative;
  border-radius: 5px;

  img{
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`
export const Tag = styled.span`
  padding: 8px 8px;
  border-radius: 5px;
  background-color: ${colors.color3};
`
export const Tags = styled.div`
  position: absolute;
  right: 0;
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
  border-color: ${colors.color5};
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

export const Button = styled.button`
  display: block;
  padding: 6px 0;
  border-radius: 5px;
  border: none;
  background-color: ${colors.color2};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  transition: all ease-in .2s;
  cursor: pointer;
`

export const LinkButton = styled(Link)`
  max-width: 150px;
  :hover{
  transform: scale(1.1);
  transition: all ease-in .2s;
 }
`
