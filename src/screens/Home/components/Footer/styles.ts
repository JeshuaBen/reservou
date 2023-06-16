import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
