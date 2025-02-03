import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import LogoButton from "../components/UI/LogoButton";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const [number, setNumber] = useState();
  const navigation = useNavigation();

  function confirmOTP() {}

  function navigateSignup() {
    navigation.navigate("Signup");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoCont}>
        <LogoButton onPress={() => {}} />
      </View>
      <View style={styles.formCont}>
        <Text style={styles.signText}>Login Up</Text>
        <Text styl={styles.numberText}>Enter Your Mobile Number</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.form}
        >
          <View style={styles.inputView}>
            <Text>+91</Text>
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
          <Pressable onPress={navigateSignup} style={styles.generateButton}>
            <Text style={styles.generateText}>Signup</Text>
          </Pressable>
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
  },
  formCont: {
    alignItems: "center",
    gap: 40,
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
    backgroundColor: "#ebf1cf",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 60,
    paddingVertical: 30,

    borderRadius: 20,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  generateButton: {
    color: "#1d1f20",
  },
  generateText: {
    fontSize: 20,
    color: "#b3a137",
  },
  footer: {
    fontSize: 10,
    paddingHorizontal: 40,
  },
  footCont: {
    position: "absolute",
    bottom: 100,
  },
});
