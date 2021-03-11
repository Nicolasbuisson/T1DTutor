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

class Question2screen extends Component {
  constructor() {
    super();
    this.state = {

    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);

  }

  backFunction() {
    this.props.navigation.navigate("Question2screen");
  }

  goToNextScreen() {
    this.props.navigation.navigate("Question2screen");
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <QuestionDescription title="What type of Real-time CGM?"></QuestionDescription>
        <View style={styles.fieldsContainer}>
          <Greenbutton title="Dexcom" onPress={this.goToEmailScreen}></Greenbutton>
          {/* //onPress to be done */}
          <Greenbutton title="Medtronic Guardian Con." onPress={this.goToEmailScreen}></Greenbutton>
          <Greenbutton title="Medtronic Guardian/Enlite" onPress={this.goToEmailScreen}></Greenbutton>
        </View>
        <View style={styles.fieldsContainer}><Greenbutton title="Confirm" onPress={this.goToNextScreen}></Greenbutton></View>

      </View>
    );
  }
}

export default Question2screen;

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

