import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/Navigation/Router";
import SignupScreen from "./src/Screens/SignupScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import OtpScreen from "./src/Screens/OtpScreen";
import LocationScreen from "./src/Screens/LocationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Router />
      {/* <SignupScreen /> */}
      {/* <LoginScreen /> */}
      {/* <OtpScreen /> */}
      {/* <LocationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
