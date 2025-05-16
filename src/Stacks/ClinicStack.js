import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import ClinicLeads from "../screens/ClinicLeads";
import UserProfile from "../screens/UserProfile";
import ClinicAppointmentList from "../screens/ClinicAppointmentList";

const Stack = createNativeStackNavigator();

const ClinicStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Appointments"
        component={ClinicAppointmentList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Leads"
        component={ClinicLeads}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ClinicStack;

const styles = StyleSheet.create({});
