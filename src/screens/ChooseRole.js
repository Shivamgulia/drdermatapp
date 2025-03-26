import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomNav from "../components/UI/BottomNav";
import { useNavigation } from "@react-navigation/native";

export default function ChooseRole() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#155e95" }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
              paddingBottom: 50,
            }}
          >
            Choose Your Role
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View
            style={{
              paddingTop: 80,
              paddingHorizontal: 40,
              flexDirection: "row",
              gap: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#fcf2d3",
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 15,
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/role1.png")}
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
                Doctor
              </Text>

              <Pressable
                onPress={() => {
                  navigation.navigate("Login");
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
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 15,
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/role2.png")}
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
                Clinic
              </Text>

              <Pressable
                onPress={() => {
                  navigation.navigate("Login");
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
    </>
  );
}

const styles = StyleSheet.create({});
