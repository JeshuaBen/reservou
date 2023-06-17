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
  line-height: 22px;
`;

export const ServiceCardsWrapper = styled.View`
  width: 100%;
  margin-top: 12px;
  flex-direction: row;
  gap: 12px;
  padding-right: 16px;
`;
