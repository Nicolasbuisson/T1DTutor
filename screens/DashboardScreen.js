import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//import firebase from "firebase";
import * as firebase from "firebase";
import "firebase/auth";
import Header from "../components/header";
import Footer from "../components/footer";
import icon from "../assets/icon.png";
import colors from "../style/colors.js";
import Context from '../Context';

class DashboardScreen extends Component {
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
  static contextType = Context;

  goToHome() {
    this.context.setView("DashboardScreen");
  }

  goToReminders() {
    this.context.setView("RemindersScreen");
  }

  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  goToMore() {
    this.context.setView("MoreScreen");
  }

  goToTrack() {
    this.context.setView("TrackingScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="T1D App" logo />

        <View style={styles.fieldsContainer}>
          <Button title="Sign out" onPress={() => firebase.auth().signOut().then(()=>{this.context.setView("LoginScreen")}).catch((e)=>console.log(e))} />
        </View>
        <Footer
          page="home"
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

export default DashboardScreen;

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
