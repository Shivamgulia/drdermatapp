import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import BottomNav from "../components/UI/BottomNav";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Ionicons";
import CategoryCard from "../components/Products/CategoryCard";

import { Dimensions } from "react-native";
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

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);
  function onChangeCategory(category) {
    setSelectedCategory(category);
  }
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#155e95",
              color: "white",
              paddingHorizontal: 40,
              paddingVertical: 8,
              borderRadius: 40,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Products
          </Text>
        </View>

        {/* search input */}
        <View style={styles.inputView}>
          <Text
          // style={{ position: "relative", top: 32, left: 40, zIndex: 2 }}
          >
            <Icon2 name="search" size={20} color="black" />
          </Text>
          <TextInput
            placeholder={windowWidth > 400 ? "Search Products" : "Search"}
            style={[styles.searchInput]}
            onChangeText={setSearchValue}
            value={searchValue}
          />
        </View>

        {/* categories */}
        <View
          style={{
            width: "100%",
            paddingLeft: "3%",
            paddingRight: "1%",
            flexDirection: "row",
          }}
        >
          {CATEGORIES.map((item) => {
            return (
              <CategoryCard
                item={item}
                active={item.id == selectedCategory}
                onChangeCategory={onChangeCategory}
              />
            );
          })}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
              borderWidth: 0.5,
            }}
          >
            Add / Edit Product
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 10,
              justifyContent: "space-between",
              paddingHorizontal: 20,
              height: 30,
              marginTop: 20,
            }}
          >
            <Text style={{ alignSelf: "center" }}>Actual Price</Text>
            <TextInput
              value={categoryName}
              onChangeText={setCategoryName}
              style={[styles.input]}
            />
          </View>

          {/* image */}
          <View style={{ alignItems: "center", marginTop: 30, gap: 10 }}>
            <Text>Add Image</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#b9baba",
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Icon name="plus" size={50} />
            </View>
          </View>

          {/* submit */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#155e95",
                paddingHorizontal: 40,
                paddingVertical: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
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
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.3,
    color: "#d1d1d1",
    width: "60%",
    borderRadius: 10,
    paddingHorizontal: 5,
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
    marginVertical: 20,
  },
  searchInput: {
    width: windowWidth - 140,
  },
});
