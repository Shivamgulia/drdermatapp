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
    desc: "Comedonal, blackheads or pus-filled pimples",
  },
  {
    id: 2,
    head: "Dark Spots/ Marks",
    desc: "Flat spots, melanin buildup due to acne, sun exposure or hormonal changes",
  },
  {
    id: 3,
    head: "Acne Scars",
    desc: "Pits or marks remaning after server or prolonged acne",
  },
  {
    id: 4,
    head: "Pigmentation",
    desc: "Irregular dark Patches on the skin",
  },
  {
    id: 5,
    head: "Dull Skin",
    desc: "Skin that lacks lusture, is flat, or even grey",
  },
];

export default function AdditionalConcern() {
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
            Do You Have Any Other Concerns?
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
                justifyContent: "center",
              }}
            >
              {FIELDS.map((item, index) => {
                return (
                  <View key={item.id}>
                    <TouchableOpacity
                      key={item.id}
                      style={{
                        flexDirection: "row",
                        gap: 15,
                        alignItems: "center",
                      }}
                      onPress={() => {
                        const temp = selectStates;
                        temp[item.id - 1] = !temp[item.id - 1];
                        console.log(selectStates);

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
                      <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          {item.head}
                        </Text>
                        <Text style={{ fontSize: 13, color: "#a2a3a2" }}>
                          {item.desc}
                        </Text>
                      </View>
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
              <TouchableOpacity
                style={{
                  backgroundColor: "#155e95",
                  paddingVertical: 10,
                  paddingHorizontal: 50,
                  borderRadius: 30,
                }}
                onPress={() => {
                  navigation.navigate("ImpConcern");
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Next
                </Text>
              </TouchableOpacity>
              <Pressable onPress={() => {}}>
                <Text style={{ color: "#b0b1b1", fontWeight: "bold" }}>
                  I Don't Have a Concern
                </Text>
              </Pressable>
            </View>
            <View style={{ height: 200 }}></View>
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
