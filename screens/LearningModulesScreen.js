import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "firebase";
import dbh from "../firebase";
import colors from "../style/colors.js";
import Header from "../components/header";
import Footer from "../components/footer";
import { ScrollView } from "react-native-gesture-handler";

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
    this.goToMythBusters = this.goToMythBusters.bind(this);
    this.goToKeepingYourSugarsAtTarget = this.goToKeepingYourSugarsAtTarget.bind(
      this
    );
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

  goToMythBusters() {
    this.props.navigation.navigate("MythBusters");
  }

  goToKeepingYourSugarsAtTarget() {
    this.props.navigation.navigate("KeepingYourSugarsAtTarget");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Learning Modules"></Header>
        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "55%" }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Type I Diabetes Myth Busters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToKeepingYourSugarsAtTarget}
          >
            <Text style={styles.moduleText}>Keeping your Sugars at Target</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToKeepingYourSugarsAtTarget}
          >
            <Text style={styles.moduleText}>Low Blood Sugar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>High Blood Sugar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Food and You</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Exericse and You</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Finding Patterns</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Preventing Complications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Sick Day Management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>If your Pump Breaks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Alcohol and other Substances</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Driving with Diabetes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Diabetes and Pregnancy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Travel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>
              Skin and your Diabetes Supplies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>
              Peer Support and Mental Health
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>
              Innovative Diabetes Technologies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleTouchable}
            onPress={this.goToMythBusters}
          >
            <Text style={styles.moduleText}>Who to Call</Text>
          </TouchableOpacity>
        </ScrollView>
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  moduleTouchable: {
    marginBottom: 10,
    marginTop: 10,
    minWidth: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.grey,
    borderWidth: 2,
  },
  moduleText: {
    fontSize: 18,
    color: colors.black,
  },
});
