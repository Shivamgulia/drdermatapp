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

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
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
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            Add / Edit Product
          </Text>
        </View>

        {/* form */}
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
            }}
          >
            <Text style={{ alignSelf: "center" }}>Product Name</Text>
            <TextInput
              value={productName}
              onChangeText={setProductName}
              style={[styles.input]}
            />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ alignSelf: "flex-start", marginTop: 20 }}>
              Product Description
            </Text>
            <TextInput
              value={productDescription}
              onChangeText={setProductDescription}
              multiline
              style={[
                styles.input,
                {
                  width: "100%",
                  marginTop: 10,
                  height: 100,
                },
              ]}
            />
          </View>

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
              value={actualPrice}
              onChangeText={setActualPrice}
              style={[styles.input]}
            />
          </View>

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
            <Text style={{ alignSelf: "center" }}>Discounted Price</Text>
            <TextInput
              value={discountedPrice}
              onChangeText={setDiscountedPrice}
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
});
