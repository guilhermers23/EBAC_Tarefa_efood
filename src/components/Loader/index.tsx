import { GridLoader } from "react-spinners"
import { colors } from "../../styles/GlobalStyles";
import * as S from "./LoaderStyled";

const Loader = () => (
  <S.LoaderContainer>
    <GridLoader color={colors.color2} />
  </S.LoaderContainer>
);

export default Loader;
