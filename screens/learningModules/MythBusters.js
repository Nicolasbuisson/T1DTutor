import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";

class MythBusters extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Myth Busters"
          backArrow={true}
          function={this.goToLearningModules}
        />

        <View style={styles.fieldsContainer}>
          <Text> some myths </Text>
        </View>
      </View>
    );
  }
}

export default MythBusters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
