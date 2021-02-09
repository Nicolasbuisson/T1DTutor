import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../style/colors";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={props.backArrow ? styles.backArrow : styles.noDisplay}
        onPress={props.function}
      >
        <Image source={require("../assets/backArrow.png")} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image style={props.logo ? styles.fakeLogo : styles.noDisplay} />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    top: 25,
    left: 10,
  },
  fakeLogo: {
    backgroundColor: colors.primary,
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  headerContainer: {
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.grey,
    borderBottomWidth: 3,
    paddingTop: 20,
  },
  headerText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "700",
  },
  noDisplay: {
    display: "none",
  },
});
