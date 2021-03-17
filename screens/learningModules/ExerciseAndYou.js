import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class ExerciseAndYou extends Component {
  constructor() {
    super();
    this.state = {
      weight: 0,
      moderateCarbs: 0,
      intenseCarbs: 0,
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.calculateCarbs = this.calculateCarbs.bind(this);
    this.onInputChangeWeight = this.onInputChangeWeight.bind(this);
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }

  calculateCarbs(value) {
    this.setState({
      moderateCarbs: +value * 0.5,
      intenseCarbs: +value,
    });
  }

  onInputChangeWeight(text) {
    this.setState({ weight: text });
    this.calculateCarbs(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Exercise and You"
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
          {/* FOR INJECTIONS */}
          <View style={styles.listItem}>
            <Text style={styles.title}>
              You are being active. That’s great!
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "700" }}>
                Prevention of low blood sugars
              </Text>{" "}
              requires balancing activity with carbs and insulin. Plan ahead!
              Exercise {">"}30 minutes will likely require extra carbs or
              adjustment to your insulin.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Calculate your extra carbs:</Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Weight</Text>
                </View>
                <View style={styles.inputColumn}>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.onInputChangeWeight(text)}
                    keyboardType="numeric"
                    value={this.state.weight}
                    placeholder="Enter Weight"
                  ></TextInput>
                  <Text>Kg</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Approximate extra carbs for activity</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Moderate activity</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>~0.5g/kg/hr</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>{this.state.moderateCarbs}g *</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Intense activity</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Up to 1.0g/kg/hr</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>{this.state.intenseCarbs}g *</Text>
                </View>
              </View>
              <Text style={styles.text}>
                * Can be consumed prior, during and/or after exercise
              </Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Insulin Adjustment:</Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text></Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Timing of exercise</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Insulin adjustment</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 1</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Activity within 2 hours after a meal</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Reduce meal bolus by 25-75%</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 2</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Activity{" "}
                    <Text style={{ textDecorationLine: "underline" }}>not</Text>{" "}
                    within 2 hours after a meal bolus
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Consume extra carbs</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 3</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>On days of planned physical activity</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>
                    Reduce long-acting basal insulin by 20% (or as recommended
                    by your doctor)
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 4</Text>
                </View>
                <View style={styles.bigColumn}>
                  <Text>
                    Combination of the above options, adapted to your goals
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              If blood sugar is high prior to exericse?
            </Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>
                    Blood glucose before exercise
                  </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>How do you feel?</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>Ketone levels</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>
                    Insulin correction dose
                  </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>Exercise</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.standardColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Not well</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>
                    Elevated{"\n"}
                    {">"}1.5 mmol/L in blood or 2+ in urine
                  </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>yes</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>
                    Postpone vigorous exercise until ketones are negative
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.standardColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Well</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Negative or trace</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text> </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Exercise with caution and test regularly</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Certain types of exercise can induce high blood sugars
            </Text>
            <Text style={styles.text}>
              Due to the release of stress hormones.{"\n"} Examples are
              <Text style={{ fontWeight: "700" }}> resistance</Text> training
              and
              <Text style={{ fontWeight: "700" }}> intense</Text> exercise like
              sprinting, weight-lifting, CrossFit, etc.{"\n"}
              If this occurs, give a small bolus (50% of usual correction dose)
              during exercise recovery
            </Text>
          </View>

          {/* FOR PUMP USERS */}
          <View style={styles.listItem}>
            <Text style={styles.title}>
              You are being active. That’s great!
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "700" }}>
                Prevention of low blood sugars
              </Text>{" "}
              requires balancing activity with carbs and insulin. Plan ahead!
              Exercise {">"}30 minutes will likely require extra carbs or
              adjustment to your insulin.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Calculate your extra carbs:</Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Weight</Text>
                </View>
                <View style={styles.inputColumn}>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.onInputChangeWeight(text)}
                    keyboardType="numeric"
                    value={this.state.weight}
                    placeholder="Enter Weight"
                  ></TextInput>
                  <Text>Kg</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Approximate extra carbs for activity</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Moderate activity</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>~0.5g/kg/hr</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>{this.state.moderateCarbs}g *</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Intense activity</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Up to 1.0g/kg/hr</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>{this.state.intenseCarbs}g *</Text>
                </View>
              </View>
              <Text style={styles.text}>
                * Can be consumed prior, during and/or after exercise
              </Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Insulin Adjustment:</Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text></Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Timing of exercise</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Insulin adjustment</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 1</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Activity within 2 hours after a meal</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Reduce meal bolus by 25-75%</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 2</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Activity{" "}
                    <Text style={{ textDecorationLine: "underline" }}>not</Text>{" "}
                    within 2 hours after a meal bolus
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Consume extra carbs</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Option 3</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Activity{" "}
                    <Text style={{ textDecorationLine: "underline" }}>not</Text>{" "}
                    within 2 hours after a meal bolus
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>
                    Run a temp basal (50-75% reduction) starting 90 minutes{" "}
                    <Text style={{ textDecorationLine: "underline" }}>
                      before
                    </Text>
                    ,{" "}
                    <Text style={{ textDecorationLine: "underline" }}>
                      throughout
                    </Text>{" "}
                    and 1-2 hours{" "}
                    <Text style={{ textDecorationLine: "underline" }}>
                      after
                    </Text>{" "}
                    your activity. Extend for longer duration if needed.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              If blood sugar is high prior to exericse?
            </Text>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>
                    Blood glucose before exercise
                  </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>How do you feel?</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>Ketone levels</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>
                    Insulin correction dose
                  </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text style={{ fontWeight: "700" }}>Exercise</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.standardColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Not well</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>
                    Elevated{"\n"}
                    {">"}1.5 mmol/L in blood or 2+ in urine
                  </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>yes</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>
                    Postpone vigorous exercise until ketones are negative
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.standardColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Well</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Negative or trace</Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text> </Text>
                </View>
                <View style={styles.standardColumn}>
                  <Text>Exercise with caution and test regularly</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Certain types of exercise can induce high blood sugars
            </Text>
            <Text style={styles.text}>
              Due to the release of stress hormones. {"\n"}Examples are
              <Text style={{ fontWeight: "700" }}> resistance</Text> training
              and
              <Text style={{ fontWeight: "700" }}> intense</Text> exercise like
              sprinting, weight-lifting, CrossFit, etc.{"\n"}
              If this occurs, give a small bolus (50% of usual correction dose)
              during exercise recovery.
              {"\n"}
              If you have to correct after every intense activity, consider
              increasing basal insulin rate 90 minutes prior to activity. Start
              with 110% of your usual rate.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Site and tubing</Text>
            <Text style={styles.text}>
              - If you are using your arms or legs as infusion sites, insulin
              may be absorbed quicker after those areas are exercised.
              {"\n"} - Swinging motions from basketball, golf or tennis may
              dislodge an infusion set on the abdomen.
              {"\n"} - If needed, secure the site with additional tape.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Sweating</Text>
            <Text style={styles.text}>
              - Sweating from activity can loosen attachment of your infusion
              set.
              {"\n"} - Try skin-tac or IV prep to help with this.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ExerciseAndYou;

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
  input: {
    backgroundColor: colors.background,
    borderColor: colors.grey,
    borderWidth: 1,
    width: "80%",
    maxHeight: 20,
  },
  inputColumn: {
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "45%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
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
    marginTop: 5,
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
    flexBasis: "25%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  rapidColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "45%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  longColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "30%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  bigColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "75%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  standardColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "20%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
});
