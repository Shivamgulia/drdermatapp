import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNav from "../components/UI/BottomNav";
import { useNavigation } from "@react-navigation/native";

export default function Thankyou() {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fcf2d3",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#155e95",
            paddingVertical: 10,
            paddingHorizontal: 50,
            borderRadius: 30,
          }}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Thankyou
          </Text>
        </Pressable>
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
