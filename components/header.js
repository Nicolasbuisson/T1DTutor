import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
//import { styles } from "../style/style";

import colors from "../style/colors";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>T1D App</Text>
      <Image style={styles.fakeLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  fakeLogo: {
    backgroundColor: colors.primary,
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  headerContainer: {
    display: "flex",
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.grey,
    borderBottomWidth: 3,
    paddingTop: 10,
  },
  headerText: {
    color: colors.primary,
    fontSize: 30,
  },
});
