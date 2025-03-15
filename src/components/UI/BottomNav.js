import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FoundationIcon from "react-native-vector-icons/Foundation";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";

export default function BottomNav() {
  const navigation = useNavigation();

  return (
    <View style={styles.cont}>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        <FoundationIcon name="home" size={37} color="#515C71" />
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("AddConcern");
        }}
      >
        <FoundationIcon name="clipboard" size={37} color="#515C71" />
        <Text style={styles.navText}>Book Apointment</Text>
      </Pressable>
      <View style={styles.centerNav}>
        <View style={styles.centerNavItem}>
          <Icon name="folder-open" size={46} color="#515C71" />
          <Text style={styles.centerNavText}>Your result</Text>
        </View>
      </View>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <FontAwesome6 name="user-doctor" size={37} color="#515C71" />
        <Text style={styles.navText}>Treatment</Text>
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Icon name="user-o" size={37} color="#515C71" />
        <Text style={styles.navText}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopEndRadius: 36,
    borderTopLeftRadius: 36,
    width: "100%",
  },
  centerNav: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
    top: -40,
    borderRadius: "50%",
    overflow: "visible",
    width: "25%",
    aspectRatio: 1,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  centerNavItem: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // top: -15,
  },
  navItem: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "15%",
    height: 60,
  },
  navText: {
    fontSize: 7,
  },
  centerNavText: {
    fontSize: 10,
  },
});
