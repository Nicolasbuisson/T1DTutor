import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import * as firebase from "firebase";
import "firebase/auth";
import Header from "../components/header";
import Footer from "../components/footer";
import colors from "../style/colors.js";
import Context from "../Context";

class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      english: true,
    };

    //functions
    this.goToHome = this.goToHome.bind(this);
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToReminders = this.goToReminders.bind(this);
    this.goToMore = this.goToMore.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
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

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount() {
    this.setState({
      userName: this.context.user?.first_name
        ? this.context.user?.first_name
        : "",
      english: this.context.user?.language === "French" ? false : true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="T1D Tutor" />
        <View style={styles.fieldsContainer}>
          <Image
            source={require("../assets/logoCircle.png")}
            style={styles.logo}
          />
          {this.state.english && (
            <Text style={styles.title}>
              Welcome {this.Capitalize(this.state.userName)}
            </Text>
          )}
          {!this.state.english && (
            <Text style={styles.title}>
              Bienvenue {this.Capitalize(this.state.userName)}
            </Text>
          )}
          <Button
            title="Sign out"
            onPress={() =>
              firebase
                .auth()
                .signOut()
                .then(() => {
                  this.context.setView("LoginScreen");
                })
                .catch((e) => console.log(e))
            }
          />
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
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 64,
    width: 64,
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    margin: 15,
    color: colors.primary,
    // textDecorationStyle: "",
  },
});
