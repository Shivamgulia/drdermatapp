import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MedsCard from "../components/Products/MedsCard";

import Icon from "react-native-vector-icons/Ionicons";

import { Dimensions } from "react-native";
import CategoryCard from "../components/Products/CategoryCard";
import BottomNav from "../components/UI/BottomNav";
const windowWidth = Dimensions.get("window").width;

const windowHeight = Dimensions.get("window").height;

const CATEGORIES = [
  {
    id: "1",
    name: "General Physician",
    image: require("../../assets/home/cont1.png"),
  },
  {
    id: "2",
    name: "Mental Wellness",
    image: require("../../assets/home/cont6.png"),
  },
  {
    id: "3",
    name: "Skin & Hair",
    image: require("../../assets/home/cont2.png"),
  },
  {
    id: "4",
    name: "Women's Health",
    image: require("../../assets/home/cont3.png"),
  },
];

const DUMMYMEDS = [
  {
    id: 1,
    name: "Dolo 650 mg 1",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
  {
    id: 2,
    name: "Dolo 650 mg 1",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
  {
    id: 3,
    name: "Dolo 650 mg",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
  {
    id: 4,
    name: "Dolo 650 mg",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
  {
    id: 5,
    name: "Dolo 650 mg",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
  {
    id: 6,
    name: "Dolo 650 mg",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
  {
    id: 7,
    name: "Dolo 650 mg",
    subname: "15 Tablets",
    cost: 33.76,
    discountedCost: 24.6,
    image: require("../../assets/home/med1.png"),
  },
];

export default function ProductList() {
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <View style={styles.searchSection}>
            <View style={styles.buttonCont}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={styles.topButtons}>
                  <Icon name="location-sharp" size={20} color="white" />
                </View>
                <Text style={{ color: "black" }}>Area and City</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <View style={styles.topButtons}>
                  <Icon name="cart-outline" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <Text
              // style={{ position: "relative", top: 32, left: 40, zIndex: 2 }}
              >
                <Icon name="search" size={20} color="black" />
              </Text>
              <TextInput
                placeholder={windowWidth > 400 ? "Search Products" : "Search"}
                style={[styles.searchInput]}
                onChangeText={setSearchValue}
                value={searchValue}
              />
            </View>
          </View>

          {/* heading */}

          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginBottom: 20,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 30 }}>Select By Category</Text>
            <View style={{ borderWidth: 1, width: "55%" }}></View>
          </View>

          {/* categories */}
          <View style={{ width: "96%", paddingLeft: "3%", paddingRight: "1%" }}>
            <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item.id}
              horizontal
              renderItem={(item) => {
                return (
                  //   <View style={{ width: "20%" }}>
                  <CategoryCard item={item} active={item.item.id == "1"} />
                  //   </View>
                );
              }}
            />
          </View>
          {/* meds */}
          <View
            style={{ width: windowWidth, marginBottom: 100, marginTop: 10 }}
          >
            <FlatList
              data={DUMMYMEDS}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={(item) => {
                return (
                  <View style={{ width: "50%" }}>
                    <MedsCard data={item.item} />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          borderTopEndRadius: 36,
          borderTopLeftRadius: 36,
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          height: 66,
        }}
      >
        <BottomNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    gap: 20,
  },
  topButtons: {
    borderRadius: 50,
    backgroundColor: "#155e95",
    padding: 10,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fdf3d4",
    borderRadius: 24,
    marginHorizontal: 20,
    gap: 10,
    minwidth: 100,
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  searchInput: {
    width: windowWidth - 140,
  },
  buttonCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 10,
  },
});
