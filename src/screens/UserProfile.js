import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";

import BottomNav from "../components/UI/BottomNav";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Dimensions } from "react-native";
import { AuthContext } from "../store/authContext";
import Icon1 from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;

const OPTIONS1 = [
  {
    id: 1,
    text: "My Orders",
    icon: "home",
  },
  {
    id: 2,
    text: "My Lab Test",
    icon: "calendar-check",
  },
  {
    id: 3,
    text: "Test Booking",
    icon: "pen",
  },
  {
    id: 4,
    text: "Orders",
    icon: "sort-alpha-down",
  },
  {
    id: 5,
    text: "My Consultation",
    icon: "handshake",
  },
  {
    id: 6,
    text: "Medical Redcords",
    icon: "file-medical",
  },
  {
    id: 7,
    text: "Manage Payment Methods",
    icon: "dollar-sign",
  },
];
const OPTIONS2 = [
  {
    id: 8,
    text: "Read About Health",
    icon: "info",
  },
  {
    id: 9,
    text: "Help Center",
    icon: "hands-helping",
  },
  {
    id: 10,
    text: "Settings",
    icon: "users-cog",
  },
  {
    id: 11,
    text: "Like Us? Give us 5 Stars",
    icon: "star",
  },
];

export default function UserProfile() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 20,
          top: 60,
          backgroundColor: "#155e95",
          borderRadius: "50%",
          padding: 5,
          zIndex: 2,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        {navigation.canGoBack() && (
          <Icon1 name="arrow-back" size={20} color="white" />
        )}
      </TouchableOpacity>
      <View style={{ backgroundColor: "#155e95", flex: 1 }}>
        <View style={{ flex: 7, backgroundColor: "white" }}>
          <View
            style={{
              alignSelf: "flex-end",
              marginTop: 50,
              marginRight: 30,
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "grey",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>X</Text>
          </View>
          {/* profile View */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View>
              <Image
                source={require("../../assets/profile.png")}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "flex-start" }}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "#515b70" }}
              >
                Jane Doe
              </Text>
              <Text style={{ color: "#515c70" }}>Janedoe123@gmail.com</Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#515c70",
                  borderRadius: 30,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: "#515c70",
                    paddingHorizontal: 20,
                    paddingVertical: 2,
                    fontSize: 12,
                  }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                paddingRight: 40,
                paddingTop: 30,
              }}
            >
              <FlatList
                data={OPTIONS1}
                keyExtractor={(item) => item.id}
                renderItem={(item) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 10,
                        paddingVertical: 5,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "right",
                          color: "#505c6f",
                          fontSize: 20,
                        }}
                      >
                        {item.item.text}
                      </Text>
                      <View
                        style={{
                          width: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name={item.item.icon} size={20} color="black" />
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />

              {/* line */}

              <View
                style={{
                  width: windowWidth,
                  backgroundColor: "#ececec",
                  height: 10,
                  position: "relative",
                  left: 40,
                  marginVertical: 10,
                }}
              ></View>

              <FlatList
                data={OPTIONS2}
                keyExtractor={(item) => item.id}
                renderItem={(item) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 10,
                        paddingVertical: 5,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "right",
                          color: "#505c6f",
                          fontSize: 20,
                        }}
                      >
                        {item.item.text}
                      </Text>
                      <View
                        style={{
                          width: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Icon name={item.item.icon} size={20} color="black" />
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
              }}
            >
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
                onPress={() => {
                  authCtx.logout();
                }}
              >
                <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
                  Logout
                </Text>
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
            <View style={{ height: 100 }}></View>
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}></View>
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
        <BottomNav
          doctor={authCtx.role == "doctor"}
          clinic={authCtx.role == "clinic"}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
