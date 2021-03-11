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
import dbh from "../../firebase";
import colors from "../../style/colors.js";
import Header from "../../components/header";
import Greenbutton from "../../components/greenButton"
import QuestionDescription from "../../components/QuestionDescription"

class FixedDosesScreen extends Component {
  constructor() {
    super();
    this.state = {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack: "",
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);

  }

  backFunction() {
    this.props.navigation.navigate("InjectionScreen2");
  }

  goToNextScreen() {
    this.props.navigation.navigate("InjectionScreen2");
  }

  goToSubQuestionScreen() {
    this.props.navigation.navigate("Question2bisscreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        {/* <QuestionDescription title="Please enter your fixed doses"></QuestionDescription> */}
        <View style={styles.fieldsContainer}>

          <Text style={styles.field}>Breakfast Doses</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => this.setState({ breakfast: text })}
            value={this.state.age}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Lunch Doses</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ lunch: text })}
            value={this.state.diagnosisdate}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Dinner Doses</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ dinner: text })}
            value={this.state.pregnant}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Snack Doses</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ snack: text })}
            value={this.state.diagnosisdate}
            style={styles.input}
          ></TextInput>
        </View>

        <View style={styles.fieldsContainer}><Greenbutton title="Confirm" onPress={this.goToNextScreen}></Greenbutton></View>

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

