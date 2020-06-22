import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../styles/typography";
import * as firebase from "firebase";

export default () => {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });

  useEffect(() => {
    const { email, displayName } = firebase.auth().currentUser;
    setUser({
      email,
      displayName,
    });
  }, []);

  function signOutUser() {
    firebase.auth().signOut();
  }
  return (
    <Container>
      <Text> {user.email} </Text>
      <ButtonLogout onPress={signOutUser}>
        <Text> Logout </Text>
      </ButtonLogout>
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogout = styled.TouchableOpacity`
  margin-top: 32px;
`;
