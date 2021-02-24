import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function EmailButton({ title, onPress }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
          <Image source={require('../assets/envelope.png')} style={styles.ImageIconStyle}></Image>
            <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
  }
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
    // position: 'absolute',
    // top: 200,
    // left: 100,
    width: 235,
    height: 43,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Times New Roman',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    position: 'relative',
    top: -9,
    left: 25,
  },
 ImageIconStyle: {
    height: 20,
    width: 35,
    position: 'relative',
    left: 30,
    top: 12,
    resizeMode : 'stretch',
  
 },
})

