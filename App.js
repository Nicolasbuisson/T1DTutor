import React from "react";
import Header from "./components/header";
import dbh from "./firebase";
import * as firebase from "firebase";
import "firebase/auth";
import * as Google from "expo-google-app-auth";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  const signInWithGoogleAsync = async () => {
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
  // dbh.collection("characters").doc("bowser").set({
  //   employment: "plumber",
  //   outfitColor: "red",
  //   specialAttack: "fireball",
  // });
  return (
    <View>
      {/* <Header title="T1D App prop" backArrow={true} logo={true}></Header> */}
      <TouchableOpacity
        style={{ marginTop: 30, marginLeft: 30 }}
        onPress={signInWithGoogleAsync}
      >
        <Text>Google Login</Text>
      </TouchableOpacity>
    </View>
  );
}
