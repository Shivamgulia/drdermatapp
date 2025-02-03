import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Home = () => {
//   const clinicCategories = [
//     {
//       id: "1",
//       name: "General Physician",
//       // icon: require("../../assets/general.png"),
//       icon: require("../../assets/asset1.png"),
//     },
//     {
//       id: "2",
//       name: "Skin & Hair",
//       // icon: require("../../assets/skin_hair.png"),
//       icon: require("../../assets/asset1.png"),
//     },
//     {
//       id: "3",
//       name: "Women's Health",
//       // icon: require("../..//assets/women_health.png"),
//       icon: require("../..//assets/asset1.png"),
//     },
//     {
//       id: "4",
//       name: "Dental Care",
//       // icon: require("../../assets/dental_care.png"),
//       icon: require("../../assets/asset1.png"),
//     },
//   ];

//   const productCategories = Array.from({ length: 6 }, (_, index) => ({
//     id: index.toString(),
//     name: `Category ${index + 1}`,
//     icon: require("./assets/product.png"),
//   }));

//   const offers = [
//     { id: "1", text: "Offer 1" },
//     { id: "2", text: "Offer 2" },
//     { id: "3", text: "Offer 3" },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Search Bar */}
//         <View style={styles.searchSection}>
//           <TextInput
//             placeholder="Search Clinics, Tests, Products"
//             style={styles.searchInput}
//           />
//         </View>

//         {/* Find Top Derma Clinic Section */}
//         <Text style={styles.sectionTitle}>Find Top Derma Clinic</Text>
//         <FlatList
//           horizontal
//           data={clinicCategories}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.clinicItem}>
//               <Image source={item.icon} style={styles.categoryIcon} />
//               <Text style={styles.clinicText}>{item.name}</Text>
//             </View>
//           )}
//         />

//         {/* Find Best Treatment Plans */}
//         <Text style={styles.sectionTitle}>Find Best Treatment Plans</Text>
//         <FlatList
//           horizontal
//           data={clinicCategories}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.clinicItem}>
//               <Image source={item.icon} style={styles.categoryIcon} />
//               <Text style={styles.clinicText}>{item.name}</Text>
//             </View>
//           )}
//         />

//         {/* Popular Product Categories */}
//         <Text style={styles.sectionTitle}>Popular Product Categories</Text>
//         <FlatList
//           numColumns={3}
//           data={productCategories}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.productItem}>
//               <Image source={item.icon} style={styles.productIcon} />
//               <Text style={styles.productText}>{item.name}</Text>
//             </View>
//           )}
//         />

//         {/* Offers Section */}
//         <Text style={styles.sectionTitle}>Offers</Text>
//         <FlatList
//           horizontal
//           data={offers}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.offerItem}>
//               <Text style={styles.offerText}>{item.text}</Text>
//             </TouchableOpacity>
//           )}
//         />

//         {/* Treatment Videos Reel */}
//         <Text style={styles.sectionTitle}>Treatment Videos Reel</Text>
//         <View style={styles.videoSection}>
//           <Image
//             // source={require("../../assets/video_sample.png")}
//             source={require("../../assets/asset1.png")}
//             style={styles.videoThumbnail}
//           />
//         </View>

//         {/*Homey Stories */}
//         <Text style={styles.sectionTitle}>10 Lakh+ Happy Stories</Text>
//         <View style={styles.videoSection}>
//           <Image
//             // source={require("../../assets/video_sample.png")}
//             source={require("../../assets/asset1.png")}
//             style={styles.videoThumbnail}
//           />
//         </View>

//         {/* Footer Section */}
//         <View style={styles.footerSection}>
//           <Text style={styles.footerText}>
//             You can look better with a small step right here!
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//   },
//   searchSection: {
//     backgroundColor: "#e3f2fd",
//     padding: 16,
//     borderRadius: 8,
//     margin: 10,
//   },
//   searchInput: {
//     backgroundColor: "#ffffff",
//     borderRadius: 8,
//     padding: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     padding: 16,
//   },
//   clinicItem: {
//     alignItems: "center",
//     marginHorizontal: 10,
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//   },
//   clinicText: {
//     marginTop: 8,
//   },
//   productItem: {
//     width: "30%",
//     alignItems: "center",
//     marginVertical: 8,
//   },
//   productIcon: {
//     width: 50,
//     height: 50,
//   },
//   productText: {
//     marginTop: 8,
//   },
//   offerItem: {
//     backgroundColor: "#ffeb3b",
//     padding: 12,
//     borderRadius: 8,
//     margin: 8,
//   },
//   offerText: {
//     fontWeight: "bold",
//   },
//   videoSection: {
//     alignItems: "center",
//     marginVertical: 16,
//   },
//   videoThumbnail: {
//     width: 300,
//     height: 200,
//   },
//   footerSection: {
//     backgroundColor: "#fce4ec",
//     padding: 16,
//     alignItems: "center",
//   },
//   footerText: {
//     fontSize: 16,
//     color: "#d81b60",
//   },
// });

// export default Home;
