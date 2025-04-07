import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import LogoButton from "../components/UI/LogoButton";
import { useNavigation } from "@react-navigation/native";

import Signup1 from "../../assets/signup1.png";
import Logo from "../../assets/drdermatlogo.jpeg";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function Login() {
  const [number, setNumber] = useState();

  const navigation = useNavigation();

  function confirmOTP() {
    console.log("confirm OTP");
    navigation.navigate("Confirmotp");
  }

  function navigateLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.logoCont}>
          <Image source={Logo} style={styles.logoImage} />
        </View>
        <View style={styles.formCont}>
          <Image source={Signup1} style={styles.mainImage} />
          <View style={styles.textCont}>
            <Text style={styles.signText}>Sign In To Continue</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Enter 10 digit Mobile Number</Text>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.input}>+91</Text>
              <TextInput
                onChangeText={setNumber}
                value={number}
                placeholder="Mobile Number"
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
            <Pressable onPress={confirmOTP} style={styles.generateButton}>
              <Text style={styles.generateText}>Get Verfication Code</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footCont}>
        <Text style={styles.footer}>
          By Proceeding, You consent to share your information with cureskin and
          agree to Cureskin's Privacy Policy and Terms of Service
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoCont: {
    top: 50,
  },
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
  },
  formCont: {
    flex: 4,
    marginTop: 150,
    alignItems: "center",
    // gap: 20,
  },
  mainImage: {
    width: 250,
    height: 250,
  },
  form: {
    // backgroundColor: "#ebf1cf",
    alignItems: "center",
    gap: 20,
  },
  textCont: {
    // justifyContent: "flex-end",
    paddingTop: 20,
    // paddingBottom: -10,
    width: windowWidth - 50,
  },
  signText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  numberText: {
    fontSize: 20,
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#ebf1cf",
    alignItems: "center",
    gap: 20,
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 20,

    borderWidth: 1,
    borderColor: "grey",
    height: 66,
    width: windowWidth - 30,
  },
  label: {
    position: "relative",
    top: 30,
    left: -(windowWidth / 2) + 130,
    backgroundColor: "white",
    zIndex: 2,
    paddingHorizontal: 10,
    color: "grey",
  },
  labelText: {},
  input: {
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    // borderRadius: 10,
    // padding: 10,
    // boxShadow:
    //   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  generateButton: {
    color: "white",
    backgroundColor: "#155e95",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  generateText: {
    fontSize: 20,
    color: "white",
  },
  footCont: {
    position: "relative",
    top: -100,
    // flex: 1,
  },
  footer: {
    fontSize: 10,
    paddingHorizontal: 40,
    // textAlign: "center",
  },
});
