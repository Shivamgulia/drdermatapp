import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function SquareLogo(props) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.drtext}>dr.</Text>
      <Text style={styles.dermattext}>dermat</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
  },
  drtext: {
    fontSize: 40,
    color: "#1d1f20",
  },
  dermattext: {
    fontSize: 40,
    color: "#b3a137",
  },
});
