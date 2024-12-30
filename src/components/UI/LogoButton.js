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
  container: {
    backgroundColor: "#ebf1cf",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    borderRadius: "18%",
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
