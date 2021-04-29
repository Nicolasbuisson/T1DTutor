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
import Dropdown from "react-dropdown";
import Context from "../../Context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

class Question1screen extends Component {
  constructor() {
    super();
    this.state = {
      showDOB: false,
      showDiagnosis: false,
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
    const { DOB, diagnosisdate } = this.context.user.questions;
    if (DOB && diagnosisdate && this.state.disabled) {
      this.setState({ disabled: false });
    }
  };

  backFunction() {
    this.context.setView("LanguageQuestionScreen");
  }

  goToNextScreen() {
    this.context.setView("Question2screen");
  }

  toggleDate = (val) => {
    if (val === "DOB") {
      let toggle = !this.state.showDOB;
      if (!this.context.user?.questions?.DOB) {
        this.context.setUser({
          ...this.context.user,
          questions: { ...this.context.user?.questions, DOB: new Date() },
        });
      }
      if (toggle) {
        this.setState({ showDOB: toggle, showDiagnosis: false });
      } else {
        this.setState({ showDOB: toggle });
      }
    } else if (val === "diagnosis") {
      let toggle = !this.state.showDiagnosis;
      if (!this.context.user?.questions?.diagnosisdate) {
        this.context.setUser({
          ...this.context.user,
          questions: {
            ...this.context.user?.questions,
            diagnosisdate: new Date(),
          },
        });
      }
      if (toggle) {
        this.setState({ showDiagnosis: toggle, showDOB: false });
      } else {
        this.setState({ showDiagnosis: toggle });
      }
    }
  };

  setDate = (field, date) => {
    if (field === "DOB") {
      this.context.setUser({
        ...this.context.user,
        questions: { ...this.context.user?.questions, DOB: date },
      });
    } else if (field === "diagnosis") {
      this.context.setUser({
        ...this.context.user,
        questions: { ...this.context.user?.questions, diagnosisdate: date },
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D Tutor"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <View style={styles.fieldsContainer}>
          <View style={styles.space}>
            <Text style={styles.field}>{this.context.user.language === "English" ? "Date of birth" : "Date de Naissance"}</Text>
            {!this.state.showDOB && (
              <Text>
                {this.context.user?.questions?.DOB?.toLocaleDateString()}
              </Text>
            )}
            {!this.state.showDOB && (
              <Greenbutton
                title={this.context.user.language === "English" ? "Select Date" : "Sélectionner une date"}
                onPress={() => this.toggleDate("DOB")}
              ></Greenbutton>
            )}
            {this.state.showDOB && (
              <DateTimePicker
                value={this.context.user?.questions?.DOB || new Date()}
                mode={"date"}
                style={{ width: 300, backgroundColor: "white" }}
                is24Hour={true}
                display="default"
                onChange={(e, val) => this.setDate("DOB", val)}
              />
            )}
            {this.state.showDOB && (
              <Greenbutton
                title="Okay"
                onPress={() => this.toggleDate("DOB")}
              ></Greenbutton>
            )}
          </View>
          <View style={styles.space}>
            <Text style={styles.field}>{this.context.user.language === "English" ? "Date of diagnosis with T1D" : "Date de diagnostic du T1D"}</Text>
            {!this.state.showDiagnosis && (
              <Text>
                {this.context.user?.questions?.diagnosisdate?.toLocaleDateString()}
              </Text>
            )}
            {!this.state.showDiagnosis && (
              <Greenbutton
                title={this.context.user.language === "English" ? "Select Date" : "Sélectionner une date"}
                onPress={() => this.toggleDate("diagnosis")}
              ></Greenbutton>
            )}
            {this.state.showDiagnosis && (
              <DateTimePicker
                value={
                  this.context.user?.questions?.diagnosisdate || new Date()
                }
                mode={"date"}
                style={{ width: 300, backgroundColor: "white" }}
                is24Hour={true}
                display="default"
                onChange={(e, val) => this.setDate("diagnosis", val)}
              />
            )}
            {this.state.showDiagnosis && (
              <Greenbutton
                title="Okay"
                onPress={() => this.toggleDate("diagnosis")}
              ></Greenbutton>
            )}
          </View>

          <Greenbutton
            title={this.context.user.language === "English" ? "Next" : "Suivant"}
            onPress={this.goToNextScreen}
            disabled={this.state.disabled}
          ></Greenbutton>
        </View>
      </View>
    );
  }
}

export default Question1screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  field: {
    fontSize: 20,
    color: colors.primary,
  },

  input: {
    height: 25,
    width: 300,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 25,
  },

  space: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
