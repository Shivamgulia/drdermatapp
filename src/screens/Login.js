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
    <SafeAreaView style={styles.container}>
      <View style={styles.logoCont}>
        <LogoButton onPress={() => {}} />
      </View>
      <View style={styles.formCont}>
        <Image source={Signup1} style={styles.mainImage} />
        <Text style={styles.signText}>Sign In To Continue</Text>
        {/* <Text styl={styles.numberText}>Enter Your Mobile Number</Text> */}
        <KeyboardAvoidingView behavior={"height"} style={styles.form}>
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
            <Text style={styles.generateText}>Generate OTP</Text>
          </Pressable>
          {/* <Pressable onPress={navigateLogin} style={styles.generateButton}> */}
          {/* <Text style={styles.generateText}>Login</Text> */}
          {/* </Pressable> */}
        </KeyboardAvoidingView>
      </View>
      <View style={styles.footCont}>
        <Text style={styles.footer}>
          By Proceeding, You consent to share your information with cureskin and
          agree to Cureskin's Privacy Policy and Terms of Service
        </Text>
      </View>
    </SafeAreaView>
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
    position: "absolute",
    top: 100,
    flex: 1,
  },
  formCont: {
    marginTop: 150,
    alignItems: "center",
    gap: 40,
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
  signText: {
    fontSize: 30,
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
    paddingHorizontal: 60,
    paddingVertical: 30,
    borderRadius: 20,
  },
  input: {
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
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
  footer: {
    fontSize: 10,
    paddingHorizontal: 40,
  },
  footCont: {
    position: "absolute",
    bottom: 10,
  },
});
