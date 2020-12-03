import React from "react";
import { ImagePropTypes, StyleSheet, Text, View } from "react-native";
import TestText from "./components/text";
import { apiTest } from "./components/API";
import GreenButton from "./components/greenButton";
import EmailButton from "./components/emailButton";
import FbButton from "./components/fbbutton";
import GoogleButton from "./components/googlebutton";

export default function App() {
  console.log(apiTest());
  return (
  <GreenButton title='Get Started'></GreenButton>
  // <EmailButton title='Email login'></EmailButton>
  // <FbButton title='Facebook login'></FbButton>
  // <GoogleButton title='Google login'></GoogleButton>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
