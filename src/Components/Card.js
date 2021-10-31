import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ image, title, text }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  container: { flexDirection: "row" },
  textContainer: { marginLeft: 20 },
  title: { fontSize: 20, fontWeight: "bold" },
});
