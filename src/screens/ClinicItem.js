import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { Dimensions } from "react-native";
import BottomNav from "../components/UI/BottomNav";
import ClinicServices from "../components/Clinic/ClinicServices";
import ClinicReviewSection from "../components/Clinic/ClinicReviewSection";
import ClinicDetailsSection from "../components/Clinic/ClinicDetailsSection";

const width = Dimensions.get("window").width;

export default function ClinicItem() {
  const [showSection, setShowSection] = useState(0);
  return (
    <>
      <ScrollView style={{ flex: 1, width: width, paddingTop: 60 }}>
        <View style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 5px" }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              gap: 20,
            }}
          >
            <View>
              <Image
                source={require("../../assets/clinic/clinic1.png")}
                style={{ width: width / 3, height: 150 }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                XYZ Clinic
              </Text>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "flex-end" }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 20,
                    flexDirection: "row",
                    gap: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>4.3</Text>
                  <Icon name="star" size={13} />
                </View>
                <Text style={{ fontSize: 10, color: "#695e21" }}>
                  {"( 100 Reviews )"}
                </Text>
              </View>
              <View>
                <Text style={{ color: "#695e21", paddingLeft: 10 }}>
                  Address
                </Text>
                <Text style={{ width: width / 2, color: "#695e21" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingVertical: 20,
            }}
          >
            <View style={styles.buttons}>
              <Text style={styles.text}>
                <Icon name="phone" size={12} />
                {"  "}
                Call
              </Text>
            </View>
            <View style={styles.greenButton}>
              <Text style={styles.greenButtonText}>
                <Icon name="whatsapp" size={12} />
                {"  "}
                Whatsapp
              </Text>
            </View>
            <View style={styles.buttons}>
              <Text style={styles.text}>
                <Icon name="map" size={12} color={"white"} />
                {"  "}
                Direction
              </Text>
            </View>
            <View style={styles.buttons}>
              <Text style={styles.text}>See Details</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              width,
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setShowSection(0);
              }}
            >
              <Text
                style={{
                  color: showSection == 0 ? "#125e94" : "#727c8f",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowSection(1);
              }}
            >
              <Text
                style={{
                  color: showSection == 1 ? "#125e94" : "#727c8f",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowSection(2);
              }}
            >
              <Text
                style={{
                  color: showSection == 2 ? "#125e94" : "#727c8f",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Reviews
              </Text>
            </TouchableOpacity>
          </View>
          {showSection == 0 && <ClinicDetailsSection />}
          {showSection == 1 && <ClinicServices />}
          {showSection == 2 && <ClinicReviewSection />}
        </View>
        <View style={{ height: 200 }}></View>
      </ScrollView>
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
        <BottomNav />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#155e95",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  text: { color: "white", fontSize: 12 },
  greenButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#34bc68",
  },
  greenButtonText: {
    color: "#34bc68",
    fontSize: 12,
  },
});
