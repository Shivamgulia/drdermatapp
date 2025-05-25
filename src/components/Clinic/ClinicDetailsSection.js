import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const starsArray = [1, 2, 3, 4, 5];

export default function ClinicDetailsSection() {
  const [rating, setRating] = useState(0);
  function selectStar(index) {
    console.log(index);
    setRating(index);
  }
  return (
    <View style={{ gap: 20, paddingHorizontal: 13, marginTop: 20 }}>
      <View style={{}}>
        <Text style={{ fontSize: 20 }}>Start a Review</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  selectStar(index);
                }}
              >
                <Icon
                  name="star"
                  size={20}
                  color={rating >= index ? "gold" : "grey"}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec est
          vel nisi tincidunt maximus quis sit amet arcu. Phasellus fringilla
          diam et dui hendrerit blandit. Phasellus euismod, purus vel
          condimentum facilisis, erat lacus auctor arcu, ac egestas magna tellus
          dignissim augue. Sed egestas massa nec arcuscelerisque, ac elementum
          dolor varius. Donec tempor mi nec lacus hendrerit semper eget quis
          felis. Pellentesque quis dui placerat, sagittis libero vitae, Aenean
          pellentesque efficitur enim,
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
