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

class InjectionScreen2 extends Component {
  constructor() {
    super();
    this.state = {};

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
    this.goToFixedDosesScreen = this.goToFixedDosesScreen.bind(this);
  }
  static contextType = Context;

  componentDidMount() {
    let updateUser = { ...this.context.user };
    delete updateUser.questions?.useForMeals;
    delete updateUser.questions?.breakfast;
    delete updateUser.questions?.lunch;
    delete updateUser.questions?.dinner;
    delete updateUser.questions?.snack;
    this.context.setUser({ ...updateUser });
  }

  backFunction() {
    this.context.setView("InjectionScreen1");
  }

  goToFixedDosesScreen() {
    this.context.setView("FixedDosesScreen");
  }

  goToNextScreen(value) {
    this.context.setUser({
      ...this.context.user,
      questions: { ...this.context.user?.questions, useForMeals: value },
    });
    if (value === "Fixed Doses") {
      this.context.setView("FixedDosesScreen");
    } else {
      this.context.completeQuestions({
        ...this.context.user,
        questions: { ...this.context.user?.questions, useForMeals: value },
      });
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
        <QuestionDescription title="You are on Injections"></QuestionDescription>
        <QuestionDescription title="What do you use for meals?"></QuestionDescription>
        <View style={styles.fieldsContainer}>
          <Greenbutton
            title="Insulin to carbs ratios"
            onPress={() => this.goToNextScreen("Insulin to carbs ratios")}
          ></Greenbutton>
          <Greenbutton
            title="Fixed Doses"
            onPress={() => this.goToNextScreen("Fixed Doses")}
          ></Greenbutton>
        </View>

        <View style={styles.fieldsContainer}></View>
      </View>
    );
  }
}

export default InjectionScreen2;

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
