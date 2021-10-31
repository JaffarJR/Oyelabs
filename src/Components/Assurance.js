import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Assurance = ({ image, text }) => {
  return (
    <View style={styles.root}>
      <Image source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Assurance;

const styles = StyleSheet.create({
  root: { padding: 10, flex: 1 },
  text: { fontSize: 10 },
});
