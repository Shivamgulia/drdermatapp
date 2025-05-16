import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ClinicCard from "../components/Products/ClinicCard";
import ClinicAppointmentTable from "../components/Products/ClinicAppointmentTable";
import BottomNav from "../components/UI/BottomNav";

const DUMMYCLINIC = {
  id: 1,
  name: "XYZ Clinic",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: require("../../assets/clinic/clinic1.png"),
  rating: 4.3,
};

const DUMMYAPPOINTMENTS = [
  {
    id: 1,
    name: "ankita sharma",
    date: "22-04-2025",
    assigned: "",
  },
  {
    id: 2,
    name: "siya goyal",
    date: "22-04-2025",
    assigned: null,
  },
  {
    id: 3,
    name: "vidhi bardhwaj",
    date: "22-04-2025",
  },
  {
    id: 4,
    name: "yamini signh",
    date: "22-04-2025",
    assigned: "Satyam Gulia",
  },
];

export default function ClinicAppointmentList() {
  return (
    <>
      <SafeAreaView>
        <ClinicCard item={DUMMYCLINIC} hideButtons={true} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
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
            All Appointments
          </Text>
        </View>
        <ClinicAppointmentTable data={DUMMYAPPOINTMENTS} />
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

const styles = StyleSheet.create({});
