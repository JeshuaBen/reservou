import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 48%;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-top: 5px;
`;

export const Content = styled.View`
  padding: 12px 12px 0px 12px;
  border-radius: 6px;
`;

export const ServiceImage = styled.Image`
  width: 100%;
  height: 77px;
  border-radius: 4px;
`;

export const ServiceTitleWrapper = styled.View`
  margin-top: 5px;
  padding-bottom: 8px;
`;

export const ServiceTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.blueText};
`;

export const SeeMore = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.yellow};
`;
