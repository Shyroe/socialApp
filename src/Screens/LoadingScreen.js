import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../styles/typography";
import { ActivityIndicator } from "react-native";
import * as firebase from "firebase";

export default ({ navigation }) => {
  useEffect(() => {
    // component did mount
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? "Home" : "Login");
    });
  }, []);
  return (
    <Container>
      <Text>Loading Screen</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
