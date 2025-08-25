import styled from "styled-components";
import { Button, colors } from "../../styles/GlobalStyles";

type Props = { isopen: boolean };

export const CartContainer = styled.div<Props>`
display: ${props => props.isopen === true ? "flex" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
`

export const Siderbar = styled.aside`
  background-color: ${colors.color2};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  ${Button}{
    max-width: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
  }
`

export const Price = styled.span`
  display: flex;
  justify-content: space-between;
  color: ${colors.color1};
  margin: 40px 0 16px 0;

  p{
    font-size: 14px;
    font-weight: 700;
  }
`

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px;
  color: ${colors.color2};
  background-color: ${colors.color3};
  margin-bottom: 16px;

 img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
`

export const InfosItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3{
    font-size: 18px;
    font-weight: 900;
  }

  p{
    font-size: 14px;
    font-weight: 400;
    }
`
export const TrashIcon = styled.span`
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
 `
