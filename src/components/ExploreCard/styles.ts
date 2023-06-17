import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-right: 16px;
`;

export const Card = styled.View`
  width: 118px;
  max-height: 70px;
  padding: 20px 0px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const Item = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.blueText};
  font-size: ${RFValue(15)}px;
  line-height: 21px;
`;
