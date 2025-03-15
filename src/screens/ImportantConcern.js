import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/UI/BottomNav";

const FIELDS = [
  {
    id: 1,
    head: "Acne / Pimples",
  },
  {
    id: 2,
    head: "Dark Spots/ Marks",
  },
  {
    id: 3,
    head: "Freckles",
  },
  {
    id: 4,
    head: "Pigmentation",
  },
  {
    id: 5,
    head: "Melasma",
  },
  {
    id: 6,
    head: "Dry Skin",
  },
  {
    id: 7,
    head: "Oily Skin",
  },
  {
    id: 8,
    head: "Under Eye Dark Circles",
  },
  {
    id: 9,
    head: "Wrinkles",
  },
  {
    id: 10,
    head: "Fine Lines",
  },
];

export default function ImportantConcern() {
  const [selectStates, setSelectStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(selectStates);

  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#155e95" }}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            marginBottom: 20,
            paddingLeft: 30,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
            Choose Your most Important Concern
          </Text>
        </View>
        <View
          style={{
            flex: 6,
            backgroundColor: "white",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <ScrollView>
            <View
              style={{
                paddingTop: 50,
                paddingLeft: 25,
                gap: 20,
                justifyContent: "flex-start",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {FIELDS.map((item, index) => {
                return (
                  <View key={item.id}>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        gap: 15,
                        borderWidth: 1,
                        paddingVertical: 8,
                        borderRadius: 20,
                        paddingRight: 20,
                        paddingLeft: 12,
                      }}
                      onPress={() => {
                        const temp = selectStates;
                        temp[item.id - 1] = !temp[item.id - 1];

                        setSelectStates(temp);
                      }}
                    >
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#a2a3a2",
                          backgroundColor: selectStates[index]
                            ? "black"
                            : "white",
                        }}
                      ></View>
                      <Text style={{ fontSize: 15 }}>{item.head}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 80,
                gap: 30,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#155e95",
                  paddingVertical: 10,
                  paddingHorizontal: 50,
                  borderRadius: 30,
                }}
                onPress={() => {
                  navigation.navigate("Concern");
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Next
                </Text>
              </Pressable>
              <Pressable onPress={() => {}}>
                <Text style={{ color: "#b0b1b1", fontWeight: "bold" }}>
                  I Don't Have a Concern
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
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

const styles = StyleSheet.create({});
