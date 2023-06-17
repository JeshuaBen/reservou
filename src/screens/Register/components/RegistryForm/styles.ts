import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 16px 16px 24px 16px;
  flex: 1;
  justify-content: space-between;
`;

export const FormStacker = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  gap: 6px;
`;

export const FormGroup = styled.View`
  margin-top: 5px;
  width: 100%;
`;

export const Error = styled.Text`
  color: red;
  font-size: 12px;
`;

export const RegistryButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 12px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 24px;
`;

export const RegistryButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
