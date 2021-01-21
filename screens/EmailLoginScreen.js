import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";

class EmailLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Email Login</Text>
      </View>
    );
  }
}

export default EmailLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
