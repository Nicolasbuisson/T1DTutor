import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class SickDayManagement extends Component {
  constructor() {
    super();
    this.state = {
      totalBasal: 0,
      totalBolus: 0,
      totalInsulin: 0,
    };

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
          title="Sick Day Management"
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
            <Text style={styles.title}>
              Stress hormones are released when you’re sick that make your blood
              sugars higher than usual. More careful management of your diabetes
              is important to prevent diabetic ketoacidosis (DKA).
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>1. Test your blood sugar often:</Text>
            <Text style={styles.text}>
              check every 2 to 4 hours and during the night.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              2. Continue taking your insulin. Be ready to adjust your insulin
              doses.
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "700" }}>
                You may need extra insulin even if you are not eating as usual
              </Text>
              <Text style={styles.text}>
                {"\n"} - Continue your long-acting (basal) insulin.
                {"\n"} - Rapid (bolus) insulin can be taken more often to
                correct for higher blood sugars.
                {"\n"} - You may also need extra rapid (bolus) insulin if you
                have ketones in your blood or urine.
              </Text>
              <Text style={{ fontWeight: "700" }}>
                You many need less insulin
              </Text>{" "}
              <Text style={styles.text}>
                {"\n"} - If you are vomiting, have diarrhea or do not feel like
                eating, you may need less insulin.
                {"\n"} - Test and adjust.
                {"\n"} - Do not stop your insulin completely.
              </Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>3. Be ready to check for ketones.</Text>
            <Text style={styles.text}>
              If your blood sugar is {">"}16 mmol/L (or 10 mmol/L if you take an
              SGLT2i, see section 3b) on two tests in a row, check your blood
              for ketones every 4 hours. You will need more rapid (bolus)
              insulin to get rid of ketones. Use the table to guide you.
            </Text>
          </View>
          <View style={styles.listItem}>
            <View>
              <Text>Total basal insulin:</Text>
              <TextInput></TextInput>
              <Text>Total bolus insulin:</Text>
              <TextInput></TextInput>
              <Text>Total daily dose of insulin:</Text>
            </View>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>Blood sugar</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>Ketones</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Recommended action</Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text>
                    Your extra dose (in addition to the usual correction dose)
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{"<"}3.9 mmol/L</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>none</Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>
                    No extra insulin. {"\n"} Decrease usual meal bolus as
                    directed. {"\n"}
                    If vomiting{" "}
                    <Text
                      style={{ textDecorationLine: "underline" }}
                      onPress={() =>
                        this.props.navigation.navigate("WhoToCall")
                      }
                    >
                      contact
                    </Text>{" "}
                    your diabetes team
                  </Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text> </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>4-16 mmol/L</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Blood: {"<"}0.6mmol/L {"\n"}
                    Urine: negative to trace
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>usual insulin dose</Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text> </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>4-16 mmol/L</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Blood: {">"}0.6mmol/L {"\n"}
                    Urine: trace to moderate
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Take 10% of TDD</Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text> </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Blood: {"<"}0.6 mmol/L {"\n"}
                    Urine: negative to trace
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Take 10% of TDD</Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text> </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Blood: 0.7 to 1.4 mmol/L {"\n"}
                    Urine: trace to moderate
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Take 15% of TDD</Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text> </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.durationColumn}>
                  <Text>{">"}16 mmol/L</Text>
                </View>
                <View style={styles.rapidColumn}>
                  <Text>
                    Blood: 1.5 to 3.0 mmol/L {"\n"}
                    Urine: moderate to large
                  </Text>
                </View>
                <View style={styles.longColumn}>
                  <Text>Take 20% of TDD</Text>
                </View>
                <View style={styles.durationColumn}>
                  <Text> </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>4. Stay well hydrated</Text>
            <Text style={styles.text}>
              To avoid dehydration, drink{" "}
              <Text style={{ fontWeight: "700" }}>1 cup of water</Text> or
              sugar-free fluids{" "}
              <Text style={{ fontWeight: "700" }}>every hour</Text>.{"\n"}
              Some examples are: diet pop, clear broth, sugar-free Jell-O or
              Crystal Lite.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>5. Choose easy-to-digest foods</Text>
            <Text style={styles.text}>
              If you are not able to eat your meal, try eating 15g of
              carbohydrate every hour.
              {"\n"}Some examples are:
              {"\n"}Solids:
              {"\n"} - 6 soda crackers
              {"\n"} - 1 slice of bread
              {"\n"} - 4 melba toasts
              {"\n"} - 1 small banana
              {"\n"} - ½ cup got cereal
              {"\n\n"}Liquids:
              {"\n"} - ½ cup juice
              {"\n"} - 1 cup milk
              {"\n"} - ½ cup Glucerna
              {"\n"} - 1 cup Gatorade
              {"\n"} - 1 twin popsicle (2 sticks)
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              6. Consider stopping some of your medications.
            </Text>
            <Text style={styles.text}>
              If you become dehydrated, you should temporarily stop taking
              certain medications. Speak to your{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => this.props.navigation.navigate("WhoToCall")}
              >
                doctor or pharmacist
              </Text>{" "}
              .
            </Text>
            <View>
              <Text style={styles.text}>Blood pressure pills</Text>
              <TextInput></TextInput>
              <View></View>
            </View>
            <View>
              <Text style={styles.text}>Diabetes pills</Text>
              <TextInput></TextInput>
              <View></View>
            </View>
            <View>
              <Text style={styles.text}>
                Anti-inflammatory pain medications
              </Text>
              <TextInput></TextInput>
              <View></View>
            </View>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>7. Sick day checklist</Text>
            <Text style={styles.text}>
              {"\n"} - Glucometer and logbook
              {"\n"} - Ketone meter and strips
              {"\n"} - Thermometer
              {"\n"} - Sugar-free beverages
              {"\n"} - Glucose tablets(for low blood sugar)
              {"\n"} - Glucagon kit or Baqsimi(for a severe low)
              {"\n"} - Medication list
              {"\n"} - Sick day handout (or this app)
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>8. When to seek help?</Text>
            <Text style={styles.text}>
              <Text style={{ textDecorationLine: "underline" }}>
                Go to the ER:
              </Text>
              {"\n"} - If you are unable to eat or drink or keep fluids down
              {"\n"} - If you are not able to keep your blood sugars above 4
              mmol/L
              {"\n"} - If your blood ketone level is above 3.0 mmol/L
              {"\n"} - If you are taking extra insulin, but your blood sugars do
              not go down
              {"\n"} - If you have a fever lasting longer than 24 hours
              {"\n"} - If you are very tired, short of breath, or have severe
              abdominal pain
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SickDayManagement;

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
    flexBasis: "31%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
});
