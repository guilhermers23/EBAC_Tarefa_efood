import styled from "styled-components";
import { breakpoints, Button, colors } from "../../styles/GlobalStyles";

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

export const Sidebar = styled.aside`
  background-color: ${colors.color2};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
   @media (max-width:${breakpoints.mobile}) {
   width: 678px;
  }
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

export const EmptyCart = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.white};
  p{
    margin-bottom: 8px;
  }

  img{
    width: 100%;
  }
`

export const SectioForm = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.color3};
  font-size: 14px;
  font-weight: bold;
  gap: 8px;

  h3{
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .marginBottom{
  margin-bottom: 24px;
  }

  .limitWith{
    width: 87px;
  }
`

export const InputSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  input{
    height: 32px;
    padding: 8px;
    border: none;
    background-color: ${colors.color3};
    width: 100%;
  }

  .error{
   border: 3px solid ${colors.red};
   background-color: ${colors.red}25;
   border-radius: 5px;
  }
`

export const InputGrup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
`

export const OrderContainer = styled.div`
    color: ${colors.color3};

    h3{
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 16px;
    }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`
