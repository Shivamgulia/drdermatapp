import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { Dimensions } from "react-native";
import BottomNav from "../components/UI/BottomNav";
const windowWidth = Dimensions.get("window").width;

export default function ClinicItem() {
  return (
    <>
      <ScrollView style={{ flex: 1, width: windowWidth, paddingTop: 60 }}>
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
                style={{ width: windowWidth / 3, height: 150 }}
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
                <Text style={{ width: windowWidth / 2, color: "#695e21" }}>
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
                <Icon name="phone" size={14} />
                {"  "}
                Call
              </Text>
            </View>
            <View style={styles.greenButton}>
              <Text style={styles.greenButtonText}>
                <Icon name="whatsapp" size={14} />
                {"  "}
                Whatsapp
              </Text>
            </View>
            <View style={styles.buttons}>
              <Text style={styles.text}>
                <Icon name="map" size={14} color={"white"} />
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
              gap: 20,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Details</Text>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", borderBottomWidth: 2 }}
            >
              Service
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Reviews</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <View
              style={[
                styles.buttons,
                { paddingHorizontal: 30, paddingVertical: 10 },
              ]}
            >
              <Text style={styles.text}>Add Services</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                backgroundColor: "#fdf3d4",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderRadius: 40,
              }}
            >
              <Text>
                <Icon name="search" />
                {"  "}
                Search
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 30, gap: 20 }}>
            <View style={styles.service}>
              <View style={styles.clinicImageView}>
                <Image
                  source={require("../../assets/clinic/clinic2.png")}
                  style={styles.serviceImage}
                />
                <Text>Service</Text>
              </View>
              <Text style={styles.clincText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <TouchableOpacity style={styles.editbutton}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.service}>
              <View style={styles.clinicImageView}>
                <Image
                  source={require("../../assets/clinic/clinic2.png")}
                  style={styles.serviceImage}
                />
                <Text>Service</Text>
              </View>
              <Text style={styles.clincText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <TouchableOpacity style={styles.editbutton}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.service}>
              <View style={styles.clinicImageView}>
                <Image
                  source={require("../../assets/clinic/clinic2.png")}
                  style={styles.serviceImage}
                />
                <Text>Service</Text>
              </View>
              <Text style={styles.clincText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <TouchableOpacity style={styles.editbutton}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  text: { color: "white" },
  greenButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#34bc68",
  },
  greenButtonText: {
    color: "#34bc68",
  },
  service: {
    flexDirection: "row",
    marginHorizontal: 15,
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "#6f7070",
  },
  clinicImageView: {
    alignItems: "center",
  },
  serviceImage: {
    width: 80,
    height: 80,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  clincText: {
    fontSize: 16,
    width: windowWidth / 1.6,
  },
  editbutton: {
    position: "relative",
    top: -20,
    left: -40,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
    borderWidth: 1,
    borderColor: "#6f7070",
    borderRadius: 20,
  },
});
