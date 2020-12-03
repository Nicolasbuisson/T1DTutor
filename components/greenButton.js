import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function GreenButton({ title, onPress }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
  }
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#34A14C',
    // position: 'absolute',
    // top: 100,
    // left: 100,
    width: 181,
    height: 41,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Times New Roman',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  }
})

