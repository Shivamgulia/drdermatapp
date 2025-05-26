import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;

export default function ClinicServices() {
  return (
    <>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <View
                  style={[
                    styles.buttons,
                    { paddingHorizontal: 30, paddingVertical: 10 },
                  ]}
                >
                  <Text style={styles.text}>Add Services</Text>
                </View>
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 10,
            backgroundColor: "#fdf3d4",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            borderRadius: 40,
            width: "90%",
          }}
        >
          <Text>
            <Icon name="search" />
            Search
          </Text>
        </View>
      </View> */}

      <View style={{ marginTop: 30, gap: 20 }}>
        <View style={styles.service}>
          <View style={styles.clinicImageView}>
            <Image
              source={require("../../../assets/clinic/clinic2.png")}
              style={styles.serviceImage}
            />
            <Text>Service</Text>
          </View>
          <Text style={styles.clincText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          {/* <TouchableOpacity style={styles.editbutton}>
                    <Text>Edit</Text>
                  </TouchableOpacity> */}
        </View>
        <View style={styles.service}>
          <View style={styles.clinicImageView}>
            <Image
              source={require("../../../assets/clinic/clinic2.png")}
              style={styles.serviceImage}
            />
            <Text>Service</Text>
          </View>
          <Text style={styles.clincText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          {/* <TouchableOpacity style={styles.editbutton}>
                    <Text>Edit</Text>
                  </TouchableOpacity> */}
        </View>
        <View style={styles.service}>
          <View style={styles.clinicImageView}>
            <Image
              source={require("../../../assets/clinic/clinic2.png")}
              style={styles.serviceImage}
            />
            <Text>Service</Text>
          </View>
          <Text style={styles.clincText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          {/* <TouchableOpacity style={styles.editbutton}>
                    <Text>Edit</Text>
                  </TouchableOpacity> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#155e95",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  text: { color: "white" },
  greenButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#34bc68",
  },
  greenButtonText: {
    color: "#34bc68",
  },
  service: {
    flexDirection: "row",
    marginHorizontal: 15,
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "#6f7070",
  },
  clinicImageView: {
    alignItems: "center",
  },
  serviceImage: {
    width: 80,
    height: 80,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  clincText: {
    fontSize: 16,
    width: width / 1.6,
  },
  editbutton: {
    position: "relative",
    top: -20,
    left: -40,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
    borderWidth: 1,
    borderColor: "#6f7070",
    borderRadius: 20,
  },
});
