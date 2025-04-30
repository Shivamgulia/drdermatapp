import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator();

const DevStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DevStack;

const styles = StyleSheet.create({});
