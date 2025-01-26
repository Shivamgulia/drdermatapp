import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoButton from "../components/UI/LogoButton";
import { SafeAreaView } from "react-native";

import IntroImage from "../../assets/intro2.png";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Intro2() {
  const navigation = useNavigation();

  function goToIntro3() {
    navigation.navigate("Dashboard");
  }
  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.logoCont}>
        <LogoButton onPress={() => {}} />
      </View>
      <View style={styles.imageCont}>
        <Image source={IntroImage} style={styles.image} />
      </View>
      <View style={styles.bottomCont}>
        <View>
          <Text style={styles.mainHead}>Know Your Medicines</Text>
          <Text style={styles.bodyText}>
            Get authentic information on any medicine
          </Text>
          <Text style={styles.bodyText}>
            side effect, safety advice, substitutes and more.
          </Text>
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
  imageCont: { flex: 1, alignItems: "center" },
  image: {
    width: 300,
    height: 300,
  },
  bottomCont: { flex: 1, alignItems: "center", justifyContent: "space-evenly" },
  mainHead: {
    fontSize: 25,
    fontWeight: 800,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 12,
    textAlign: "center",
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
  },
});
