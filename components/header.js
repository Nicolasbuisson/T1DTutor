import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../style/colors";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={
          props.backArrow
            ? props.smallArrow
              ? styles.smallBackArrow
              : styles.backArrow
            : styles.noDisplay
        }
        onPress={props.function}
      >
        <Image
          source={
            props.smallArrow
              ? require("../assets/smallBackArrow.png")
              : require("../assets/backArrow.png")
          }
        />
      </TouchableOpacity>
      <Text style={props.small ? styles.headerTextSmall : styles.headerText}>
        {props.title}
      </Text>
      {props.logo && (
        <Image
          source={require("../assets/logoCircle.png")}
          style={styles.logo}
        />
      )}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    top: 25,
    left: 10,
    marginRight: 5,
    padding: 5,
  },
  smallBackArrow: {
    position: "absolute",
    top: 30,
    left: 8,
    marginRight: 5,
    padding: 5,
  },
  logo: {
    height: 40,
    width: 40,
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
    maxWidth: "83%",
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 2,
  },
  headerTextSmall: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
    maxWidth: "83%",
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 2,
  },
  noDisplay: {
    display: "none",
  },
});
