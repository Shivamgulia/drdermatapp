import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MedsCard({ data }) {
  return (
    <View
      style={{
        paddingVertical: 8,
        marginHorizontal: 16,
        gap: 5,
        paddingBottom: 50,
      }}
    >
      <Image
        source={data.image}
        style={{
          width: 100,
          height: 100,
          borderWidth: 1,
          borderColor: "#f3f3f3",
          borderRadius: 8,
        }}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
        <Text style={{ fontSize: 10, color: "#878887" }}>{data.subname}</Text>

        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
          <Text style={{ fontWeight: "bold" }}>{data.discountedCost}</Text>
          <Text style={{ textDecorationLine: "line-through", fontSize: 10 }}>
            {data.cost}
          </Text>
          <Text style={{ color: "#3f6244", fontSize: 10, fontWeight: "bold" }}>
            27 % off
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Pressable
          style={{
            backgroundColor: "#155e94",
            paddingVertical: 5,
            borderRadius: 15,
            boxShadow: "#84b2cc 0px 10px 10px, #84b2cc 0px 6px 6px",
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
