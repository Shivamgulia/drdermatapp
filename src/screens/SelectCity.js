import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import CityIcon from "../../assets/city.png";
import { useNavigation } from "@react-navigation/native";

const DUMMYCITIES = ["Meerut", "Gurugram", "Delhi", "Kanpur"];

function SelectCity() {
  const navigation = useNavigation();

  function moveForwad() {
    console.log("userdetailsform");

    navigation.navigate("Intro1");
  }

  console.log(windowHeight, windowWidth);

  return (
    <View style={styles.cont}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 60,
            backgroundColor: "#155e95",
            borderRadius: "50%",
            padding: 5,
            zIndex: 2,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      )}
      <View style={styles.top}></View>
      <Pressable style={styles.middle} onPress={moveForwad}>
        <Text style={styles.input}>
          <Icon name="location-sharp" size={15} color="#868686" />
        </Text>
        <Text style={styles.text}>Select For Your City</Text>
        {/* <TextInput /> */}
      </Pressable>
      <View style={styles.bottom}>
        <View style={styles.currentLoc}>
          <Text style={styles.input}>
            <Feather name="target" size={15} color="#868686" />
            {/* <Text style={styles.text}>Select For Your City</Text> */}
          </Text>
          <TextInput placeholder="Select For Your City" />
        </View>
        <View style={styles.listCont}>
          <FlatList
            data={DUMMYCITIES}
            renderItem={(item) => <CityItem item={item} next={moveForwad} />}
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

function CityItem(props) {
  return (
    <TouchableOpacity style={styles.city} onPress={props.next}>
      <Image source={CityIcon} style={styles.cityicon} />
      <Text>{props.item.item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  top: {
    backgroundColor: "#155e95",
    height: windowHeight / 6,
  },
  middle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",

    flexDirection: "row",

    backgroundColor: "white",

    borderColor: "#868686",
    borderWidth: 1,
    borderRadius: 10,

    paddingHorizontal: 50,
    paddingVertical: 15,

    position: "absolute",
    top: windowHeight / 6 - 30,

    zIndex: 1,
  },
  input: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
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
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#868686",
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
