import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../Components/Button";
import EndLine from "../Components/EndLine";
import { useNavigation } from "@react-navigation/native";
import Input from "../Components/Input";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Welcome Back !</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("OTP")}>
            <View style={styles.facebookContainer}>
              <FontAwesome name="facebook" size={24} color="#fff" />
              <Text style={styles.facebookText}>CONTINUE WITH FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("OTP")}>
            <View style={styles.googleContainer}>
              <AntDesign name="google" size={24} color="#000" />
              <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.subTitle}>OR CONTINUE WITH PHONE NUMBER</Text>
        <Input />
        <TouchableOpacity onPress={() => navigation.navigate("OTP")}>
          <Button title="LOG IN" />
        </TouchableOpacity>
        <Text style={styles.text}>Forgot Password ?</Text>
        <View style={styles.endTextContainer}>
          <Text style={{ color: "#A1A4B2" }}>DON'T HAVE AN ACCOUNT ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text style={styles.signUp}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <EndLine />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 60,
  },
  facebookContainer: {
    backgroundColor: "#7583CA",
    // paddingHorizontal: 30,
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  facebookText: { color: "#fff", marginLeft: 40 },
  googleContainer: {
    backgroundColor: "#fff",
    // paddingHorizontal: 30,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 20,
  },
  googleText: { color: "#000", marginLeft: 40 },
  bottomContainer: { marginHorizontal: 25 },
  subTitle: {
    color: "#A1A4B2",
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 20,
  },
  text: { alignSelf: "center", fontWeight: "bold", marginTop: 10 },
  endTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  signUp: { color: "#85C4FE", fontWeight: "bold" },
});
