import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  TextInput,
  Platform,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import UserForm from "../../assets/userform.png";
import Logo from "../../assets/drdermatlogo.jpeg";
import Icon from "react-native-vector-icons/Ionicons";

import { isValidEmail } from "../components/lib/validateEmail";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function UserDetailsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailerror, setEmailError] = useState(false);

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
    console.log(name);
    if (name.trim() == "" || !name) {
      setError(true);
      return;
    }
    if (!email || email.trim() == "" || isValidEmail(email)) {
      setEmailError(true);
    }
    console.log("confirm OTP");
    navigation.navigate("Selectcity");
  }

  function navigateLogin() {
    navigation.navigate("Login");
  }

  return (
    // <View behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
          <Image source={UserForm} style={styles.mainImage} />
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.form}
      >
        <Text style={styles.signText}>Add Your Information</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChangeText={setName}
            onChange={() => {
              if (name && !name.trim() == "") {
                setError(false);
              }
            }}
            value={name}
            placeholder="Full Name"
            style={[styles.input, error ? styles.error : {}]}
          />
          {error && (
            <Text style={{ color: "red", fontSize: 10 }}>
              Name is a required field
            </Text>
          )}
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Your Email</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            onChange={() => {
              if (isValidEmail(email)) {
                setEmailError(false);
              }
            }}
            placeholder="Enter your email"
            style={styles.input}
          />
        </View>
        <Pressable onPress={confirmOTP} style={styles.generateButton}>
          <Text style={styles.generateText}>Continue</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
    //  <View style={{ height: 150 }}></View>
    // </View>
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
    // top: 40,
  },
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
  },
  imgCont: {
    marginTop: 40,
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
    // position: "relative",
    // top: 10,
  },
  error: {
    borderColor: "red",
  },
});
