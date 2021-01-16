import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";

class LoginScreen extends Component {
  signInWithGoogleAsync = async () => {
    console.log("google");
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId:
          "670570397331-k6qmhflr18eh05u52c8p8oc227s5c0st.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <View>
          <TouchableOpacity
            style={{ marginTop: 30, marginLeft: 30 }}
            onPress={this.signInWithGoogleAsync}
          >
            <Text>Google Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
