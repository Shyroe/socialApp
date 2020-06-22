import React, { Fragment } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./src/main.route";

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <Routes />
    </Fragment>
  );
}
