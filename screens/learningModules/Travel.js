import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class Travel extends Component {
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
          title="Travel"
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
            <Text style={styles.italicized}>
              Travel check list adapted by Diabetes Canada
            </Text>
            <Text style={styles.text}>
              You are going traveling. What should you bring? How can you
              prepare? Here is a list of some of the things you should keep in
              mind while traveling with diabetes.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>General travel tips</Text>
            <Text style={styles.text}>
              {"\n"} - Make sure your vaccinations are up to date for your
              travel destination.
              {"\n"} - Have a letter from your doctor stating that you need to
              carry medicines or supplies because some airlines and some
              countries require you to.
              {"\n"} - Carry a list of your medications- you can get this from
              your pharmacist.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Carrying insulin and other supplies
            </Text>
            <Text style={styles.text}>
              {"\n"} - Always carry your insulin and supplies with you in your
              carry-on luggage. Do not place insulin in your checked luggage as
              the temperature fluctuations can damage it.
              {"\n"} - When traveling by air, you may carry liquids such as
              insulin, juice or gels to treat hypoglycemia, etc., even in
              amounts greater than 100 ml. Just make sure they’re accessible and
              declare them to security when being screened.
              {"\n"} - Syringes and needles are also allowed in your carry-on,
              as long as you are also carrying with you the injectable
              medication (e.g. insulin).
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Storing insulin while travelling</Text>
            <Text style={styles.text}>
              {"\n"} - Insulin must be stored properly, as it will spoil if left
              in temperatures that are too hot or too cold.
              {"\n"} - Insulin keeps its strength at room temperature for 30
              days. If traveling in hot temperatures, store your insulin in an
              insulated bag. If traveling in cold temperatures, keep your
              insulin close to your body to stop it from freezing.
              {"\n"} - You can carry a small sharps container to store used
              needles and syringes while traveling.
              {"\n"} - Take spare syringes and insulin and backups of any other
              medications or medical supplies.
              {"\n"} - If hand-washing facilities are not available, carry
              alcohol swabs, moist towelettes or hand sanitizer to clean your
              fingers prior to testing.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Adjusting insulin for time zone changes
            </Text>
            <Text style={styles.text}>
              {"\n"} - It is a good idea to speak with your doctor or diabetes
              educator prior to making changes to your medication schedule or
              dosage.
              {"\n"} - When travelling east, your travel day will be shorter. If
              you lose more than two hours, you may need to take fewer units of
              intermediate or long-acting insulin.
              {"\n"} - When travelling west, your travel day will be longer. If
              you gain more than two hours, you may need to take extra units of
              short-acting insulin and more food.
              {"\n"} - If you are crossing time zones, you should discuss your
              meal and insulin schedule with your doctor or diabetes educator.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Airport Screening</Text>
            <Text style={styles.text}>
              {"\n"} - You are not required to disclose that you have diabetes
              to screening personnel.
              {"\n"} - You are not required to remove your insulin pump for
              screening. Just inform the Screening Officer that you are wearing
              one.
              {"\n"} - Do not wear an insulin pump or CGM through the body
              scanner or place your insulin pump through the x-ray machine as
              they may affect the devices’ functioning. Instead, you can ask the
              screening officer to perform a physical search instead (in a
              private location, if you wish).
              {"\n"} - Handheld metal detectors do not affect the functioning of
              insulin pumps or CGMs.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Traveler's Checklist</Text>
            <Text style={styles.text}>
              Before you leave, remember to get:
              {"\n"} - Travel health insurance
              {"\n"} - A list of your medications
              {"\n"} - A letter from your doctor stating:
              {"\n    "} - That you need to carry syringes or needles for
              insulin pens and lancets as part of your insulin treatment. Having
              this will be helpful if your luggage is examined at airport
              security checkpoints.
              {"\n    "} - The supplies you need for your diabetes care. Be sure
              to keep your syringes, needles, pens, and lancets in the same
              boxes that they came in with the original prescription label on
              them.
              {"\n    "} - That you need to carry pump supplies, glucose
              measuring supplies, insulin, and extra syringes of part of your
              treatment. Having this will be helpful if your luggage is examined
              at airport security checkpoints.
              {"\n    "} - A list of the supplies you need for your diabetes
              care (including hypoglycemia treatment). If prescribed, keep them
              in the same boxes that they came in with the original prescription
              label on them.
              {"\n"} - Ask your doctor, diabetes educator or health care team
              about:
              {"\n    "} - Illness management
              {"\n    "} - Low blood sugar management
              {"\n    "} - Adjustments for meals, insulin and medications in
              different time zones
              {"\n    "} - Avoiding illness caused by contaminated food and
              water
              {"\n    "} - Tips for adjusting your medication if required
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Packing list</Text>
            <Text style={styles.text}>
              {"\n"} - Telephone numbers of your doctor and diabetes educator
              {"\n"} - Extra supply of insulin
              {"\n"} - Blood glucose meter (with or without logbook)
              {"\n"} - Fast-acting sugar to treat low blood sugar
              {"\n"} - Snacks to cover delayed meals, such as crackers and fruit
              {"\n"} - Extra supply of syringes, needles and an extra insulin
              pen if used
              {"\n"} - Ketone-testing strips (urinary or blood)
              {"\n"} - Glucagon
              {"\n"} - CGM supplies
              {"\n"} - Batteries or chargers for any medical device that so
              requires
              {"\n"} - Insulin pump supplies
              {"\n"} - Extra insulin pump if available or backup long acting
              insulin in case of pump malfunction
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Travel;

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
  italicized: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
    fontStyle: "italic",
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
