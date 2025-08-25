import styled from "styled-components";
import { breakpoints, colors, Overlay } from "../../styles/GlobalStyles";

type PropsVisible = { visible: boolean };

export const CardFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background-color: ${colors.color2};
  border-radius: 5px;
  gap: 10px;
  color: ${colors.color3};

  img{
    height: 167px;
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

export const Modal = styled.div<PropsVisible>`
  display: ${(props) => props.visible === true ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${Overlay}{
    position: absolute;
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 32px;
  width: 100%;
  margin: 0 auto;
  gap: 24px;
  max-width: 960px;
  background-color: ${colors.color2};
  color: ${colors.color3};

  img{
    height: 280px;
    width: 280px;
    object-fit: cover;
  }

   header{
    right: 0;
    top: 0;
    position: absolute;
    display: block;
    cursor: pointer;
  }

   @media (max-width:${breakpoints.mobile}) {
   flex-direction: column;
   align-items: center;
  }
`;

export const ModalFoodInfos = styled(FoodInfos)`
  gap: 16px;
  margin-bottom: 16px;
`
