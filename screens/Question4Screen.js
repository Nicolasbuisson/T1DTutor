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
import Greenbutton from "../components/greenButton"
import QuestionDescription from "../components/QuestionDescription"

class Question4screen extends Component {
  constructor() {
    super();
    this.state = {
      
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
    this.goToFixedDosesScreen = this.goToFixedDosesScreen.bind(this);
    
  }

  backFunction() {
    this.props.navigation.navigate("Question3screen");
  }

  goToNextScreen() {
    this.props.navigation.navigate("Question1screen");
  }

  goToFixedDosesScreen() {
    this.props.navigation.navigate("FixedDosesScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <QuestionDescription title="You are on Injections"></QuestionDescription>
        <QuestionDescription title="What do you use for meals?"></QuestionDescription>
          <View style={styles.fieldsContainer}>
            <Greenbutton title="Insulin to carbs ratios" onPress={this.goToEmailScreen}></Greenbutton>
            <Greenbutton title="Fixed Doses" onPress={this.goToFixedDosesScreen}></Greenbutton>
          </View>
          
          <View style={styles.fieldsContainer}><Greenbutton title="Next" onPress={this.goToNextScreen}></Greenbutton></View>

      </View>
    );
  }
}

export default Question4screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

