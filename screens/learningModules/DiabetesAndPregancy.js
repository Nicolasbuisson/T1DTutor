import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class DiabetesAndPregnancy extends Component {
  constructor() {
    super();

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }
  static contextType = Context;

  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Diabetes and Pregnancy"
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
              It is a misconception that those with type 1 diabetes cannot or
              should not have children [see Section "Type 1 Diabetes: Myth
              Busters"]. However, a healthy and safe pregnancy with diabetes
              requires a lot of work. Here are important things you should know:
              {"\n"} - Pregnancy should be planned to avoid complications.
              {"\n"} - Use contraception if you do not want to get pregnant.
              {"\n"} - If you are planning pregnancy, it is best if your HbA1C
              is in target before falling pregnant; this refers to a target of
              7% or less, or 6.5% or less if possible.
              {"\n"} - The key to a healthy pregnancy for a woman with diabetes
              is keeping blood glucose levels in the target range—both before
              and during pregnancy.
              {"\n"} - Poorly controlled diabetes in a pregnant woman with type
              1 diabetes increases the risk of miscarriage, having a baby born
              with a malformation and having a stillborn.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Women with type 1 diabetes should discuss pregnancy plans with
              their diabetes health-care team to:
              {"\n"} - Review blood glucose targets.
              {"\n"} - Assess general health and status of any diabetes-related
              complications.
              {"\n"} - Aim for optimal weight and, if overweight, start weight
              loss before pregnancy with healthy eating.
              {"\n"} - Review medications.
              {"\n"} - Start folic acid supplementation (1.0 mg daily).
              {"\n"} - Ensure appropriate vaccinations have occurred.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              If you ever find out you are pregnant, contact your diabetes team
              as soon as possible so specialized prenatal care can be arranged
              immediately.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DiabetesAndPregnancy;

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
