import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// firebase
import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDU80riGgaVhBSDoM-vCFUWaPLA8H6qlM0",
  authDomain: "socialapp-71540.firebaseapp.com",
  databaseURL: "https://socialapp-71540.firebaseio.com",
  projectId: "socialapp-71540",
  storageBucket: "socialapp-71540.appspot.com",
  messagingSenderId: "125027171721",
  appId: "1:125027171721:web:215b026f3e3c7c926b3558",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Screens
import Home from "./Screens/HomeScreen";
import Loading from "./Screens/LoadingScreen";
import Login from "./Screens/LoginScreen";
import Register from "./Screens/RegisterScreen";

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const LoadingStack = createStackNavigator();

const AuthScreens = () => {
  <AuthStack.Navigator>
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>;
};

const MainScreen = () => {
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>;
};

const LoadingScreen = () => {
  <LoadingStack.Navigator>
    <LoadingStack.Screen name="Loading" component={Loading} />
  </LoadingStack.Navigator>;
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Loading" component={Loading} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Register" component={Register} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

{
  /* <AppStack.Navigator>
<AppStack.Screen name="Login" component={Login} />
<AppStack.Screen name="Loading" component={Loading} />
<AppStack.Screen name="Home" component={Home} />
<AppStack.Screen name="Register" component={Register} />
</AppStack.Navigator> */
}

{
  /* <AppStack.Screen name="LoadingScreen" component={LoadingScreen} /> */
}
