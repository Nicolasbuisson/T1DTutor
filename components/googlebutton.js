import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function GoogleButton({ title, onPress }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
          <Image source={require('../assets/googlelogo.png')} style={styles.ImageIconStyle}></Image>
            <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
  }
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'grey',
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
    top: -12,
    left: 10,
  },
 ImageIconStyle: {
    height: 22,
    width: 21,
    position: 'relative',
    left: 20,
    top: 9,
    resizeMode : 'stretch',
  
 },
})

