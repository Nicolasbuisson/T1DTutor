import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
import colors from "../style/colors.js";
import Header from "../components/header";

class PasswordResetScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
  }

  backFunction() {
    this.props.navigation.navigate("EmailLoginScreen");
  }

  passwordReset() {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        // Password reset email sent!
        Alert.alert(
          "Password Reset Email Sent",
          "",
          [
            {
              text: "OK",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
        this.setState({ email: "" });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorMessage !== "") {
          Alert.alert(
            "Error",
            errorMessage,
            [
              {
                text: "OK",
                style: "cancel",
              },
            ],
            { cancelable: false }
          );
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Password Reset"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <View style={styles.fieldsContainer}>
          <Text style={styles.field}>Enter your Email</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            style={styles.input}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={this.passwordReset}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PasswordResetScreen;

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
    marginBottom: 20,
  },

  button: {
    marginTop: 20,
    height: 30,
    width: 160,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
  },
});
