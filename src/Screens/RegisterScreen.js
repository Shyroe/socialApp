import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../styles/typography";
import * as firebase from "firebase";

export default () => {
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  function handleRegister() {
    const { email, password } = formRegister;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: formRegister.name,
        });
      })
      .catch((error) => setErrorMessage(error.message));
  }

  // function handleLogin() {
  //   const { email, password } = formRegister;
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((error) => setErrorMessage(error.message));
  // }
  return (
    <Container>
      <Header>
        <Text medium center>
          {"Hello!.\nSign up to get started."}
        </Text>
      </Header>
      <WrapperError>
        {errorMessage && (
          <Text bold color="#e9446a">
            {" "}
            {errorMessage}{" "}
          </Text>
        )}
      </WrapperError>
      <WrapperForm>
        <FieldGroup>
          <Text medium color="#8A8F9E" bold>
            Full Name
          </Text>
          <Input
            onChangeText={(name) =>
              setFormRegister({
                ...formRegister,
                name,
              })
            }
            value={formRegister.name}
            autoCapitalize="none"
          ></Input>
        </FieldGroup>
        <FieldGroup style={{ marginTop: 30 }}>
          <Text medium color="#8A8F9E" bold>
            Email Address
          </Text>
          <Input
            onChangeText={(email) =>
              setFormRegister({
                ...formRegister,
                email,
              })
            }
            value={formRegister.email}
            autoCapitalize="none"
          ></Input>
        </FieldGroup>
        <FieldGroup style={{ marginTop: 30 }}>
          <Text color="#8A8F9E" medium bold>
            Password
          </Text>
          <Input
            onChangeText={(password) =>
              setFormRegister({
                ...formRegister,
                password,
              })
            }
            value={formRegister.password}
            secureTextEntry
            autoCapitalize="none"
          ></Input>
        </FieldGroup>
      </WrapperForm>
      <ButtonSignUp onPress={handleRegister}>
        <Text color="#fff">Sign in</Text>
      </ButtonSignUp>
      <ButtonMsgSignIn>
        <Text color="#414959">
          Do you have an socialApp account ?{" "}
          <Text bold color="#e9446a">
            Sign In
          </Text>{" "}
        </Text>
      </ButtonMsgSignIn>
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 30px;
`;

export const WrapperError = styled.View`
  height: 72px;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
`;

export const WrapperForm = styled.View`
  margin-bottom: 48px;
  margin: 0 30px;
`;

const FieldGroup = styled.View``;
export const Input = styled.TextInput`
  /* color: #8A8F9E;
  font-size: 18px;
  text-transform: uppercase; */

  border-bottom-color: #8a8f9e;
  border-bottom-width: 1px;
  height: 40px;
  font-size: 15px;
  color: #161f3d;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  /* margin: 0 30px; */
  margin-horizontal: 30px;
  margin-top: 30px;
  background-color: #e9446a;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const ButtonMsgSignIn = styled.TouchableOpacity`
  margin-top: 32px;
  align-self: center;
`;
