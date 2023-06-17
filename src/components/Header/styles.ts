import { Entypo } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(14)}px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.yellow};
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`;

export const MenuWrapper = styled.TouchableOpacity``;

export const Menu = styled(Entypo)``;

export const LogoWrapper = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
`;

export const FilterWrapper = styled.TouchableOpacity``;
