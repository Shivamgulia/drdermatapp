import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import LogoButton from "../components/UI/LogoButton";
import { SafeAreaView } from "react-native";

import { Image } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/drdermatlogo.jpeg";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Intro1() {
  const navigation = useNavigation();
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / (windowWidth - 40));

    setCurrentIndex(index);
  };
  function scrollNext() {
    if (currentIndex < 2) {
      listRef?.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex((prev) => prev + 1);
    } else {
      listRef?.current?.scrollToIndex({
        index: 2,
        animated: true,
      });
    }
  }

  function goToIntro2() {
    navigation.navigate("Dashboard");
  }
  return (
    <View style={styles.cont}>
      <View style={styles.logoCont}>
        {/* <LogoButton onPress={() => {}} /> */}
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={{ width: windowWidth, height: 400 }}>
        <FlatList
          ref={listRef}
          data={[
            {
              id: 1,
              head: "Home Delivery Of Medicines",
              text: "Order any medicine or health product at discounted prices and get them delievered at your doorstep.",
              image: require("../../assets/intro1.png"),
            },
            {
              id: 2,
              head: "Know Your Medicines",
              text: "Get authentic information on any medicine \n side effect, safety advice, substitutes and more.",
              image: require("../../assets/intro2.png"),
            },
            {
              id: 3,
              head: "Your go-to health app",
              text: "Your complete healthcare companion, in your pocket",
              image: require("../../assets/intro3.png"),
            },
          ]}
          onScroll={handleScroll}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={windowWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ width: windowWidth, height: 400 }}>
                <View style={styles.imageCont}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.bottomCont}>
                  <View>
                    <Text style={styles.mainHead}>{item.head}</Text>
                    <Text style={styles.bodyText}>{item.text}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              borderWidth: currentIndex == 0 ? 3 : 2,
              width: 2,
              height: 2,
              borderRadius: "50%",
              borderBlockColor: currentIndex == 0 ? "black" : "grey",
            }}
          ></View>
          <View
            style={{
              borderWidth: currentIndex == 1 ? 3 : 2,

              width: 2,
              height: 2,
              borderRadius: "50%",
              borderBlockColor: currentIndex == 1 ? "black" : "grey",
            }}
          ></View>
          <View
            style={{
              borderWidth: currentIndex == 2 ? 3 : 2,

              width: 2,
              height: 2,
              borderRadius: "50%",
              borderBlockColor: currentIndex == 2 ? "black" : "grey",
            }}
          ></View>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        {currentIndex != 2 && (
          <Pressable style={styles.button} onPress={scrollNext}>
            <Text style={styles.text}>Next</Text>
          </Pressable>
        )}
        {currentIndex == 2 && (
          <Pressable style={styles.button} onPress={goToIntro2}>
            <Text style={styles.text}>Get Started</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "white",
    width: windowWidth,
    height: windowHeight,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoCont: {
    paddingTop: 50,
    height: 100,
  },
  logoImage: {
    width: 218,
    height: 66,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 9px 18px -18px",
  },
  imageCont: { alignItems: "center", height: 300, justifyContent: "flex-end" },
  image: {
    width: 225,
    height: 225,
  },
  bottomCont: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 50,
    height: 300,
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
