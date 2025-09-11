import styled from "styled-components";
import { colors } from "../../../styles/GlobalStyles";

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
