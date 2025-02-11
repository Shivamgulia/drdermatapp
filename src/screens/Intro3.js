import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoButton from "../components/UI/LogoButton";
import { SafeAreaView } from "react-native";

import IntroImage from "../../assets/intro3.png";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/drdermatlogo.jpeg";

export default function Intro3() {
  const navigation = useNavigation();

  function goToIntro3() {
    navigation.navigate("Dashboard");
  }
  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.logoCont}>
        {/* <LogoButton onPress={() => {}} /> */}
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.imageCont}>
        <Image source={IntroImage} style={styles.image} />
      </View>
      <View style={styles.bottomCont}>
        <View>
          <Text style={styles.mainHead}>Your go-to health app</Text>
          <Text style={styles.bodyText}>
            Your complete healthcare companion,
          </Text>
          <Text style={styles.bodyText}>in your pocket</Text>
        </View>

        <Pressable style={styles.button} onPress={goToIntro3}>
          <Text style={styles.text}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoCont: {
    paddingTop: 50,
    flex: 1,
  },
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
  },
  imageCont: { flex: 2, alignItems: "center" },
  image: {
    width: 300,
    height: 300,
  },
  bottomCont: {
    flex: 1.7,
    alignItems: "center",
    // justifyContent: "space-evenly",
    justifyContent: "flex-start",
    gap: 50,
  },
  mainHead: {
    fontSize: 25,
    fontWeight: 800,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#808080",
  },
  button: {
    width: 300,
    backgroundColor: "#155e95",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    color: "white",
    paddingVertical: 10,
    fontSize: 20,
  },
});
