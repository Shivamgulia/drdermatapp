import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Home1 from "../../assets/home1.png";

import SquareLogo from "../components/UI/SquareLogo";
import Logo from "../../assets/drdermatlogo.jpeg";

export default function Main() {
  const navigation = useNavigation();

  useEffect(() => {
    waitAndGo(() => {
      // navigation.navigate("Clinic");
      // navigation.navigate("Dashboard");
      navigation.navigate("Login");
    });
  }, []);

  function waitAndGo(callback) {
    setTimeout(() => {
      callback();
    }, 3000);
  }

  function goToLogin() {
    console.log("go to ChooseRole");
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={goToLogin} style={styles.logoCont}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={{ color: "white", marginTop: 10, fontSize: 20 }}>
          Your own dermat!
        </Text>
      </Pressable>
      <View style={styles.bottomCont}>
        <View style={styles.imageCont}>
          <Image source={Home1} style={styles.bottomImg} />
        </View>
        <Text style={styles.bottomtext}>Copyright by dr.dermat 2025</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#155e95",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoCont: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoImage: {
    width: 218,
    height: 66,
  },
  bottomCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 20,
  },
  imageCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
    gap: 40,
  },
  bottomImg: {
    width: 155,
    // aspectRatio: "1: 2",
    height: 66,
  },
  bottomtext: {
    color: "white",
    paddingBottom: 20,
    fontFamily: "Andale Mono Regular",
  },
});
