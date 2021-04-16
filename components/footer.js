import React, {useContext} from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../style/colors";
import Context from "../Context";

const Footer = (props) => {
  const context = useContext(Context);
  const redirect = (view) => {
    context.setView(view);
  }
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={
          context.view === "DashboardScreen" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={()=>redirect("DashboardScreen")}
      >
        <Image source={require("../assets/iconmonstr-home-7-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          context.view === "LearningModulesScreen" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={()=>redirect("LearningModulesScreen")}
      >
        <Image source={require("../assets/iconmonstr-book-19-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          context.view === "RemindersScreen" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={()=>redirect("RemindersScreen")}
      >
        <Image source={require("../assets/iconmonstr-bell-2-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          context.view === "MoreScreen" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={()=>redirect("MoreScreen")}
      >
        <Image source={require("../assets/iconmonstr-menu-1-32.png")} />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: colors.grey,
    borderTopWidth: 3,
    paddingBottom: 8,
  },
  iconContainer: {
    padding: 3,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  borderTopShow: {
    borderTopColor: colors.primary,
    borderTopWidth: 3,
    padding: 3,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },
});
