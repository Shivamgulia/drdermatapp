import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Home1 from "../../assets/home1.png";

import SquareLogo from "../components/UI/SquareLogo";
import Logo from "../../assets/drdermatlogo.jpeg";

export default function Main() {
  const navigation = useNavigation();

  function goToLogin() {
    console.log("go to login");
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={goToLogin} style={styles.logoCont}>
        {/* <SquareLogo onPress={goToLogin} /> */}
        <Image source={Logo} style={styles.logoImage} />
      </Pressable>
      <View style={styles.bottomCont}>
        <View style={styles.imageCont}>
          <Image source={Home1} style={styles.bottomImg} />
          {/* <Image source={Home2} style={styles.bottomImg} /> */}
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
