import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function CaresolItem(item) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width: width / 2 + 20 }}>
      <View style={styles.cont}>
        <Image source={item.item.icon} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 100,
    margin: 20,
  },
  image: {
    width: windowWidth / 2,
    height: 100,
    borderRadius: 10,
  },
});
