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

  componentDidMount() {
    let updateUser = {...this.context.user};
    delete updateUser.questions?.checkBloodSugar;
    delete updateUser.questions?.typeOfRealTime;
    this.context.setUser({...updateUser});
}

  backFunction() {
    this.context.setView("Question1screen");
  }

  goToNextScreen(value) {
    this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, checkBloodSugar: value}});
    if(value === "Real-time CGM") {
      this.context.setView("Question2bisscreen");
    } else {
      this.context.setView("InjectionOrPumpScreen");
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <QuestionDescription title="What do you use to check blood sugars?"></QuestionDescription>
        <View style={styles.fieldsContainer}>
          <Greenbutton title="Finger-prick testing" onPress={()=>this.goToNextScreen("Finger-prick testing")}></Greenbutton>
          <Greenbutton title="Flash CGM" onPress={()=>this.goToNextScreen("Flash CGM")}></Greenbutton>
          <Greenbutton title="Real-time CGM" onPress={()=>this.goToNextScreen("Real-time CGM")}></Greenbutton>
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

