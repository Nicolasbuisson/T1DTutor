import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class AlcoholAndOtherSubstances extends Component {
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
          title="Alcohol and other Substances"
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
            <Text style={styles.title}>Alcohol</Text>
            <Text style={styles.text}>
              People with type 1 diabetes should be aware that alcohol may
              result in delayed low blood sugar (hypoglycemia) up to 24 hours
              after alcohol consumption. Alcohol should be limited to 2 standard
              drinks/ day or less than 10 drinks/ week for women, and limited to
              3 standard drinks/ day or less than 15 drinks/ week for men.
              {"\n\n"}
              Alcohol can:
              {"\n"} - affect judgement
              {"\n"} - provide empty calories that might lead to weight gain if
              taken in excess
              {"\n"} - increase blood pressure and triglycerides (a type of fat
              in the blood)
              {"\n"} - cause damage to liver and nerves including brain and
              sexual organs
              {"\n"} - contribute to inflammation of the pancreas
              {"\n"} - dehydrate the body which is very dangerous in someone
              with high blood sugar
              {"\n"} - worsen eye disease
              {"\n\n"}
              For young people in particular, alcohol use:
              {"\n"} - can lead to addiction
              {"\n"} - is associated with a dramatic increase in injuries and
              death
              {"\n\n"}
              To prevent hypoglycemia when drinking alcohol:
              {"\n"} BEFORE drinking alcohol:
              {"\n"} - Eat regular meals, do not skip insulin, and check your
              blood sugar levels frequently (keep your blood glucose meter with
              you).
              {"\n"} - Always have a treatment for low blood sugar with you
              (such as 4 glucose tablets or 150 mL regular pop or 6 Life
              Savers®).
              {"\n"} - Wherever you are, make sure someone with you knows your
              signs and symptoms of low blood sugar and how to treat it so they
              can help you.
              {"\n"} - Be aware that glucagon, a treatment for low blood sugar,
              will not work while alcohol is in the body. Because of this, make
              sure that someone knows to call an ambulance if you pass out.
              {"\n"} - Wear diabetes identification such as a MedicAlert®
              bracelet.
              {"\n\n"} WHILE drinking alcohol:
              {"\n"} - Eat carbohydrate-rich foods when drinking alcohol.
              {"\n"} - Eat extra carbohydrate-rich foods if you are dancing,
              playing sports or doing other physical activity.
              {"\n"} - Always pour your own drinks.
              {"\n\n"} AFTER drinking alcohol:
              {"\n"} - Tell a responsible person that you have been drinking.
              They should look for low blood sugar symptoms in the case you
              cannot.
              {"\n"} - Check your blood sugar before going to bed. Eat a
              carbohydrate snack if your blood sugar is lower than usual.
              {"\n"} - Set an alarm or have a responsible person wake you up
              through the night and early morning – a delayed low blood sugar
              can occur anytime up to 24 hours after drinking alcohol.
              {"\n"} - You need to get up on time the next day for any food or
              insulin you normally take. Missed insulin can lead to high blood
              sugar, ketones and diabetic ketoacidosis (DKA).
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Cannabis (Marijuana)</Text>
            <Text style={styles.text}>
              Cannabis can have a number of effects on blood glucose control,
              depending on dosage. These include:
              {"\n"} - Memory and concentration-related problems which may
              affect blood sugar control.
              {"\n"} - Increased appetite, or ‘munchies’ – a craving for
              sweet/fatty food, which can then lead to high blood sugar
              {"\n"} - Insulin resistance (i.e. you need more insulin to have an
              effect than before) and high blood sugar when heavily used.
              {"\n\n"}Cannabis indirectly affects blood glucose levels due to
              the drugs’ effect on the brain, can lead to users not recognizing
              symptoms of low blood sugar or confusing such symptoms with the
              effects of the drug.
              {"\n\n"}Though cannabis has only been legal in Canada recently,
              prior studies have shown the following:
              {"\n"} - those with type 1 diabetes who use it on a regular basis
              have higher blood sugars on average than those who do not
              {"\n"} - those with type 1 diabetes who use it regularly are at
              double the risk of diabetic ketoacidosis
              {"\n"} - chronic cannabis use can trigger a cyclic vomiting
              syndrome, or "hyperemesis", which in itself can trigger diabetic
              ketoacidosis.
              {"\n\n"}If you are to use cannabis, please be aware of the risks
              associated with it. Never feel afraid to tell your healthcare
              provider about your use, as it allows for them to help you more.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AlcoholAndOtherSubstances;

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
