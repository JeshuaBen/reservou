import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.Image`
  width: 38px;
  height: 38px;
`;

export const Content = styled.ScrollView.attrs({})`
  flex: 1;
  width: 100%;
`;
