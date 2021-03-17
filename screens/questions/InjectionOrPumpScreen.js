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

class InjectionOrPumpScreen extends Component {
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
    this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, injectionsOrPump: value}});
    if(value === "Injections") {
      this.context.setView("InjectionScreen1");
    } else {
      this.context.setView("PumpScreen1");
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
        <QuestionDescription title="Are you on injections or pump?"></QuestionDescription>
        <View style={styles.fieldsContainer}>
          <Greenbutton title="Injections" onPress={()=>this.goToNextScreen("Injections")}></Greenbutton>
          <Greenbutton title="Pump" onPress={()=>this.goToNextScreen("Pump")}></Greenbutton>
        </View>
        <View style={styles.fieldsContainer}></View>

      </View>
    );
  }
}

export default InjectionOrPumpScreen;

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

