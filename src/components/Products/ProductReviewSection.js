import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Dimensions } from "react-native";
import ReviewCard from "./ReviewCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const REVIEWS = [
  {
    id: 1,
    user: "Aasdfa asmdfa",
    review:
      "very nice product adjfna tkjsnbjaf andfkanf akjndfhjdasfalkm askfnaskjnf",
    head: "Too Good",
    star: 3,
    date: "10/12/24",
  },
  {
    id: 2,
    user: "Aasdfa asmdfa",
    review:
      "very nice product adjfna tkjsnbjaf andfkanf akjndfhjdasfalkm askfnaskjnf",
    head: "Too Good",
    star: 4,
    date: "10/12/24",
  },
];

export default function ProductReviewSection() {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Rating & Review
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: "#155e94",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#155e94" }}>Write a Review</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 10,
          alignItems: "flex-end",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            borderRightWidth: 1,
            borderColor: "grey",
            paddingHorizontal: 5,
          }}
        >
          4.9 <Icon name="star" size={13} color="#125e94" />
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 10, color: "#595a5a" }}>
          Based on 390 Reviews
        </Text>
      </View>
      {/* reviews count */}
      <View></View>

      <View style={{ marginTop: 10 }}>
        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
          Most Relevent Reviews
        </Text>
        {REVIEWS.map((item, index) => {
          return (
            <Fragment key={index}>
              <ReviewCard review={item} />
            </Fragment>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
