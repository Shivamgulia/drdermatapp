import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CategoryCard({ item, active, onChangeCategory }) {
  const data = item;
  console.log(data, "111");

  return (
    <TouchableOpacity
      onPress={() => {
        onChangeCategory(data.id);
      }}
      style={[
        {
          paddingVertical: 8,
          alignItems: "center",
          justifyContent: "space-between",
          width: "25%",
        },
        active
          ? {
              borderWidth: 1,
              borderBottomWidth: 0,
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px -4px 10px 2px",
              marginTop: 5,
            }
          : {},
      ]}
    >
      <Image
        source={data.image}
        style={{
          width: "70%",
          height: 30,
          borderWidth: 1,
          borderColor: "#f3f3f3",
          borderRadius: 8,
          aspectRatio: 1,
        }}
      />
      <Text
        style={{
          color: "black",
          width: "80%",
          textAlign: "center",
        }}
      >
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
