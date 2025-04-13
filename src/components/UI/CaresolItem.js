import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

export default function CaresolItem(item) {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <View style={{ width: 201, marginRight: 50 }}>
      {/* <View style={{ width: width / 2 + 20 }}> */}
      <TouchableOpacity
        style={styles.cont}
        onPress={() => {
          if (item.item.redirect) navigation.navigate(item.item.redirectTo);
        }}
      >
        <Image source={item.item.icon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 130,
    margin: 20,
  },
  image: {
    width: 201,
    height: 130,
    borderRadius: 10,
  },
});
