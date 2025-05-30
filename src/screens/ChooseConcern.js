import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomNav from "../components/UI/BottomNav";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function ChooseConcern() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#155e95" }}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            marginBottom: 20,
            paddingLeft: 30,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
            Choose Your Concerns?
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View
            style={{
              paddingTop: 80,
              width: windowWidth,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                backgroundColor: "#fcf2d3",
                width: windowWidth / 2 - 70,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 15,
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/products.png")}
                style={{
                  borderRadius: 100,
                  width: 120,
                  height: 120,
                  position: "relative",
                  top: -30,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              />
              <Text
                style={{
                  color: "#515c70",
                  fontSize: 28,
                  position: "relative",
                  top: -20,
                }}
              >
                Skin
              </Text>

              <Pressable
                onPress={() => {
                  navigation.navigate("AddConcern");
                }}
                style={{
                  backgroundColor: "#155e95",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Click Here</Text>
              </Pressable>
            </View>
            <View
              style={{
                backgroundColor: "#fcf2d3",
                width: windowWidth / 2 - 70,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 15,
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/products.png")}
                style={{
                  borderRadius: 100,
                  width: 120,
                  height: 120,
                  position: "relative",
                  top: -30,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              />
              <Text
                style={{
                  color: "#515c70",
                  fontSize: 28,
                  position: "relative",
                  top: -20,
                }}
              >
                Hair
              </Text>

              <Pressable
                onPress={() => {
                  navigation.navigate("AddConcern");
                }}
                style={{
                  backgroundColor: "#155e95",
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>Click Here</Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Pressable onPress={() => {}}>
              <Text style={{ color: "#b0b1b1" }}>I Don't Have a Concern</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopEndRadius: 36,
          borderTopLeftRadius: 36,
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          height: 66,
        }}
      >
        <BottomNav />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
