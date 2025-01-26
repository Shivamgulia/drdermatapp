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
import Home2 from "../../assets/home2.png";
import SquareLogo from "../components/UI/SquareLogo";

export default function Main() {
  const navigation = useNavigation();

  function goToLogin() {
    console.log("go to login");
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoCont}>
        <SquareLogo onPress={goToLogin} />
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.imageCont}>
          <Image source={Home1} style={styles.bottomImg} />
          <Image source={Home2} style={styles.bottomImg} />
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
    width: 40,
    height: 40,
  },
  bottomtext: {
    color: "white",
    paddingBottom: 20,
  },
});
