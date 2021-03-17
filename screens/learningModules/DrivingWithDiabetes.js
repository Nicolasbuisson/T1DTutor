import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class DrivingWithDiabetes extends Component {
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
          title="Driving with Diabetes"
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
              To ensure safe driving, there are important aspects of your
              diabetes care you need to be aware of before getting in a car. The
              major concern is low blood sugar, as having a low blood sugar
              while driving is considered "impaired driving."
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              To avoid this:
              {"\n"} - Measure your blood glucose level before driving: it
              should be around 5 mmol/L, i.e. “5 to drive”
              {"\n"} - Do not start driving if your blood glucose level is less
              than 4 mmol/L.
              {"\n"} - If your blood glucose is less than 4 mmol/L, do not start
              driving until you have ingested 15 grams of carbohydrate, you have
              retested and your blood glucose is at least 5 mmol/L. Wait for 40
              minutes as it takes time for judgment and reflexes to the brain to
              recover fully from hypoglycemia.
              {"\n"} - Always keep an emergency supply of fast-acting
              carbohydrate, such as dextrose tablets, within easy reach inside
              the vehicle
              {"\n"} - Carry your glucose meter and supplies.
              {"\n"} - If you go on a long drive, measure your blood glucose at
              least every 4 hours while driving. You can also wear a real-time
              continuous blood glucose monitoring device.
              {"\n"} - Consider measuring your blood glucose more frequently if
              there are factors that may increase your risk of hypoglycemia,
              such as recent physical activity or a delay in eating or skipping
              a meal.
              {"\n"} - If hypoglycemia develops while driving, stop the vehicle
              in a safe location and remove the keys from the ignition. Treat
              the low blood glucose and wait 40 minutes before driving.
              {"\n"} - On longer journeys, take regular meals, snacks and
              periods of rest.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DrivingWithDiabetes;

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
