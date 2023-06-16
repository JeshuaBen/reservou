import { useTheme } from "styled-components";
import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import Filter from "../../assets/filtro.svg";
import Menu from "../../assets/menu.svg";

const Header = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.MenuWrapper>
        <Menu />
      </S.MenuWrapper>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.FilterWrapper>
        <Filter />
      </S.FilterWrapper>
    </S.Container>
  );
};

export default Header;
