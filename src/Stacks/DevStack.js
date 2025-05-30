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

const Stack = createNativeStackNavigator();

const DevStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DoctorAppointmentList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DevStack;

const styles = StyleSheet.create({});
