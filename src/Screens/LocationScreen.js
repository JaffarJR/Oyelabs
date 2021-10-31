import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LocationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.greetText}>Hey nice to meet you</Text>
        <Text style={styles.title}>See services around</Text>
        <Image source={require("../../assets/location.png")} />
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.buttonContainer}>
            <MaterialIcons name="my-location" size={24} color="white" />
            <Text style={styles.buttonText}>Your Current Location</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Ionicons name="search-outline" size={24} color="#A1A4B2" />
          <TextInput
            style={styles.input}
            onSubmitEditing={() => navigation.navigate("Home")}
            placeholder="Some other location"
            placeholderTextColor="#A1A4B2"
          />
        </View>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
  },
  greetText: {
    color: "#8E8E8E",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 50,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 50,
    marginTop: 50,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#A1A4B2",
    borderRadius: 50,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  input: { marginLeft: 20, fontSize: 18 },
});
