import React from "react";
import styled from "styled-components/native";
import Text from "../styles/typography";

export default () => {
  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
