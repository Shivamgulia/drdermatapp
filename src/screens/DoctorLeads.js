import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { Dimensions } from "react-native";
import DoctorCard from "../components/Products/DoctorCard";
import BottomNav from "../components/UI/BottomNav";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DUMMYDOCTOR = {
  id: 1,
  name: "Doctor Name",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: require("../../assets/doctor.png"),
  rating: 4.3,
};

export default function DoctorLeads() {
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#155e95",
              color: "white",
              paddingHorizontal: 40,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            Dashboard
          </Text>
        </View>
        <View>
          <DoctorCard item={DUMMYDOCTOR} hideButtons={true} />
        </View>

        <View style={{ width: "100%", flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity style={styles.lead}>
            <Image
              source={require("../../assets/cliniclead1.png")}
              style={styles.leadImage}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#155e95",
                  color: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              >
                Today's Appointments
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lead}>
            <Image
              source={require("../../assets/cliniclead2.png")}
              style={styles.leadImage}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#155e95",
                  color: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              >
                All Appointments
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
        <BottomNav doctor={true} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lead: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  leadImage: {
    width: "80%",
    height: (windowWidth / 2) * 0.8,
    borderRadius: 35,
  },
});
