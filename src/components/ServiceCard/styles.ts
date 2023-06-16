import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 51%;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 12px 12px 10px 12px;
  border-radius: 6px;
`;

export const ServiceImage = styled.Image`
  width: 100%;
  height: 77px;
  border-radius: 4px;
`;

export const ServiceTitleWrapper = styled.View`
  width: 100%;
  margin-top: 5px;
  justify-content: space-between;
`;

export const ServiceTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.blueText};
  line-height: 16px;
`;

export const SeeMore = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.yellow};
  line-height: 16px;
`;
