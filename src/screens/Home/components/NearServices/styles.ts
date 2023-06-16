import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 14px 16px 14px 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.blueText};
  font-size: ${RFValue(16)}px;
`;

export const ServiceCardsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;
