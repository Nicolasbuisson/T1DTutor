import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class PreventingComplications extends Component {
  constructor() {
    super();

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Preventing Complications"
          backArrow={true}
          function={this.goToLearningModules}
          small={true}
        />

        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "77%", marginBottom: 5 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Diabetes is important to manage because good blood sugars can
              reduce your risk of complications. Complications are due to damage
              to both big and small blood vessels in the body if blood sugars
              (and other risk factors) are not well controlled. These
              complications include:
              {"\n"} - Heart disease (such as heart attacks and heart failure)
              {"\n"} - Stroke
              {"\n"} - Eye damage in the back of your eye
              {"\n"} - Kidney damage that can lead to needing dialysis
              {"\n"} - Nerve damage
              {"\n"} - Damage to blood vessels in the legs, causing pain,
              infections, and wounds.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              This is why it is important to take care of your diabetes. You are
              not only preventing high and low sugars, but allowing you to live
              a long and healthy life without these complications.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              This is also why your doctor wants you to do the following
              "screening tests" (which means detecting early signs of problems
              before they get serious)
              {"\n"} - Eye exam every year
              {"\n"} - Foot exam every year
              {"\n"} - Blood pressure measurement at each visit
              {"\n"} - Urine tests and cholesterol levels at least once per year
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Reducing and preventing the risk of complications due to diabetes
              requires the following:
              {"\n"} - Aiming for target blood sugar levels
              {"\n"} - Controlling blood pressure (BP {"<"} 130/80 mmHg) and
              cholesterol levels (LDL-C {"<"} 2.0 mmol/L) - your doctor will let
              you know if your levels are an issue.
              {"\n"} - Stop smoking
              {"\n"} - Exercise - 150 minutes of moderate to vigorous aerobic
              activity per week and resistance exercises 2-3 times/week
              {"\n"} - Healthy eating [see "Food and You"]
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PreventingComplications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 5,
    margin: 5,
    minWidth: "92%",
    maxWidth: "92%",
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.grey,
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },
});
