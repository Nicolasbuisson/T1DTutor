import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class KeepingYourSugarsAtTarget extends Component {
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
          title="Keep your Sugars at Target"
          backArrow={true}
          function={this.goToLearningModules}
          small={true}
          smallArrow={true}
        />

        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "77%", marginBottom: 5 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listItem}>
            <Text style={styles.text}>
              To delay or prevent complications of diabetes, aim to keep blood
              glucose close to target. Though your own personalized targets are
              best discussed with your healthcare providers, these are general
              guidelines recommended for most with type 1 diabetes. Target
              values may change depending on medical conditions, age and other
              risk factors.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              A glycated hemoglobin level (or HbA1c) demonstrates the average
              glucose control within the last 3 - 4 months. For most with type 1
              diabetes, the HbA1c target is 7.0% or less, which means an average
              glucose of 8.5 mmol/L. This number comes from research showing
              that this target was associated with less diabetes complications.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              In order to achieve an A1C of maximum 7.0%, aim for:{"\n"} -
              Fasting blood sugar (first one in the morning after not eating) of
              4.0–7.0 mmol/L.{"\n"} - Blood sugar target of 5.0–10.0 mmol/L at
              least 2 hours after eating.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Other targets include:{"\n"} - Having as few episodes of low blood
              sugar per week as much as possible (no more than 2 per week){"\n"}{" "}
              - Having as few high blood sugars (more than 13) as much as
              possible{"\n"} - Never having ketones as much as possible [See
              Sick Day Management]
            </Text>
          </View>
          {/* TODO  make this one only render for CGM*/}
          <View style={styles.listItem}>
            <Text style={styles.text}>
              If you are on continuous glucose monitoring, through devices such
              as Dexcom or Freestyle Libre, you can see an overview of your
              blood sugars. When a healthcare professional looks at the
              ambulatory glucose profile (AGP), which is the overall trend, our
              targets are:{"\n"} - Time in target range of 4.0 - 10.0 mmol/L of
              at least 70%{"\n"} - Glucose variability (also named "CV") of less
              than 36%
              {"\n"} - Having as little time spent in low or high blood sugar as
              much as possible.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default KeepingYourSugarsAtTarget;

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
