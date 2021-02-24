import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../style/colors";

export default function QuestionDescription({ title }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  text: {
    color: 'black',
    fontFamily: 'Times New Roman',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
});
