import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";

export default function CaresolItem() {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width: width - 50 }}>
      <View style={styles.cont}>
        <Text>CaresolItem</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 100,
    backgroundColor: "red",
    margin: 20,
  },
});
