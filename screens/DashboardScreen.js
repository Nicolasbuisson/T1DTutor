import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//import firebase from "firebase";
import * as firebase from "firebase";
import "firebase/auth";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DashBoard</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
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
  },
});
