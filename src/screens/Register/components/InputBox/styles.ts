import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const FormContainer = styled.View`
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px;
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
`;

export const ToggleVisibility = styled.TouchableOpacity``;

export const Visibility = styled(Ionicons)``;

export const Error = styled.Text`
  color: red;
  font-size: 12px;
`;
