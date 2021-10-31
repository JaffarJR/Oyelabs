import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import OtpScreen from "../Screens/OtpScreen";
import LocationScreen from "../Screens/LocationScreen";
import HomeScreen from "../Screens/HomeScreen";
import SplashScreen from "../Screens/SplashScreen";

const Stack = createStackNavigator();
const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Sign Up"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Log In"
        component={LoginScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="OTP"
        component={OtpScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
