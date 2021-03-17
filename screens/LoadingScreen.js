import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";
import Context from '../Context'

class LoadingScreen extends Component {
  static contextType = Context;
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.context.setView("DashboardScreen");
        } else {
          this.context.setView("LoginScreen");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
