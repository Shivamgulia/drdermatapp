import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const windowHeight = Dimensions.get("window").height;

export default function ClinicCard({ item, hideButtons }) {
  const data = item;

  const navigation = useNavigation();
  return (
    <View style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 5px" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Clinic");
        }}
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          gap: 20,
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={data.image}
            style={{ width: windowWidth / 3, height: windowWidth / 3 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{data.name}</Text>
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
              <Text style={{ fontSize: 13 }}>{data.rating}</Text>
              <Icon name="star" size={13} />
            </View>
            <Text style={{ fontSize: 10, color: "#695e21" }}>
              {"( 100 Reviews )"}
            </Text>
          </View>
          <View>
            <Text style={{ color: "#695e21", paddingLeft: 0, fontSize: 12 }}>
              Address
            </Text>
            <Text
              style={{
                width: (windowWidth * 2) / 3,
                color: "#695e21",
                fontSize: 12,
              }}
            >
              {data.description.substring(0, 100) + "..."}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {!hideButtons && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingVertical: 20,
          }}
        >
          <View style={styles.buttons}>
            <Text style={styles.text}>
              <Icon2 name="phone-alt" size={13} />
              {"  "}
              Call
            </Text>
          </View>
          <View style={styles.greenButton}>
            <Text style={styles.greenButtonText}>
              <Icon name="logo-whatsapp" size={13} />
              {"  "}
              Whatsapp
            </Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.text}>
              <Icon name="map" size={13} color={"white"} />
              {"  "}
              Direction
            </Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.text}>See Details</Text>
          </View>
        </View>
      )}
      {hideButtons && <View style={{ height: 20 }}></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#155e95",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    justifyContent: "center",
  },
  text: { color: "white", fontSize: 13 },
  greenButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#34bc68",
  },
  greenButtonText: {
    color: "#34bc68",
    fontSize: 13,
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
});
