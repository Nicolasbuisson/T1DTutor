import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TestText from "./components/text";
import { apiTest } from "./components/API";

export default function App() {
  console.log(apiTest());
  return <TestText></TestText>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
