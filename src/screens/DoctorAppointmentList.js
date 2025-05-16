import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DoctorCard from "../components/Products/DoctorCard";
import AppointmentTable from "../components/Products/AppointmentTable";
import BottomNav from "../components/UI/BottomNav";

const DUMMYDOCTOR = {
  id: 1,
  name: "Doctor Name",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: require("../../assets/doctor.png"),
  rating: 4.3,
};

const DUMMYAPPOINTMENTS = [
  {
    id: 1,
    name: "ankita sharma",
    date: "22-04-2025",
    status: "Done",
    action: "call",
  },
  {
    id: 2,
    name: "siya goyal",
    date: "22-04-2025",
    status: "",
    action: "call",
  },
  {
    id: 3,
    name: "vidhi bardhwaj",
    date: "22-04-2025",
    status: null,
    action: "call",
  },
  {
    id: 4,
    name: "yamini signh",
    date: "22-04-2025",
    status: "Done",
    action: "call",
  },
];

export default function DoctorAppointmentList() {
  return (
    <>
      <SafeAreaView>
        <View>
          <DoctorCard item={DUMMYDOCTOR} hideButtons={true} />
        </View>
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

        {/* appointment table */}
        <AppointmentTable data={DUMMYAPPOINTMENTS} />
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

const styles = StyleSheet.create({});
