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

import UserForm from "../../assets/userform.png";
import Logo from "../../assets/drdermatlogo.jpeg";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function UserDetailsForm() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  const navigation = useNavigation();

  function confirmOTP() {
    console.log("confirm OTP");
    navigation.navigate("Intro1");
  }

  function navigateLogin() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoCont}>
        {/* <LogoButton onPress={() => {}} /> */}
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.imgCont}>
        <Image source={UserForm} style={styles.mainImage} />
      </View>
      <View
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.form}
      >
        <Text style={styles.signText}>Add your information ....</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Full Name"
            style={styles.input}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Your Email</Text>
          <TextInput
            onChangeText={setAddress}
            value={address}
            placeholder="Enter your email"
            style={styles.input}
          />
        </View>
        <Pressable onPress={confirmOTP} style={styles.generateButton}>
          <Text style={styles.generateText}>Continue</Text>
        </Pressable>
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
    // position: "absolute",
    top: 60,
    flex: 0.3,
  },
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
  },
  imgCont: {
    flex: 0.7,
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
    backgroundColor: "white",
    flex: 1.2,
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
  },
  footCont: {
    position: "relative",
    top: 10,
  },
});
