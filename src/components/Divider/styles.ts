import styled from "styled-components/native";

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-top: 22px;
`;
