import {
  View,
  Text,
  Platform,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState } from "react";
import LogoButton from "../components/UI/LogoButton";
import Otp1 from "../../assets/otp1.png";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/drdermatlogo.jpeg";

export default function Confirmotp() {
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();
  const [digit5, setDigit5] = useState();
  const [digit6, setDigit6] = useState();

  const navigation = useNavigation();

  function confirmOTP() {
    navigation.navigate("Selectcity");
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoCont}>
        {/* <LogoButton onPress={() => {}} /> */}
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.formCont}>
        <Image source={Otp1} style={styles.mainImage} />
        {/* <Text style={styles.signText}>Sign In To Continue</Text> */}
        <View style={styles.bottomForm}>
          <Text style={styles.numberText}>Verify mobile number ...</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.form}
          >
            <View style={styles.inputView}>
              <TextInput
                onChangeText={setDigit1}
                value={digit1}
                keyboardType="numeric"
                style={styles.input}
                maxLength={1}
              />
              <TextInput
                onChangeText={setDigit2}
                value={digit2}
                keyboardType="numeric"
                style={styles.input}
                maxLength={1}
              />
              <TextInput
                onChangeText={setDigit3}
                value={digit3}
                keyboardType="numeric"
                style={styles.input}
                maxLength={1}
              />
              <TextInput
                onChangeText={setDigit4}
                value={digit4}
                keyboardType="numeric"
                style={styles.input}
                maxLength={1}
              />
              <TextInput
                onChangeText={setDigit5}
                value={digit5}
                keyboardType="numeric"
                style={styles.input}
                maxLength={1}
              />
              <TextInput
                onChangeText={setDigit6}
                value={digit6}
                keyboardType="numeric"
                style={styles.input}
                maxLength={1}
              />
            </View>

            <Text style={styles.timeText}>
              Time left for verification - {"{28}"} sec
            </Text>
            <Pressable onPress={confirmOTP} style={styles.generateButton}>
              <Text style={styles.generateText}>Confirm OTP</Text>
            </Pressable>
            <Pressable onPress={() => {}} style={styles.resendButton}>
              <Text style={styles.resendText}>Resend OTP</Text>
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </View>
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
    position: "absolute",
    top: 100,
    flex: 1,
    zIndex: 2,
  },
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
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
  bottomForm: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  signText: {
    fontSize: 30,
  },
  numberText: {
    color: "#685e1f",
    fontSize: 20,
    margin: 0,
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#ebf1cf",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    borderRadius: 10,
    width: 40,
    heeight: 40,
    // backgroundColor: "#fcf2d3",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    textAlign: "center",
    borderColor: "grey",
  },
  timeText: {
    color: "black",
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
    textAlign: "center",
  },
  resendButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  resendText: {
    fontSize: 10,
  },
  footer: {
    fontSize: 10,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  footCont: {
    position: "relative",
    top: 10,
  },
});
