import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";

import React from "react";
import Signup from "../screens/Signup";
import Main from "../screens/Main";
import Confirmotp from "../screens/Confirmotp";
import SelectCity from "../screens/SelectCity";
import UserDetailsForm from "../screens/UserDetailsForm";
import Intro1 from "../screens/Intro1";
// import Intro2 from "../screens/Intro2";
// import Intro3 from "../screens/Intro3";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Thankyou from "../screens/Thankyou";
import ChooseConcern from "../screens/ChooseConcern";
import AdditionalConcern from "../screens/AdditionalConcern";
import ImportantConcern from "../screens/ImportantConcern";
import UserProfile from "../screens/UserProfile";
import ChooseRole from "../screens/ChooseRole";
import AddClinic from "../screens/AddClinic";
import ClinicItem from "../screens/ClinicItem";
import ProductList from "../screens/ProductList";
import ClinicList from "../screens/ClinicList";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Userdetailsform"
        component={UserDetailsForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Selectcity"
        component={SelectCity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro1"
        component={Intro1}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Intro2"
        component={Intro2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro3"
        component={Intro3}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Thankyou"
        component={Thankyou}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Concern"
        component={ChooseConcern}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddConcern"
        component={AdditionalConcern}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImpConcern"
        component={ImportantConcern}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddClinic"
        component={AddClinic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Clinic"
        component={ClinicItem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClinicList"
        component={ClinicList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
