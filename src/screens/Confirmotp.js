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
import OTPInput from "../components/UI/OtpInput";

export default function Confirmotp() {
  const [otp, setOtp] = useState([]);

  const navigation = useNavigation();

  function confirmOTP() {
    navigation.navigate("Selectcity");
    let newOtp = "";
    otp.map((item) => {
      newOtp += item;
    });
    console.log(newOtp);
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoCont}>
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.formCont}>
        <Image source={Otp1} style={styles.mainImage} />

        <View style={styles.bottomForm}>
          <Text style={styles.numberText}>Verify mobile number ...</Text>
          <View
            // behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.form}
          >
            <View style={styles.inputView}>
              <OTPInput length={6} updateOtp={setOtp} />
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
          </View>
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

    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    borderRadius: 10,
    width: 40,
    heeight: 40,

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
