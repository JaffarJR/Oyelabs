import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Input = () => {
  return (
    <View style={styles.root}>
      <View style={styles.leftContainer}>
        <Image source={require("../../assets/icons/flag.png")} />
        <Text style={{ color: "#31373A" }}> (USA)</Text>
        <Text>+1</Text>
        <FontAwesome name="caret-down" size={20} color="#CCCCCC" />
      </View>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter Mobile Number"
        placeholderTextColor="#31373A"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F2F3F7",
    borderRadius: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
    borderRightWidth: 1,
    borderRightColor: "#797979",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    height: 60,
    color: "black",
  },
});
