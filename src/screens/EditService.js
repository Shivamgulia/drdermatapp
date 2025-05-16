import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ClinicCard from "../components/Products/ClinicCard";
import Icon from "react-native-vector-icons/Entypo";
import BottomNav from "../components/UI/BottomNav";

const DUMMYCLINIC = {
  id: 1,
  name: "XYZ Clinic",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: require("../../assets/clinic/clinic1.png"),
  rating: 4.3,
};

export default function EditService() {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
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
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            Add / Edit Service
          </Text>
        </View>
        <ClinicCard item={DUMMYCLINIC} />

        {/* form */}
        <View
          style={{
            paddingVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 10,
              justifyContent: "space-between",
              paddingHorizontal: 20,
              height: 30,
            }}
          >
            <Text style={{ alignSelf: "center" }}>Service Name</Text>
            <TextInput
              value={serviceName}
              onChangeText={setServiceName}
              style={[styles.input]}
            />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ alignSelf: "flex-start" }}>Service Description</Text>
            <TextInput
              value={serviceDescription}
              onChangeText={setServiceDescription}
              multiline
              style={[
                styles.input,
                {
                  width: "100%",
                  marginTop: 5,
                  height: 100,
                },
              ]}
            />
          </View>
          {/* image */}
          <View style={{ alignItems: "center", marginTop: 20, gap: 10 }}>
            <Text>Add Image</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#b9baba",
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Icon name="plus" size={50} />
            </View>
          </View>
          {/* submit */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#155e95",
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
          </View>
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
        <BottomNav />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.3,
    color: "#d1d1d1",
    width: "60%",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});
