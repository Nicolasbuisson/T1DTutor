import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function GreenButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity onPress={disabled ? () => null : onPress}>
      <View
        style={{
          ...styles.button,
          backgroundColor: disabled ? "gray" : "#34A14C",
        }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#34A14C",
    width: 235,
    minHeight: 43,
  },
  buttonText: {
    color: "white",
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
