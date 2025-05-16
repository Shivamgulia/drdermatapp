import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CaresolItem from "../components/UI/CaresolItem";
import Icon from "react-native-vector-icons/Ionicons";

import topBack from "../../assets/home/topback.jpeg";
import offerImg from "../../assets/home/offer.png";
import backbottom from "../../assets/home/backbottom.jpeg";
import BottomNav from "../components/UI/BottomNav";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  const { width } = useWindowDimensions();

  const [searchValue, setSearchValue] = useState();

  const navigation = useNavigation();

  const carosalList = [
    {
      id: "1",
      name: "one",
      icon: require("../../assets/home/head1.png"),
      redirect: false,
      redirectTo: "Concern",
    },
    {
      id: "2",
      name: "two",
      icon: require("../../assets/home/head2.png"),
      redirect: false,
      redirectTo: "Concern",
    },
    {
      id: "3",
      name: "three",
      icon: require("../../assets/home/head3.png"),
      redirect: true,
      redirectTo: "Concern",
    },
  ];

  const clinicCategories = [
    {
      id: "1",
      name: "General Physician",
      icon: require("../../assets/home/cont1.png"),
    },
    {
      id: "2",
      name: "Skin & Hair",
      icon: require("../../assets/home/cont2.png"),
    },
    {
      id: "3",
      name: "Women's Health",
      icon: require("../../assets/home/cont3.png"),
    },
    {
      id: "4",
      name: "Child Specialist",
      icon: require("../../assets/home/cont4.png"),
    },
    {
      id: "5",
      name: "Ear, Nose, Throat",
      icon: require("../../assets/home/cont5.png"),
    },
    {
      id: "6",
      name: "Mental Wellness",
      icon: require("../../assets/home/cont6.png"),
    },
    {
      id: "7",
      name: "Dental Care",
      icon: require("../../assets/home/cont7.png"),
    },
    {
      id: "8",
      name: "More",
      icon: require("../../assets/home/cont8.png"),
    },
    {
      id: "9",
      name: "More",
      icon: require("../../assets/home/cont8.png"),
    },
  ];

  const productCategories = [
    {
      id: "1",
      name: "Category 1",
      icon: require("../../assets/home/cat1.png"),
    },
    {
      id: "2",
      name: "Category 2",
      icon: require("../../assets/home/cat2.png"),
    },
    {
      id: "3",
      name: "Category 3",
      icon: require("../../assets/home/cat3.png"),
    },
    {
      id: "4",
      name: "Category 4",
      icon: require("../../assets/home/cat4.png"),
    },
    {
      id: "5",
      name: "Category 5",
      icon: require("../../assets/home/cat5.png"),
    },
    {
      id: "6",
      name: "Category 6",
      icon: require("../../assets/home/cat6.png"),
    },
    {
      id: "7",
      name: "Category 7",
      icon: require("../../assets/home/cat7.png"),
    },
    {
      id: "8",
      name: "Category 8",
      icon: require("../../assets/home/cat8.png"),
    },
    {
      id: "9",
      name: "Category 9",
      icon: require("../../assets/home/cat5.png"),
    },
    {
      id: "10",
      name: "Category 10",
      icon: require("../../assets/home/cat6.png"),
    },
    {
      id: "11",
      name: "Category 11",
      icon: require("../../assets/home/cat7.png"),
    },
    {
      id: "12",
      name: "Category 12",
      icon: require("../../assets/home/cat8.png"),
    },
  ];

  const offers = [
    { id: "1", text: "Offer 1", color: "#ec0d0b" },
    { id: "2", text: "Offer 2", color: "#00caca" },
    { id: "3", text: "Offer 3", color: "#6ba2e4" },
    { id: "4", text: "Offer 4", color: "#c1ca00" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Search Bar */}
        <Image source={topBack} style={[styles.topBack, { width }]} />
        <View style={styles.searchSection}>
          <View style={styles.buttonCont}>
            <Pressable
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.topButtons}>
                <Icon name="location-sharp" size={20} color="white" />
              </View>
              <Text style={{ color: "white" }}>Area and City</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <View style={styles.topButtons}>
                <Icon name="cart-outline" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <Text
            // style={{ position: "relative", top: 32, left: 40, zIndex: 2 }}
            >
              <Icon name="search" size={20} color="black" />
            </Text>
            <TextInput
              placeholder={
                width > 400 ? "Search Clinics, Tests, Products" : "Search"
              }
              style={[styles.searchInput]}
              onChangeText={setSearchValue}
              value={searchValue}
            />
          </View>
        </View>
        <View style={styles.posterCont}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={carosalList}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <View style={styles.caresol}>
                <CaresolItem item={item} />
              </View>
            )}
          />
        </View>

        {/* Find Top Derma Clinic Section */}
        {/* <Text style={styles.sectionTitle}>Find Top Derma Clinic</Text> */}
        <Image
          source={require("../../assets/home/heading1.png")}
          style={{ width: "100%", height: 30, marginVertical: 20 }}
        />
        <View
          style={{
            justifyContent: "center",
            marginLeft: "auto",
            height: "13%",
          }}
        >
          <FlatList
            // horizontal
            data={clinicCategories}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ClinicList");
                }}
                style={styles.clinicItem}
              >
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text style={styles.clinicText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Find Best Treatment Plans */}
        {/* <Text style={styles.sectionTitle}>Find Best Treatment Plans</Text> */}
        <Image
          source={require("../../assets/home/heading2.png")}
          style={{ width: "100%", height: 30, marginVertical: 20 }}
        />
        <View
          style={{
            justifyContent: "center",
            marginLeft: "auto",
            height: "13%",
          }}
        >
          <FlatList
            // horizontal
            data={clinicCategories}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={styles.clinicItem}>
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text style={styles.clinicText}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        {/* Popular Product Categories */}
        {/* <Text style={styles.sectionTitle}>Popular Product Categories</Text> */}
        <Image
          source={require("../../assets/home/heading3.png")}
          style={{ width: "100%", height: 30, marginVertical: 20 }}
        />
        <View style={styles.videoSection}>
          <FlatList
            numColumns={4}
            // horizontal
            data={productCategories}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductList");
                }}
                style={styles.catProductItem}
              >
                <Image source={item.icon} style={styles.catProductIcon} />
                <Text style={styles.catProductText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Offers Section */}
        {/* <Text style={styles.sectionTitle}>Offers</Text> */}

        <Image
          source={require("../../assets/home/offers.png")}
          style={{ width: "100%", height: 200 }}
        />
        {/* <FlatList
          data={offers}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled={true}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.offerItem, { backgroundColor: item.color }]}
            >
              <Text style={styles.offerText}>{item.text}</Text>
              <Image source={offerImg} style={styles.offerImage} />
            </TouchableOpacity>
          )}
        /> */}

        {/* Treatment Videos Reel */}
        {/* <Text style={styles.sectionTitle}>Treatment Videos Reel</Text> */}
        <Image
          source={require("../../assets/home/heading4.png")}
          style={{ width: "100%", height: 40, marginVertical: 20 }}
        />
        <View style={styles.videoSection}>
          <FlatList
            horizontal
            data={[
              { id: "1", image: require("../../assets/home/treat1.png") },
              { id: "2", image: require("../../assets/home/treat2.png") },
              { id: "3", image: require("../../assets/home/treat1.png") },
              { id: "4", image: require("../../assets/home/treat2.png") },
            ]}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.videoItems}>
                <Image
                  // source={require("../../assets/video_sample.png")}
                  source={item.image}
                  style={[
                    styles.videoThumbnail,
                    {
                      // boxShadow: "0px -8px 20px rgba(0, 0, 0, 0.2)",
                      // zIndex: 2000000,
                    },
                  ]}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/*Homey Stories */}
        {/* <Text style={styles.sectionTitle}>10 Lakh+ Happy Stories</Text> */}
        <Image
          source={require("../../assets/home/heading6.png")}
          style={{ width: "100%", height: 40, marginVertical: 20 }}
        />

        <View style={styles.videoSection}>
          <FlatList
            horizontal
            data={[
              { id: "1", image: require("../../assets/home/treat1.png") },
              { id: "2", image: require("../../assets/home/treat2.png") },
              { id: "3", image: require("../../assets/home/treat1.png") },
              { id: "4", image: require("../../assets/home/treat2.png") },
            ]}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.videoItems}>
                <Image
                  // source={require("../../assets/video_sample.png")}
                  source={item.image}
                  style={styles.videoThumbnail}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Footer Section */}
        <View style={styles.footerSectionImage}>
          {/* <Text style={styles.footerText}>
            You can look better with a small step right here!
          </Text> */}
          <Image
            source={require("../../assets/home/bottomfoter.png")}
            style={{ width: width, height: width }}
          />
        </View>
        {/* <Image source={backbottom} style={styles.bottomimg} /> */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f9f9f9",
    backgroundColor: "#ffffff",
  },
  scrollView: {
    justifyContent: "center",
  },
  buttonCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 10,
  },
  topBack: {
    position: "absolute",
    top: 0,
    height: 250,
  },
  searchSection: {
    padding: 16,
    borderRadius: 8,
    height: 250,
    gap: 20,
    // justifyContent: "space-between",
    // paddingBottom: 70,
    // margin: 10,
  },
  topButtons: {
    borderRadius: 50,
    backgroundColor: "#155e95",
    padding: 10,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fdf3d4",
    borderRadius: 24,
    marginHorizontal: 20,
    gap: 10,
    minwidth: 100,
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  searchInput: {
    width: windowWidth - 140,
  },
  posterCont: {
    position: "relative",
    top: -50,
    // paddingHorizontal: 30,
  },
  caresol: {
    marginRight: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    // borderBottomWidth: 1,
    borderRadius: 1000,
    // width: "50%",
    paddingBottom: 5,

    // textDecorationLine: "underline",
  },
  clinicItem: {
    // alignItems: "center",
    width: "30%",
    alignItems: "center",
    backgroundColor: "#d8eafa",
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  clinicText: {
    marginTop: 8,
  },
  productItem: {
    width: "30%",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 5,
  },
  productIcon: {
    width: 50,
    height: 50,
  },
  productText: {
    marginTop: 8,
  },
  catProductItem: {
    width: "22%",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 5,
  },
  catProductIcon: {
    width: 50,
    height: 50,
  },
  catProductText: {
    marginTop: 8,
  },
  offerItem: {
    backgroundColor: "#ffeb3b",
    padding: 12,
    borderRadius: 8,
    margin: 8,
    justifyContent: "space-evenly",
    width: "46%",
    flexDirection: "row",
    alignItems: "center",
  },
  offerText: {
    fontWeight: "bold",
    color: "white",
  },
  offerImage: {
    height: 50,
    width: 50,
  },
  videoSection: {
    alignItems: "center",

    marginVertical: 16,
    gap: 100,
  },
  videoItems: {
    width: 200,
    height: 300,

    marginHorizontal: 10,
  },
  videoThumbnail: {
    width: 200,
    height: 300,
    aspectRatio: "auto",
    borderRadius: 10,
  },
  footerSection: {
    padding: 16,
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    height: 200,
    zIndex: 2,
  },
  footerSectionImage: {
    paddingVertical: 16,
    paddingHorizontal: 0,
    alignItems: "center",
    bottom: 0,
    // position: "absolute",
    height: 500,

    zIndex: 2,
    marginBottom: 100,
  },
  footerText: {
    fontSize: 40,
    color: "#155e95",
    fontWeight: "bold",
  },
  bottomimg: {
    height: 400,
  },
});

export default Home;
