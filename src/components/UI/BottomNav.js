import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FoundationIcon from "react-native-vector-icons/Foundation";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function BottomNav() {
  return (
    <View style={styles.cont}>
      <View style={styles.navItem}>
        <FoundationIcon name="home" size={20} color="#accef7" />
        <Text style={styles.navText}>Home</Text>
      </View>
      <View style={styles.navItem}>
        <FoundationIcon name="clipboard" size={20} color="#accef7" />
        <Text style={styles.navText}>Book Apointment</Text>
      </View>
      <View style={styles.centerNav}>
        <View style={styles.centerNavItem}>
          <Icon name="folder-open" size={30} color="#accef7" />
          <Text style={styles.centerNavText}>Your result</Text>
        </View>
      </View>
      <View style={styles.navItem}>
        <FontAwesome6 name="user-doctor" size={20} color="#accef7" />
        <Text style={styles.navText}>Treatment</Text>
      </View>
      <View style={styles.navItem}>
        <Icon name="user-o" size={20} color="#accef7" />
        <Text style={styles.navText}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  centerNav: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
    top: -30,
    borderRadius: "50%",
    overflow: "visible",
    width: "30%",
    aspectRatio: 1,
  },
  centerNavItem: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -15,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
  },
  navText: {
    fontSize: 7,
  },
  centerNavText: {
    fontSize: 15,
  },
});
