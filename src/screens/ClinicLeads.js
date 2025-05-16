import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ClinicCard from "../components/Products/ClinicCard";

import { Dimensions } from "react-native";
import BottomNav from "../components/UI/BottomNav";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DUMMYCLINIC = {
  id: 1,
  name: "XYZ Clinic",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: require("../../assets/clinic/clinic1.png"),
  rating: 4.3,
};

export default function ClinicLeads() {
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
          <ClinicCard item={DUMMYCLINIC} hideButtons={true} />
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
                Today's Leads
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
                All Leads
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
        <BottomNav clinic={true} />
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
