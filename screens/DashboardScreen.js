import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//import firebase from "firebase";
import * as firebase from "firebase";
import "firebase/auth";
import Header from "../components/header";
import icon from "../assets/icon.png"
import colors from "../style/colors.js";
// import { Header } from "react-native/Libraries/NewAppScreen";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
        title="T1D App"
        logo/>
        
        <View style={styles.fieldsContainer}>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
        </View>
        
      </View>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
