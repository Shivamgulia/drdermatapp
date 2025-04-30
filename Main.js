import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./src/store/authContext";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./src/Stacks/AuthStack";
import DevStack from "./src/Stacks/DevStack";
// import UserStack from "./src/Stacks/UserStack";
// import Navbar from "./src/components/Navbar/Navbar";
// import Loading from "./src/components/UI/Loading";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function checkUser() {
      const token = await AsyncStorage.getItem("token");
      if (!!token) {
        setLoggedIn(true);
        const user = await AsyncStorage.getItem("user");
        const userObj = await JSON.parse(user);
        authCtx.setValues({ user: userObj, token });
      }
    }
    checkUser();
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoggedIn(authCtx.isLoggedIn);
  }, [authCtx]);

  if (loading) {
    return (
      <View style={styles.loading}>
        {/* <Loading /> */}
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        {/* {!loggedIn && <AuthStack />} */}
        <DevStack />
        {/* <AuthStack /> */}
        {/* {loggedIn && <UserStack />} */}
        {/* {loggedIn && (
          <View style={styles.navbar}>
            <Navbar />
          </View>
        )} */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    flex: 0,
    // paddingBottom: 30,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  loading: {
    flex: 1,
  },
});

// "expo": "~50.0.13",
