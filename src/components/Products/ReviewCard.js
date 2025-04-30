import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const starsArray = [1, 2, 3, 4, 5];

export default function ReviewCard({ review }) {
  console.log(review);

  return (
    <View
      style={{
        paddingHorizontal: 15,
        marginVertical: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: "grey",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#155e95",
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              {getInitials(review.user)}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{review.head}</Text>
            <View>
              <Text>
                {starsArray.map((item, index) => {
                  return (
                    <Icon
                      name={review.star > index ? "star" : "star-outline"}
                      size={13}
                      color="#125e94"
                      key={index}
                    />
                  );
                })}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ color: "#828282", fontSize: 13 }}>{review.date}</Text>
      </View>
      <Text style={{ color: "#828282", fontSize: 13 }}>{review.review}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

function getInitials(name) {
  const words = name.trim().split(/\s+/); // splits on one or more spaces
  let initials = words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials;
}
