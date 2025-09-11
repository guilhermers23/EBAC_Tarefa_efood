import styled from "styled-components";
import { colors } from "../../../styles/GlobalStyles";

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
    border: 2px solid ${colors.color2};
    background-color: ${colors.color3};
    width: 100%;
  }
`

export const InputGrup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
`
