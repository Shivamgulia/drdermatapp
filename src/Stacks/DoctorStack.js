import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import Product from "../screens/Product";
import ProductList from "../screens/ProductList";
import ClinicList from "../screens/ClinicList";
import EditService from "../screens/EditService";
import AddProduct from "../screens/AddProduct";
import AddCategory from "../screens/AddCategory";
import ClinicLeads from "../screens/ClinicLeads";
import DoctorAppointmentList from "../screens/DoctorAppointmentList";
import DoctorLeads from "../screens/DoctorLeads";
import UserProfile from "../screens/UserProfile";

const Stack = createNativeStackNavigator();

const DoctorStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Appointments"
        component={DoctorAppointmentList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Leads"
        component={DoctorLeads}
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

export default DoctorStack;

const styles = StyleSheet.create({});
