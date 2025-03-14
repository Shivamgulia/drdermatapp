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
      <Stack.Screen
        name="Selectcity"
        component={SelectCity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Userdetailsform"
        component={UserDetailsForm}
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
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
