import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const OtpScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  return (
    <View style={styles.root}>
      <View>
        <Image style={styles.image} source={require("../../assets/otp.png")} />
      </View>
      <View style={{ marginHorizontal: 25 }}>
        <Text style={styles.title}>OTP Verification</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "100" }}>Enter the OTP sent to</Text>
          <Text style={{ fontWeight: "bold" }}>+ 1234546789</Text>
        </View>

        <CodeField
          // ref={ref}
          // {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              // onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "300", color: "#757575" }}>
            OTP not received?
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#85C4FE",
              marginLeft: 10,
            }}
          >
            RESEND OTP
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Location")}>
          <Button title="VERIFY & PROCEED" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", justifyContent: "center" },
  image: {
    marginBottom: 80,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: { fontSize: 40, fontWeight: "600", alignSelf: "center" },

  //
  codeFiledRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});
