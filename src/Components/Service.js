import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Service = ({ image, title }) => {
  return (
    <View style={styles.root}>
      <Image source={image} style={styles.icon} />
      <Text>{title}</Text>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    borderColor: "#F4F4F4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { height: 50, width: 50, marginBottom: 10 },
});
