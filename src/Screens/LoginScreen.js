import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Text from "../styles/typography";

export default () => {
  return (
    <Container>
      <Header>
        <Text medium center>
          {"Hello again.\nWelcome back."}
        </Text>
      </Header>
      <WrapperError>
        <Text>Error</Text>
      </WrapperError>
      <WrapperForm>
        <FieldGroup>
          <Text medium color="#8A8F9E" bold>
            Email Address
          </Text>
          <Input autoCapitalize="none"></Input>
        </FieldGroup>
        <FieldGroup style={{ marginTop: 30 }}>
          <Text color="#8A8F9E" medium bold>
            Password
          </Text>
          <Input secureTextEntry autoCapitalize="none"></Input>
        </FieldGroup>
      </WrapperForm>
      <ButtonSignIn>
        <Text color="#fff">Sign in</Text>
      </ButtonSignIn>
      <ButtonMsgSignUp>
        <Text color="#414959">
          New to SocialApp ?{" "}
          <Text bold color="#e9446a">
            Sign Up
          </Text>{" "}
        </Text>
      </ButtonMsgSignUp>
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

export const ButtonSignIn = styled.TouchableOpacity`
  /* margin: 0 30px; */
  margin-horizontal: 30px;
  margin-top: 30px;
  background-color: #e9446a;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const ButtonMsgSignUp = styled.TouchableOpacity`
  margin-top: 32px;
  align-self: center;
`;
