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
  ScrollView,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import LogoButton from "../components/UI/LogoButton";
import { useNavigation } from "@react-navigation/native";

import Signup1 from "../../assets/signup1.png";
import Logo from "../../assets/drdermatlogo.jpeg";

import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login({ route }) {
  const params = route.params;

  console.log(params);

  const [number, setNumber] = useState();

  const navigation = useNavigation();

  const [showKeyboard, setShowKeyboard] = useState(false);

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
    console.log("confirm OTP");
    navigation.navigate("Confirmotp", {
      role: params?.role ? params?.role : "user",
    });
  }

  function navigateRole() {
    navigation.navigate("ChooseRole");
  }

  return (
    // <View behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View style={styles.container}>
      {!showKeyboard && (
        <View style={styles.logoCont}>
          <Image source={Logo} style={styles.logoImage} />
        </View>
      )}
      {!showKeyboard && (
        <View style={styles.imgCont}>
          <Image source={Signup1} style={styles.mainImage} />
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={styles.form}
      >
        <Text style={styles.signText}>Sign In To Continue</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>Mobile No.</Text>
          <View style={styles.input}>
            <Text> + 91</Text>
            <TextInput
              onChangeText={setNumber}
              value={number}
              placeholder="Mobile Number"
              maxLength={10}
              keyboardType="numeric"
              // style={styles.input}
            />
          </View>
        </View>
        <Pressable onPress={confirmOTP} style={styles.generateButton}>
          <Text style={styles.generateText}>Get Verification Code</Text>
        </Pressable>
        <TouchableOpacity onPress={navigateRole} style={{}}>
          <Text style={{ color: "grey" }}>Choose Different Role</Text>
        </TouchableOpacity>
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
    //  <View style={{ height: 150 }}></View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoCont: {},
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
  },
  imgCont: {
    alignItems: "center",
  },
  mainImage: {
    width: 180,
    height: 180,
  },
  form: {
    alignItems: "center",
    backgroundColor: "white",
    backgroundColor: "white",
  },
  signText: {
    fontSize: 30,
  },

  inputView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,

    alignItems: "flex-start",
    textAlign: "center",
  },
  label: {
    fontSize: 15,

    position: "relative",
    top: 20,
    left: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    zIndex: 2,
  },
  input: {
    flexDirection: "row",
    gap: 5,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: windowWidth - 40,
    paddingLeft: 20,

    // boxShadow:
    //   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 15px -3px",
    // backgroundColor: "#fcf2d3",
    borderWidth: 1,
    borderColor: "grey",
  },
  generateButton: {
    color: "white",
    backgroundColor: "#155e95",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  generateText: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    fontSize: 10,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  footCont: {
    // position: "relative",
    // top: 10,
  },
});
