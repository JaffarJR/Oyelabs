import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Button = ({ title, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 50,
    marginTop: 20,
  },
  text: { color: "#fff", textAlign: "center", fontSize: 18 },
});
