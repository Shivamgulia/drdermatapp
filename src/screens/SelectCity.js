import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import CityIcon from "../../assets/city.png";

const DUMMYCITIES = ["Meerut", "Gurugram", "Delhi", "Kanpur"];

function SelectCity() {
  return (
    <View style={styles.cont}>
      <View style={styles.top}></View>
      <View style={styles.middle}>
        <Text style={styles.input}>
          <Icon name="location-sharp" size={15} color="#868686" />
          <Text style={styles.text}>Select For Your City</Text>
        </Text>
        {/* <TextInput /> */}
      </View>
      <View style={styles.bottom}>
        <View style={styles.currentLoc}>
          <Text style={styles.input}>
            <Feather name="target" size={15} color="#868686" />
            <Text style={styles.text}>Select For Your City</Text>
          </Text>
        </View>
        <View style={styles.listCont}>
          <FlatList
            data={DUMMYCITIES}
            renderItem={(item) => <CityItem item={item} />}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default SelectCity;

function CityItem(item) {
  return (
    <Pressable style={styles.city} onPress={() => {}}>
      <Image source={CityIcon} style={styles.cityicon} />
      <Text>{item.item.item}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  top: {
    backgroundColor: "#155e95",
    flex: 1,
  },
  middle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",

    backgroundColor: "white",

    borderColor: "#868686",
    borderWidth: 1,
    borderRadius: 10,

    paddingHorizontal: 50,
    paddingVertical: 15,

    position: "absolute",
    top: 130,

    zIndex: 1,
  },
  input: {
    display: "flex",
    textAlign: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 10,
  },
  bottom: {
    flex: 4,
    backgroundColor: "#fcf2d3",
    paddingTop: 100,
    rowGap: 20,
  },

  currentLoc: {
    borderWidth: 1,
    height: 50,
    backgroundColor: "white",

    borderStyle: "none solid none solid",
    justifyContent: "center",
    gap: 10,
  },
  listCont: {
    // rowGap: 20,
  },

  city: {
    height: 50,
    justifyContent: "center",
    flexWrap: "wrap",
    paddingLeft: 20,
    marginVertical: 8,
  },
  cityicon: {
    width: 50,
    height: 50,
  },
});
