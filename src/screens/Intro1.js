import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoButton from "../components/UI/LogoButton";
import { SafeAreaView } from "react-native";

import IntroImage from "../../assets/intro1.png";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Intro1() {
  const navigation = useNavigation();

  function goToIntro2() {
    navigation.navigate("Intro2");
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
          <Text style={styles.mainHead}>Home Delivery Of Medicines</Text>
          <Text style={styles.bodyText}>
            Order any medicine or health product at discounted prices and get
            them delievered at your doorstep.
          </Text>
        </View>

        <Pressable style={styles.button} onPress={goToIntro2}>
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
