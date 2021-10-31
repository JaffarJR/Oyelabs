import React from "react";
import { View, Text } from "react-native";
import RootStackNavigator from "./RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Router = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Router;
