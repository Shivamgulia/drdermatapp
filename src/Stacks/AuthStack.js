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

const AuthStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseRole"
        component={ChooseRole}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmotp"
        component={Confirmotp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
