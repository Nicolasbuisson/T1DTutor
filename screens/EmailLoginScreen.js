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
import dbh from "../firebase";
import colors from "../style/colors.js";
import Header from "../components/header";
import Context from '../Context';

class EmailLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.signIn = this.signIn.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
  }
  static contextType = Context;

  backFunction() {
    this.context.setView("LoginScreen");
  }

  goToSignUp() {
    this.context.setView("EmailSignUpScreen");
  }

  signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  passwordReset() {
    this.context.setView("PasswordResetScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Login"
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
            style={styles.inputPassword}
          ></TextInput>
          <TouchableOpacity
            style={(styles.button, styles.buttonForgotPassword)}
            onPress={this.passwordReset}
          >
            <Text style={styles.buttonTextForgotPassword}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.goToSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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

  inputPassword: {
    height: 25,
    width: 300,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 5,
  },

  button: {
    marginTop: 30,
    height: 30,
    width: 100,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonForgotPassword: {
    backgroundColor: colors.background,
    marginTop: 1,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
  },

  buttonTextForgotPassword: {
    textAlign: "center",
    opacity: 0.6,
    fontSize: 14,
    color: colors.primary,
  },
});
