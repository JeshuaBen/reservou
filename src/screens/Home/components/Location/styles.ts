import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  padding: 16px 16px 8px 16px;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.blueText};
  font-size: ${RFValue(16)}px;
`;

export const MapImage = styled.Image`
  width: 100%;
  height: ${RFValue(136)}px;
`;

export const ActivateGpsWrapper = styled.View`
  width: 100%;
  margin: 22px 0px 0px;
  align-items: center;
  justify-content: center;
`;

export const ActivateGps = styled.TouchableOpacity`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ActivateGpsText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
`;
