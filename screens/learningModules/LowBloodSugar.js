import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class LowBloodSugar extends Component {
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
          title="Low Blood Sugar"
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
              A low blood sugar ("hypoglycemia") is any true measured low sugar
              less than 4.0 mmol/L. This is an unfortunate side effect of having
              relatively too much insulin.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Symptoms you may feel if your sugar is low are the following:
              {"\n"} - Trembling, palpitations, sweating, hunger{"\n"} -
              Confusion, weakness, dizziness, drowsiness, difficulty
              concentrating
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Some people do not feel their low sugar. This does not mean you
              are okay: rather, this can be dangerous as there is no warning.
              Talk to your doctor if this is happening.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              If your sugar is low, you must treat with fast sugar of at least
              15 grams. You can treat with the following:
              {"\n"} - Glucose tablets, for example 4 Dex4 tablets
              {"\n"} - 3 packets of sugar dissolved in water
              {"\n"} - 6 lifesavers
              {"\n"} - 150 ml of juice
              {"\n"} - 1 tablespoon of honey
              {"\n"}Note that chocolate is not the best way to treat low blood
              sugar because it also contains fat as well as sugar!
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              "Severe hypoglycemia" is when you need help treating your low
              sugar because you are unwell (e.g. loss of consciousness,
              seizure). In this situation where you cannot swallow sugar, the
              antidote to insulin (glucagon) may be helpful. This is also
              helpful when you are alone, your blood sugar is low, and you
              cannot swallow sugar. Talk to your doctor about glucagon
              injections or the intranasal spray.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              This is also why having a medical bracelet is important. If you
              are ever in a situation where you cannot help yourself, such as a
              severe hypoglycemia, a medical bracelet can tell first responders
              that you have type 1 diabetes.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LowBloodSugar;

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
