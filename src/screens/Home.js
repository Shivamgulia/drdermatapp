import React from "react";
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

const Home = () => {
  const { width } = useWindowDimensions();

  const carosalList = [
    {
      id: "1",
      name: "one",
      icon: require("../../assets/home/head1.png"),
    },
    {
      id: "2",
      name: "two",
      icon: require("../../assets/home/head2.png"),
    },
    {
      id: "3",
      name: "three",
      icon: require("../../assets/home/head3.png"),
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
      <ScrollView>
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
                <Icon name="location-sharp" size={20} color="#accef7" />
              </View>
              <Text style={{ color: "white" }}>Address</Text>
            </Pressable>
            <Pressable>
              <View style={styles.topButtons}>
                <Icon name="cart-outline" size={20} color="#accef7" />
              </View>
            </Pressable>
          </View>
          <TextInput
            placeholder="Search Clinics, Tests, Products"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.posterCont}>
          <FlatList
            horizontal
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
        <Text style={styles.sectionTitle}>Find Top Derma Clinic</Text>

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

        {/* Find Best Treatment Plans */}
        <Text style={styles.sectionTitle}>Find Best Treatment Plans</Text>
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

        {/* Popular Product Categories */}
        <Text style={styles.sectionTitle}>Popular Product Categories</Text>
        <FlatList
          numColumns={4}
          // horizontal
          data={productCategories}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <View style={styles.catProductItem}>
              <Image source={item.icon} style={styles.catProductIcon} />
              <Text style={styles.catProductText}>{item.name}</Text>
            </View>
          )}
        />

        {/* Offers Section */}
        <Text style={styles.sectionTitle}>Offers</Text>
        <FlatList
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
        />

        {/* Treatment Videos Reel */}
        <Text style={styles.sectionTitle}>Treatment Videos Reel</Text>
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

        {/*Homey Stories */}
        <Text style={styles.sectionTitle}>10 Lakh+ Happy Stories</Text>
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
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            You can look better with a small step right here!
          </Text>
        </View>
        <Image source={backbottom} style={styles.bottomimg} />
      </ScrollView>
      <View>
        <BottomNav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
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
    justifyContent: "space-evenly",
    // margin: 10,
  },
  topButtons: {
    borderRadius: 50,
    backgroundColor: "#155e95",
    padding: 10,
  },
  searchInput: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12,
  },
  posterCont: {
    position: "relative",
    top: -50,
  },
  caresol: {
    gap: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    borderBottomWidth: 1,
    borderRadius: 50,
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
  footerText: {
    fontSize: 40,
    color: "#155e95",
    fontWeight: "bold",
  },
  bottomimg: {
    height: 200,
  },
});

export default Home;
