import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import LogoButton from "../components/UI/LogoButton";
import Otp1 from "../../assets/otp1.png";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/drdermatlogo.jpeg";
import OTPInput from "../components/UI/OtpInput";
import { AuthContext } from "../store/authContext";
import Icon from "react-native-vector-icons/Ionicons";

export default function Confirmotp({ route }) {
  const params = route.params;

  const [otp, setOtp] = useState([]);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);

  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, [secondsLeft]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  function confirmOTP() {
    // navigation.navigate("Selectcity");

    authCtx.login({
      user: { name: "shivam", role: params?.role ? params?.role : "user" },
      token: "token",
    });

    let newOtp = "";
    otp.map((item) => {
      newOtp += item;
    });
    console.log(newOtp);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 20,
          top: 60,
          backgroundColor: "#155e95",
          borderRadius: "50%",
          padding: 5,
          zIndex: 2,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        {navigation.canGoBack() && (
          <Icon name="arrow-back" size={20} color="white" />
        )}
      </TouchableOpacity>
      {!showKeyboard && (
        <View style={styles.logoCont}>
          <Image source={Logo} style={styles.logoImage} />
        </View>
      )}
      {!showKeyboard && (
        <View style={styles.imgCont}>
          <Image source={Otp1} style={styles.mainImage} />
        </View>
      )}
      <KeyboardAvoidingView
        style={styles.formCont}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.bottomForm}>
          <Text style={styles.numberText}>Verify mobile number </Text>
          <Text style={[styles.resendText, { color: "grey" }]}>
            6 Digit Code has been sent to your mobile number
          </Text>
          <View style={styles.form}>
            <View style={styles.inputView}>
              <OTPInput length={6} updateOtp={setOtp} />
            </View>
            <Pressable onPress={confirmOTP} style={styles.generateButton}>
              <Text style={styles.generateText}>Confirm OTP</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                secondsLeft(60);
              }}
              style={styles.resendButton}
              disabled={secondsLeft > 0}
            >
              <Text
                style={[
                  styles.resendText,
                  secondsLeft == 0 ? {} : styles.disabled,
                ]}
              >
                {secondsLeft > 0
                  ? "Didn't get the code? Resend in ( " + secondsLeft + " sec )"
                  : "Resend Code"}
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
      {!showKeyboard && (
        <View style={styles.footCont}>
          <Text style={styles.footer}>
            By Proceeding, You consent to share your information with Dr.Dermat
            and agree to Dr.Dermat's Privacy Policy and Terms of Service
          </Text>
        </View>
      )}
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
    alignItems: "center",
    gap: 40,
  },
  imgCont: {
    marginTop: 100,
    alignItems: "center",
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
    fontSize: 13,
  },
  footCont: {
    position: "relative",

    marginTop: 10,
    // marginBottom: 40,
    // flex: 1,
  },
  footer: {
    fontSize: 10,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  disabled: {
    color: "grey",
  },
});
