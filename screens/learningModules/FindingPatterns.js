import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class FindingPatterns extends Component {
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
          title="Finding Patterns"
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
              It can be difficult to find patterns to your blood sugars. Some
              days may feel like you get different blood sugars for the same
              dose of insulin. Knowing key concepts are helpful.
              {"\n\n"}
              Always remember there is a close relationship between exercise,
              insulin dose, and food. Any change to one can change the other.
              Eating more starch at a meal can increase your blood sugar. To
              prevent this, you can either increase your insulin dose, or do
              exercise.
              {"\n\n"}
              Though these are the 3 main factors, there are many other
              elements: glycemic index, fat content, stress, infections, change
              in sleeping cycle, and certain medications. Because of this, watch
              for patterns over 2 to 3 days before making changes.
              {"\n\n"}
              Here are some recommendations on how to titrate your insulin based
              on patterns (assuming food and exercise are not the issue). Talk
              to your doctor and diabetes educator to make sure this is right
              for you.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              When you are changing your doses:
              {"\n"} - The most important blood sugar readings are before each
              meal and before going to bed
              {"\n"} - Try and keep good records of your blood sugar and insulin
              doses (either by writing it down or downloading with software)
              {"\n"} - Make sure low blood sugar episodes are dealt with first
              for safety before adjusting any other doses for high blood sugar.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Adjusting injection doses</Text>
            <Text style={styles.text}>
              {"\n"}
              Here are some rules of thumb for low blood sugars:
              {"\n"} - If you have low blood sugar after a meal, the
              rapid-acting insulin given before the low must be changed. For
              example, if you have low blood sugar after lunch, your dose of
              rapid-acting insulin at lunch needs to be reduced.
              {"\n"} - If you have low blood sugar during the night, or in the
              morning when waking up, your long-acting insulin needs to be
              reduced. This should be corrected as soon as possible - having low
              sugar when you are not awake can be very dangerous.
              {"\n"} - If you have low blood sugar only after your sugar is high
              and you've given extra insulin to correct, your sliding scale
              needs to be adjusted. Talk to your healthcare team to change this.
              {"\n"} - Whenever insulin doses need to be reduced, do so by 1 - 2
              units each time.
              {"\n\n"}
              Here are some rules of thumb for high blood sugars:
              {"\n"} - If your blood sugar rises by at least 3 mmol/L after a
              meal, the rapid-acting insulin taken at the meal needs to be
              increased.
              {"\n"} - if your blood sugar rises by at least 3 mmol/L between
              bedtime and morning, your long-acting insulin may need to be
              increased, as long as blood sugar did not go low overnight. An
              untreated low blood sugar at night can cause your sugar to go high
              after. If not, increase your long-acting insulin.
              {"\n"} - If your blood sugar is high after a low blood sugar,
              preventing the low blood sugar may prevent the high blood sugar.
              {"\n"} - If you notice your blood sugar is high at times you are
              snacking without giving insulin, snacking is the cause. If you do
              not have an insulin dose for snacking, talk to your healthcare
              team about this. Otherwise, try to avoid snacking on foods with
              starch or sugar when you are hungry.
              {"\n"} - Whenever insulin doses need to be increased, do so by 1
              to 2 units.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Adjusting pump settings</Text>
            <Text style={styles.text}>
              {"\n"}
              Before discussing dose adjustments, remember the following about
              your pump settings:
              {"\n"} - An insulin: carbohydrate ratio (ICR) is the ratio of how
              many units to give per grams of carbohydrates. For example, a
              ratio of 1:10 means you give 1 unit for 10 grams. If you need to
              give more insulin, the ratio needs to go down because you are
              dividing by a smaller number (and vice versa).
              {"\n"} - Basal rates are measured in units per hour.
              {"\n"} - Insulin sensitivity factor or correction factor (ISF/CF)
              are terms used in different pumps. Both are used to calculate
              extra doses of insulin when your sugar is high. This is also a
              ratio. A factor of 1:4, or 4, means that for 1 unit of insulin,
              your blood sugar drops by 4 mmol/L. If you need to give more
              insulin, the number needs to go down because you are dividing by a
              smaller number (and vice versa).
              {"\n\n"}
              Here are some rules of thumb for low blood sugars:
              {"\n"} - If you have low blood sugar after a meal, the ICR used
              must be changed. For example, if you have low blood sugar after
              lunch, your lunchtime ICR needs to be increased by 0.5 to 1. If
              your ICR is 1:10, increase to 1: 10.5 or 1:11 (the option of 0.5
              depends on the pump type).
              {"\n"} - If you have low blood sugar a long time after a meal or
              overnight, your basal rates right before the episode should be
              decreased. Decrease your basal rates by at least 0.05 units/hour.
              For example, if you have different basal rates at midnight and 3
              am, and you have a low blood sugar at 2 am, your midnight basal
              rate needs to be reduced.
              {"\n"} - If your blood sugar drops after each correction dose of
              insulin, your ISF/CF needs to be increased by 0.5 to 1. For
              example, if your ISF/CF is 4, you should increase it to 4.5 or 5.
              {"\n\n"}Overnight low blood sugar should be corrected as soon as
              possible - having low sugar when you are not awake can be very
              dangerous.
              {"\n\n"}
              Here are some rules of thumb for high blood sugars:
              {"\n"} - If your blood sugar rises by at least 3 mmol/L right
              after a meal, your ICR should be decreased by 0.5 to 1. For
              example, if your ICR is 1:10, you can decrease to 1: 9 or 1: 9.5.
              {"\n"} - If your blood sugar rises by at least 3 mmol/L a long
              time after a meal or overnight, your basal rates before the rise
              should be increased by 0.05 units/hour. If your blood sugar is
              high in the morning, make sure there was no low blood sugar
              overnight. Sometimes an untreated low blood sugar at night can
              cause a stress response that makes your sugar high. If this is not
              the case, increase your basal rates before.
              {"\n"} - If your blood sugar is high after a low blood sugar,
              preventing the low blood sugar may prevent this.
              {"\n"} - If you notice your blood sugar is high at times you are
              snacking without giving insulin, snacking is the cause. If you do
              not have an insulin dose for snacking, talk to your healthcare
              team about this. Otherwise, try to avoid snacking on foods with
              starch or sugar when you are hungry.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Adjusting the settings of your pump
            </Text>
            <Text style={styles.text}>
              {"\n"}
              Before discussing dose adjustments, remember the following about
              your pump:
              {"\n"} - An insulin: carbohydrate ratio (ICR) is the ratio of how
              many units to give per grams of carbohydrates. For example, a
              ratio of 1:10 means you give 1 unit for 10 grams. If you need to
              give more insulin, the ratio needs to go down because you are
              dividing by a smaller number (or vice versa).
              {"\n"} - Basal rates are measured in units per hour.
              {"\n"} - Insulin sensitivity factor (ISF) is used to calculate
              extra doses of insulin to correct your sugar when it is high. This
              is also a ratio. For example, a factor of 1:4, or 4, means that
              for 1 unit of insulin, your blood sugar drops by 4 mmol/L. If you
              need to give more insulin, the number needs to go down because you
              are dividing by a smaller number (and vice versa).
              {"\n"} - Active insulin time is how long a dose of insulin is
              active in your system. This influences how much insulin you can
              give yourself after your last dose of insulin.
              {"\n"} - When 670G is in Manual Mode, all these settings,
              including your targe blood sugar, can be changed. When you are in
              AutoMode, only the ICR and active insulin time can be changed,
              while your basal rates, ISF, and targets are set by the pump.
              {"\n\n"}
              Here are some rules of thumb for low blood sugars:
              {"\n"} - If you have low blood sugar right after a meal, the ICR
              used before the episode must be changed to prevent low blood
              sugar. For example, if you have low blood sugar after lunch, your
              lunchtime ICR needs to be increased by 0.5 to 1. If your ICR at
              lunchtime is 1:10, increase to 1: 10.5 or 1:11 (the option of 0.5
              depends on the pump type).
              {"\n"} - If your blood sugar is below target a long time after a
              meal or overnight, your active insulin time should be increased by
              15 - 30 minutes.
              {"\n\n"}
              Here are some rules of thumb for high blood sugars:
              {"\n"} - If your blood sugar rises by at least 3 mmol/L right
              after a meal, your ICR needs to be decreased by 0.5 to 1. For
              example, if your ICR is 1:10, you can decrease to 1: 9 or 1: 9.5.
              {"\n"} - If your blood sugar remains above target a long time
              after a meal or overnight, your active insulin time needs to be
              decreased by 15 - 30 minutes.
              {"\n"} - If your blood sugar is high after a low blood sugar,
              preventing the low blood sugar may prevent this.
              {"\n"} - If you notice your blood sugar is high at times you are
              snacking without giving insulin, snacking is the cause. If you do
              not have an insulin dose for snacking, talk to your healthcare
              team about this. Otherwise, try to avoid snacking on foods with
              starch or sugar when you are hungry.
              {"\n\n"}
              If you remain long periods of time in Manual Mode, your ISF and
              basal rates may need to be adjusted. If you are using Manual Mode,
              here are other rules to consider:
              {"\n"} - If you have low blood sugar a long time after a meal or
              overnight, your basal rates right before the episode should be
              decreased. Decrease your basal rates by at least 0.05 units/hour.
              For example, if you have different basal rates at midnight and 3
              am, and you have a low blood sugar at 2 am, your midnight basal
              rate needs to be reduced.
              {"\n"} - If your blood sugar rises by at least 3 mmol/L a long
              time after a meal or overnight, your basal rates before the rise
              need to be increased by 0.05 units/hour.
              {"\n"} - If your blood sugar drops after each correction dose of
              insulin, your ISF needs to be increased by 0.5 to 1. If your ISF
              is 4, you should increase it to 4.5 or 5.
              {"\n"} - If your blood sugar is high after a low blood sugar,
              preventing the low blood sugar may prevent this.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Control-IQ</Text>
            <Text style={styles.text}>
              {"\n"}
              Using Control-IQ on your Tandem t:slim pumps means all your pump
              settings are still at work, but with a little help:
              {"\n"} - When your sugar is above 8.9, your basal rate goes up
              {"\n"} - When your sugar is above 10.0, a correction bolus is
              given
              {"\n"} - When your sugar is less than 6.25, your basal rate goes
              down
              {"\n"} - When your sugar is less than 3.9, your bolus rate
              suspends
              {"\n\n"}
              Control-IQ also includes "Sleep Activity" and "Exercise Activity."
              {"\n"} - In Sleep Activity, when sugar is above 6.7, basal rate
              goes up. There is no correction bolus. Thresholds for basal
              decrease and suspension are the same.
              {"\n"} - In Exercise Activity, when sugar is less than 7.8, basal
              rate goes down. When sugar is less than 4.4, basal rate is
              suspended. Thresholds for basal increase and correction bolus are
              the same.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FindingPatterns;

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
});
