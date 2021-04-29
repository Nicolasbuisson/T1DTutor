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

class FixedDosesScreen extends Component {
  constructor() {
    super();
    this.state = {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack: "",
      disabled: true,
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
  }
  static contextType = Context;

  componentDidMount() {
    this.isDisabled();
  }

  componentDidUpdate() {
    this.isDisabled();
  }

  isDisabled = () => {
    const { breakfast, lunch, dinner, snack } = this.context.user.questions;
    if (breakfast && lunch && dinner && snack && this.state.disabled) {
      this.setState({ disabled: false });
    }
  };

  backFunction() {
    this.context.setView("InjectionScreen2");
  }

  goToNextScreen() {
    this.context.completeQuestions({ ...this.context.user });
  }

  handleInputChange = (field, text) => {
    if (isNaN(Number(text))) return;
    this.context.setUser({
      ...this.context.user,
      questions: { ...this.context.user?.questions, [field]: text },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D Tutor"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        {/* <QuestionDescription title="Please enter your fixed doses"></QuestionDescription> */}
        <View style={styles.fieldsContainer}>
          <Text style={styles.field}>{this.context.user.language === "English" ? "Breakfast Doses" : "Doses pour le déjeuner"}</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => this.handleInputChange("breakfast", text)}
            value={this.context.user?.questions?.breakfast}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>{this.context.user.language === "English" ? "Lunch Doses" : "Doses pour le diner"}</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.handleInputChange("lunch", text)}
            value={this.context.user?.questions?.lunch}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>{this.context.user.language === "English" ? "Dinner Doses" : "Doses pour le souper"}</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.handleInputChange("dinner", text)}
            value={this.context.user?.questions?.dinner}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>{this.context.user.language === "English" ? "Snack Doses" : "Doses pour le goûter"}</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.handleInputChange("snack", text)}
            value={this.context.user?.questions?.snack}
            style={styles.input}
          ></TextInput>
        </View>

        <View style={styles.fieldsContainer}>
          <Greenbutton
            title={this.context.user.language === "English" ? "Confirm" : "Confirmer"}
            onPress={this.goToNextScreen}
            disabled={this.state.disabled}
          ></Greenbutton>
        </View>
      </View>
    );
  }
}

export default FixedDosesScreen;

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
    marginTop: 50,
  },

  input: {
    height: 25,
    width: 300,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 25,
  },
});
