import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import BottomNav from "../components/UI/BottomNav";

import Icon from "react-native-vector-icons/Entypo";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function AddClinic() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [link, setLink] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [desc, setDesc] = useState("");

  console.log(name, link, address, contactNumber, whatsappNumber);

  return (
    <>
      <ScrollView style={{ flex: 1, paddingTop: 70 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              backgroundColor: "#125e94",
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 18,
              color: "white",
              fontSize: 20,
            }}
          >
            Add / Edit Clinic
          </Text>
        </View>
        <View style={{ paddingTop: 30, width: windowWidth, gap: 10 }}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Clinic Names</Text>
            <TextInput
              onChangeText={setName}
              value={name}
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Clinic Address</Text>

            <TextInput
              onChangeText={setAddress}
              value={address}
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Google Maps Link</Text>
            <TextInput
              onChangeText={setLink}
              value={link}
              style={styles.input}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              onChangeText={setContactNumber}
              value={contactNumber}
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Whatsapp Number</Text>
            <TextInput
              onChangeText={setWhatsappNumber}
              value={whatsappNumber}
              style={styles.input}
            />
          </View>
        </View>
        <View style={{}}>
          <Text style={{ paddingTop: 20, paddingLeft: 20 }}>
            Clinic Description
          </Text>
          <TextInput
            onChangeText={setDesc}
            value={desc}
            style={{
              width: windowWidth - 40,
              borderWidth: 1,
              marginTop: 20,
              borderColor: "#c2c2c2",
              marginLeft: 20,
              height: 140,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 20, gap: 10 }}>
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 200,
          }}
        >
          <Text
            style={{
              backgroundColor: "#125e94",
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 18,
              color: "white",
              fontSize: 20,
            }}
          >
            Get Verified
          </Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: { width: (windowWidth - 40) / 3 },
  input: {
    borderWidth: 1,
    borderColor: "#c2c2c2",
    width: ((windowWidth - 40) / 3) * 2,
    borderRadius: 20,
    paddingLeft: 20,
  },
});
