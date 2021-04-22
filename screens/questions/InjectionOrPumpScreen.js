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
import Greenbutton from "../../components/greenButton";
import QuestionDescription from "../../components/QuestionDescription";
import Context from "../../Context";

class InjectionOrPumpScreen extends Component {
  constructor() {
    super();
    this.state = {};

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
  }
  static contextType = Context;

  componentDidMount() {
    let updateUser = { ...this.context.user };
    delete updateUser.questions?.meals;
    delete updateUser.questions?.longActing;
    delete updateUser.questions?.useForMeals;
    delete updateUser.questions?.pumpType;
    delete updateUser.questions?.breakfast;
    delete updateUser.questions?.lunch;
    delete updateUser.questions?.dinner;
    delete updateUser.questions?.snack;
    this.context.setUser({ ...updateUser });
  }

  backFunction() {
    if (this.context.user.questions?.typeOfRealTime) {
      this.context.setView("Question2bisscreen");
    } else {
      this.context.setView("Question2screen");
    }
  }

  goToNextScreen(value) {
    this.context.setUser({
      ...this.context.user,
      questions: { ...this.context.user?.questions, injectionsOrPump: value },
    });
    if (value === "Injections") {
      this.context.setView("InjectionScreen1");
    } else {
      this.context.setView("PumpScreen1");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D Tutor"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <QuestionDescription title="Are you on injections or pump?"></QuestionDescription>
        <View style={styles.fieldsContainer}>
          <Greenbutton
            title="Injections"
            onPress={() => this.goToNextScreen("Injections")}
          ></Greenbutton>
          <Greenbutton
            title="Pump"
            onPress={() => this.goToNextScreen("Pump")}
          ></Greenbutton>
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
