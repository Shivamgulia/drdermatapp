import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  role: "",
  token: "",
  user: {},
  login: () => {},
  logout: () => {},
  setValues: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setToken] = useState();
  const [authUser, setUser] = useState();
  const [role, setRole] = useState();

  function login({ user, token }) {
    setToken(token);
    setUser(user);
    setRole(user.role);
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("user", JSON.stringify(user));
    AsyncStorage.setItem("role", JSON.stringify(role));
  }

  function logout() {
    setToken(null);
    setUser(null);
    setRole(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("user");
    AsyncStorage.removeItem("role");
  }

  function setValues({ user, token }) {
    setToken(token);
    setUser(user);
    setRole(user.role);
  }

  const value = {
    token: authToken,
    user: authUser,
    role: role,
    isLoggedIn: !!authToken,
    login: login,
    logout: logout,
    setValues: setValues,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
