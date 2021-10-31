import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../Components/Button";
import EndLine from "../Components/EndLine";
import Input from "../Components/Input";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={require("../../assets/signUp.png")} />
      <View style={styles.container}>
        <Text style={styles.title}>Your Home services Expert</Text>
        <Text style={styles.subTitle}>Continue with Phone Number</Text>
        <Input />
        <TouchableOpacity onPress={() => navigation.navigate("Log In")}>
          <Button title="SIGN UP" />
        </TouchableOpacity>
        <Text style={styles.text}>VIEW OTHER OPTION</Text>
        <View style={styles.endTextContainer}>
          <Text style={{ color: "#A1A4B2" }}>ALREADY HAVE AN ACCOUNT ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Log In")}>
            <Text style={styles.logIn}>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <EndLine />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: { height: 500, width: "100%" },
  container: { marginHorizontal: 25 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -20,
  },
  subTitle: {
    color: "#9C9C9C",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 15,
    letterSpacing: 1,
    marginBottom: 20,
  },
  text: { alignSelf: "center", color: "#5A77FF", marginTop: 10 },
  endTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  logIn: { color: "#85C4FE", fontWeight: "bold" },
});
