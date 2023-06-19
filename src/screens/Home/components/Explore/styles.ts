import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
export const Container = styled.View`
  width: 100%;
  padding: 10px 0px 0px 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.blueText};
  font-size: ${RFValue(16)}px;
  line-height: 22px;
`;

export const ExploreSlider = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
})`
  width: 100%;
`;
