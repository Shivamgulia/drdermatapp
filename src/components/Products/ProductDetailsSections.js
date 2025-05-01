import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

export default function ProductDetailsSections() {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          borderColor: "grey",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingVertical: 10,
        }}
      >
        <View style={styles.detail}>
          <View style={styles.shippingIcon}>
            <Icon name="wallet-outline" size={25} color={"grey"} />
          </View>
          <View>
            <Text style={styles.detailhead}>COD Availabe</Text>
            <Text style={styles.detaildetail}>@ Rs. 19 Per Order</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.shippingIcon}>
            <Icon1 name="local-shipping" size={25} color={"grey"} />
          </View>
          <View>
            <Text style={styles.detailhead}>Free Shipping</Text>
            <Text style={styles.detaildetail}>Above Rs. 399</Text>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "#484849" }}>
          Have Queries or Concerns? Contact Us
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            borderWidth: 2,
            borderColor: "#155e94",
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#155e94", fontSize: 25 }}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
          borderTopWidth: 1,
          paddingTop: 20,
          borderColor: "grey",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.iconCont}>
            <Icon name="eyedrop-sharp" style={styles.listIcon} />
            <Text style={styles.iconText}>Dye Free</Text>
          </View>
          <View style={styles.iconCont}>
            <Icon2 name="hand-holding-water" style={styles.listIcon} />
            <Text style={styles.iconText}>Mineral Oil Free</Text>
          </View>
          <View style={styles.iconCont}>
            <Icon name="flask-sharp" style={styles.listIcon} />
            <Text style={styles.iconText}>Paraben Free</Text>
          </View>
          <View style={styles.iconCont}>
            <Icon name="flask-sharp" style={styles.listIcon} />
            <Text style={styles.iconText}>Sulfate Free</Text>
          </View>
        </View>
        <Image
          source={require("../../../assets/productDetails.png")}
          style={{ width: "80%", height: 200, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  shippingIcon: {
    borderRadius: "50%",
    borderWidth: 1,
    padding: 8,
    borderColor: "grey",
  },
  detailhead: {
    fontSize: 13,
    fontWeight: "bold",
  },
  detaildetail: {
    color: "grey",
    fontSize: 10,
  },
  listIcon: {
    padding: 8,
    borderWidth: 1,
    borderRadius: "50%",
    color: "#155e95",
    borderColor: "#155e95",
    fontSize: 25,
  },
  iconCont: { justifyContent: "center", alignItems: "center" },
  iconText: {
    fontSize: 10,
    paddingTop: 5,
    color: "#6e6e6e",
  },
});
