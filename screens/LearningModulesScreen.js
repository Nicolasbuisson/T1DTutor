import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
import dbh from "../firebase";
import colors from "../style/colors.js";
import Header from "../components/header";
import Footer from "../components/footer";

class LearningModulesScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    //functions
    this.goToHome = this.goToHome.bind(this);
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToReminders = this.goToReminders.bind(this);
    this.goToMore = this.goToMore.bind(this);
  }

  goToHome() {
    this.props.navigation.navigate("DashboardScreen");
  }

  goToReminders() {
    this.props.navigation.navigate("RemindersScreen");
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }

  goToMore() {
    this.props.navigation.navigate("MoreScreen");
  }

  goToTrack() {
    this.props.navigation.navigate("TrackingScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Learning Modules"></Header>
        <View style={styles.fieldsContainer}></View>
        <Footer
          page="learn"
          homeFunction={this.goToHome}
          trackFunction={this.goToTrack}
          learnFunction={this.goToLearningModules}
          moreFunction={this.goToMore}
          reminderFunction={this.goToReminders}
        ></Footer>
      </View>
    );
  }
}

export default LearningModulesScreen;

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
