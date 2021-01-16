import React from "react";
import Header from "./components/header";
import dbh from "./firebase";
import * as firebase from "firebase";
import "firebase/auth";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";

export default function App() {
  const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,
  });

  const AppNavigator = createAppContainer(AppSwitchNavigator);

  // dbh.collection("characters").doc("bowser").set({
  //   employment: "plumber",
  //   outfitColor: "red",
  //   specialAttack: "fireball",
  // });
  return <AppNavigator />;
}
