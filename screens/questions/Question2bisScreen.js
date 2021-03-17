import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../../style/colors.js";
import Header from "../../components/header";
import Greenbutton from "../../components/greenButton"
import QuestionDescription from "../../components/QuestionDescription"
import Context from "../../Context";

class Question2screen extends Component {
  constructor() {
    super();
    this.state = {

    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);

  }
  static contextType = Context;

  backFunction() {
    this.context.setView("Question2screen");
  }

  goToNextScreen(value) {
    this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, typeOfRealTime: value}});
    this.context.setView("InjectionOrPumpScreen");
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
          <Greenbutton title="Dexcom" onPress={()=>this.goToNextScreen("Dexcom")}></Greenbutton>
          <Greenbutton title="Medtronic Guardian Con." onPress={()=>this.goToNextScreen("Medtronic Guardian Con.")}></Greenbutton>
          <Greenbutton title="Medtronic Guardian/Enlite" onPress={()=>this.goToNextScreen("Medtronic Guardian/Enlite")}></Greenbutton>
        </View>
        <View style={styles.fieldsContainer}></View>

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

