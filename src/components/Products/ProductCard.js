import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProductCard(props) {
  console.log(props);

  function increaseProductQuantity(productId) {
    console.log(productId);
  }
  function decreaseProductQuantity(productId) {
    console.log(productId);
  }

  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 20,
        paddingVertical: 10,
        gap: 60,
        alignItems: "center",
        borderBottomWidth: 1,
        borderRadius: 50,
        borderColor: "#e7e7e8",
      }}
    >
      <View>
        <Image
          source={props.data.image}
          style={{
            borderWidth: 1,
            borderRadius: 14,
            borderColor: "#dddede",
            width: 120,
            height: 120,
          }}
        />
      </View>
      <View style={{ gap: 5 }}>
        <View>
          <Text>{props.data.name}</Text>
          <Text>{props.data.subname}</Text>
        </View>
        <Text>$ {props.data.cost}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fcf3d3",
            justifyContent: "space-evenly",
            borderWidth: 1,
            borderRadius: 4,
          }}
        >
          <Pressable
            style={{}}
            onPress={() => {
              decreaseProductQuantity(props.data.id);
            }}
          >
            <Text style={{ fontWeight: "bold" }}>-</Text>
          </Pressable>
          <Text>{props.data.quatity}</Text>
          <Pressable
            onPress={() => {
              increaseProductQuantity(props.data.id);
            }}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
