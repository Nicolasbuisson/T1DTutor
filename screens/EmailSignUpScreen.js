import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import firebase from "firebase";
import colors from "../style/colors.js";
import Header from "../components/header";

class EmailLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.checkPasswords = this.checkPasswords.bind(this);
  }

  backFunction() {
    this.props.navigation.navigate("LoginScreen");
  }

  checkPasswords() {
    return this.state.password === this.state.confirmPassword;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Sign Up"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <View style={styles.fieldsContainer}>
          <Text style={styles.field}>Email</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Password</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Confirm Password</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ confirmPassword: text })}
            value={this.state.confirmPassword}
            style={styles.input}
          ></TextInput>
        </View>
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
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  field: {
    fontSize: 20,
    color: colors.primary,
  },

  input: {
    height: 25,
    width: 300,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 25,
  },
});
