import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 102px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.yellow};
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`;

export const MenuWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Menu = styled(Entypo)``;

export const LogoWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image``;

export const FilterWrapper = styled.TouchableOpacity``;
