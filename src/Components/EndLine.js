import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";

const EndLine = () => {
  const { height, width } = useWindowDimensions();

  return <View style={[styles.endLine, { width: width / 3 }]}></View>;
};

export default EndLine;

const styles = StyleSheet.create({
  endLine: {
    marginVertical: 20,
    borderTopWidth: 5,
    borderRadius: 2.5,
    borderTopColor: "#E6E6E6",
    alignSelf: "center",
  },
});
