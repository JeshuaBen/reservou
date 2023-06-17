import { useTheme } from "styled-components";
import * as S from "./styles";

import { IHeaderProps } from "./types";

const Header = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
}: IHeaderProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.MenuWrapper>
        <LeftIcon />
      </S.MenuWrapper>

      <S.LogoWrapper>{children}</S.LogoWrapper>

      <S.FilterWrapper>
        <RightIcon />
      </S.FilterWrapper>
    </S.Container>
  );
};

export default Header;
