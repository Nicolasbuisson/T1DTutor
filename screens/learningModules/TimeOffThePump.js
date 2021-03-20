import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class TimeOffThePump extends Component {
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
          title="Time Off the Pump"
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
            <Text style={styles.title}>
              You may need to come off your pump:
            </Text>
            <Text style={styles.text}>
              {"\n"} - if you experience pump malfunction
              {"\n"} - during diagnostic tests or hospitalizations
              {"\n"} - during planned time off the pump
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Plan ahead:</Text>
            <Text style={styles.text}>
              -
              <Text style={{ fontWeight: "700" }}>
                Know your pump settings.
              </Text>
              Always keep a copy of your most recent pump settings.
              {"\n"} -{" "}
              <Text style={{ fontWeight: "700" }}>Know your MDI regimen.</Text>{" "}
              Determine your insulin dose with your MD and get a prescription.
              {"\n"} -{" "}
              <Text style={{ fontWeight: "700" }}>Know who to call.</Text>{" "}
              Troubleshoot with{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => this.props.navigation.navigate("WhoToCall")}
              >
                the technical support team
              </Text>{" "}
              from your pump company.
              {"\n"} -{" "}
              <Text style={{ fontWeight: "700" }}>
                Test blood sugars more often
              </Text>{" "}
              to prevent low or high blood glucose.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              While not receiving insulin from your pump, you must give insulin
              by injection to prevent ketoacidosis.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Use this table to guide you:</Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Duration off the pump</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Rapid insulin as coverage</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Long-acting insulin as coverage</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Meal (rapid) bolus</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{"<"} 1 hour</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    - No additional insulin {"\n"} - Give correction bolus if
                    blood sugar is high
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>No</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Bolus for meals if eating while disconnected</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>1-5 hours</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    - Take 80% of basal insulin to be missed by injection
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>No</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Bolus for meals</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{">"} 5 hours</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    - Continue to inject rapid insulin every 4 hours (or every 2
                    hours if using Fiasp)
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>No</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Bolus for meals</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{">"} 12 hours</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>- You will need to be given long-acting insulin</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Use your backup long-acting insulin</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Bolus for meals</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Going off the pump:</Text>
            <Text style={styles.text}>
              {"\n"} 1. Plan to stop the pump around dinner time
              {"\n"} 2. Bolus for dinner and disconnect your pump
              {"\n"} 3. Inject your prescribed dose of long-acting insulin
              {"\n"} 4. Continue the inject long-acting insulin at the same time
              each night until your go back on your pump
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Going back on the pump:</Text>
            <Text style={styles.text}>
              {"\n"} 1. Plan to restart the pump in the morning
              {"\n"} 2. Restart your pump using your previous pump setting
              {"\n"} 3. You may need to run a temporary basal rate for a period
              of time to prevent hypoglycemia
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Check your blood sugar more frequently while transitioning off or
              on to your pump.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TimeOffThePump;

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
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 3,
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },
  table: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "inherit",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "inherit",
  },
  durationColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "18%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  rapidColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "33%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  longColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "24.5%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
});
