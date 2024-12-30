import { Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LogoButton from "../components/UI/LogoButton";

export default function Main() {
  const navigation = useNavigation();

  function goToLogin() {
    console.log("go to login");
    navigation.navigate("Signup");
  }
  return (
    <SafeAreaView style={styles.container}>
      <LogoButton onPress={goToLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebf1cf",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // button: {
  //   backgroundColor: "white",
  //   paddingHorizontal: 40,
  //   paddingVertical: 20,
  //   display: "flex",
  //   flexDirection: "row",
  //   borderRadius: "18%",
  // },
  // drtext: {
  //   fontSize: 40,
  //   color: "#1d1f20",
  // },
  // dermattext: {
  //   fontSize: 40,
  //   color: "#b3a137",
  // },
});
