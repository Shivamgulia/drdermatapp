import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import BottomNav from "../components/UI/BottomNav";
import { Dimensions } from "react-native";
import ProductReviewSection from "../components/Products/ProductReviewSection";
import MedsCard from "../components/Products/MedsCard";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
];

export default function Product() {
  const [search, setSearch] = useState("");
  const [showSection, setShowSection] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: width,
          backgroundColor: "#155e95",
          paddingTop: 50,
          paddingBottom: 20,
        }}
      >
        <View style={styles.inputView}>
          <Text>
            <Icon name="search" size={20} color="black" />
          </Text>
          <TextInput
            placeholder={
              width > 400 ? "Search Clinics, Tests, Products" : "Search"
            }
            style={[styles.searchInput]}
            onChangeText={setSearch}
            value={search}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            width: width,
            alignItems: "center",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: "grey",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              paddingLeft: 25,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text
              style={{ color: "#515c6f", fontSize: 25, fontWeight: "bold" }}
            >
              Product Name
            </Text>
            <Text style={{ color: "#505c70", fontSize: 15 }}>Description</Text>
          </View>
          <View
            style={{
              width,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#6ba0c3",
                paddingHorizontal: 10,
                paddingVertical: 4,
                justifyContent: "center",
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: "white",
                  justifyContent: "center",
                }}
              >
                <Icon name="star" size={13} color="white" /> 4.9
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#727c8f",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 12,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                <Icon name="share-social-sharp" size={13} color="white" />
              </Text>
            </View>
          </View>
          <Image
            source={require("../../assets/products.png")}
            style={{ width: width / 2, height: width / 2 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-end",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rs. 24.6</Text>
          <Text
            style={{
              color: "#a3a4ac",
              fontSize: 15,
              textDecorationLine: "line-through",
            }}
          >
            Rs. 33.76
          </Text>
          <Text style={{ color: "#405c4a", fontWeight: "500" }}>27% off</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width,
            justifyContent: "space-between",
            paddingHorizontal: 30,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "grey",
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 30,
              }}
            >
              <Text>1</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "grey",
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#155e94",
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 5,
                paddingVertical: 5,
                borderRadius: 20,
                gap: 5,
              }}
            >
              <Text style={{ color: "white" }}>Add To Cart</Text>
              <View
                style={{
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderRadius: 10,
                  paddingHorizontal: 3,
                }}
              >
                <Icon name="chevron-forward" size={13} color="#155e94" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width,
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setShowSection(0);
            }}
          >
            <Text
              style={{
                color: showSection == 0 ? "#125e94" : "#727c8f",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Result
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowSection(1);
            }}
          >
            <Text
              style={{
                color: showSection == 1 ? "#125e94" : "#727c8f",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowSection(2);
            }}
          >
            <Text
              style={{
                color: showSection == 2 ? "#125e94" : "#727c8f",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Reviews
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {showSection == 0 && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/productresult.png")}
                style={{
                  width: width - 10,
                  resizeMode: "stretch",
                  height: 1000,
                }}
              />
            </View>
          )}
          {showSection == 1 && <Text>Details</Text>}
          {showSection == 2 && <ProductReviewSection />}
        </View>

        {/* recommended products */}
        <View style={{ paddingTop: 20, marginBottom: 250 }}>
          <Text style={{ paddingLeft: 20, fontWeight: "bold", fontSize: 15 }}>
            You might also like
          </Text>

          <FlatList
            data={DUMMYMEDS}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={(item) => {
              return <MedsCard data={item.item} />;
            }}
          />
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
  searchInput: {
    width: width - 140,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fdf3d4",
    borderRadius: 24,
    marginHorizontal: 50,
    gap: 10,
    minwidth: 100,
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
});
