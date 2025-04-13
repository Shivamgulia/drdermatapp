import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import ProductCard from "../components/Products/ProductCard";
import MedsCard from "../components/Products/MedsCard";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DUMMYCART = [
  {
    id: 1,
    name: "Product 1",
    subname: "Hair",
    cost: 49.99,
    quatity: 1,
    image: require("../../assets/products.png"),
  },
  {
    id: 2,
    name: "Product 1",
    subname: "Hair",
    cost: 49.99,
    quatity: 2,
    image: require("../../assets/products.png"),
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
];

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [cartDiscount, setCartDiscount] = useState(0.0);
  const [convFee, setConvFee] = useState(0.0);
  const navigation = useNavigation();

  function calculateTotalPrice() {
    let total = 0.0;
    DUMMYCART.map((item) => {
      total = item.cost * item.quatity;
      console.log(total);
    });

    setTotalPrice(total);
    setCartDiscount(Math.round(total * 3) / 100);
    setConvFee(Math.round(total * 6) / 100);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, []);
  return (
    <>
      <ScrollView style={{ minHeight: 1000 }}>
        <View
          style={{
            paddingTop: 50,
            flexDirection: "column",
            gap: 10,
            backgroundColor: "white",
            minHeight: windowHeight + 100,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#515c70",
                paddingLeft: 40,
              }}
            >
              Your Cart
            </Text>
          </View>
          <View
            style={{
              width: windowWidth,
              backgroundColor: "#155e94",
              paddingVertical: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>
              You are saving X amount on this purchase
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 8,
              backgroundColor: "white",
              borderRadius: 22,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            }}
          >
            <FlatList
              data={DUMMYCART}
              keyExtractor={(item) => item.id}
              renderItem={(item) => {
                return <ProductCard data={item.item} />;
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text>Missed Something? </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "black",
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                  borderRadius: 13,
                }}
              >
                <Text style={{ color: "white" }}>+ Add More Items</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: windowWidth - 50,
              marginHorizontal: 25,
              backgroundColor: "#155e94",
              paddingVertical: 10,
              justifyContent: "space-between",
              paddingHorizontal: 30,
              alignItems: "center",
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              <Icon name="tag" size={15} color="white" />
              {"  "}Have Coupon?
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderWidth: 1,
                borderColor: "white",
                paddingVertical: 4,
                paddingHorizontal: 16,
                borderRadius: 16,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>Apply Now</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              width: windowWidth - 50,
              paddingHorizontal: 25,
              gap: 20,
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderRadius: 50,
                width: windowWidth - 50,
                paddingHorizontal: 25,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  paddingBottom: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Order Summary
                </Text>
                <Text>{"(" + DUMMYCART.length + " items)"}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <Text>Total MRP</Text>
                  <Text>Cart Discount</Text>
                  <Text>Convenience Fee</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <Text style={{ textAlign: "right" }}>${totalPrice}</Text>
                  <Text style={{ textAlign: "right" }}>${cartDiscount}</Text>
                  <Text style={{ textAlign: "right" }}>${convFee}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                width: windowWidth - 50,
                paddingHorizontal: 25,
              }}
            >
              <View style={{ marginBottom: 20 }}>
                <Text style={{ color: "#a8adb7", fontSize: 8 }}>Total</Text>
                <Text style={{ color: "#505c6f", fontWeight: "bold" }}>
                  ${totalPrice - cartDiscount + convFee}
                </Text>
                <Text style={{ color: "#727c8e", fontSize: 10 }}>
                  Free Domestic Shipping
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 10,
                  backgroundColor: "#155e95",
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  paddingLeft: 20,
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "white" }}>Checkout</Text>
                <Text
                  style={{
                    color: "#155e95",
                    backgroundColor: "white",
                    padding: 10,
                    paddingVertical: 2,
                    borderRadius: 100,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {">"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingTop: 20, marginBottom: 400 }}>
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
        </View>
      </ScrollView>
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          width: windowWidth,
          backgroundColor: "white",
          paddingVertical: 10,
          paddingHorizontal: 40,
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Icon name="home" size={15} color="blue" />
          <Text>Delivering to your Address</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 10,
            backgroundColor: "#155e95",
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            width: windowWidth - 80,
          }}
          onPress={() => {
            navigation.navigate("Thankyou");
          }}
        >
          <Text style={{ color: "white" }}>Click To Pay</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
