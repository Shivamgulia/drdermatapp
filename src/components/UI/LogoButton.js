import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function LogoButton(props) {
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
    paddingHorizontal: 40,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    borderRadius: 50,
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
