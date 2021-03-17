import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class MythBusters extends Component {
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
          title="Myth Busters"
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
              <Text style={styles.title}>Myth: </Text>T1D is caused by eating
              too much sugar
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>T1D results when a
              person’s immune system attacks and destroys the cells in the
              pancreas that produce insulin. Eating too much sugar or having an
              unhealthy lifestyle DOES NOT cause T1D. T1D is an auto-immune
              disease that cannot be prevented.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>People with T1D are not
              allowed to eat sugar
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>People with T1D do not
              need to limit what they can eat. Insulin is administered to cover
              the carbs they eat, including sugar. Eating too much sugar is
              unhealthy for everyone, and moderation is key. Sugar is also
              needed for treating low blood sugar or "hypolycemia".
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>Sugar-free foods are
              “free” and people with T1D can eat as much as they want of these
              foods
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>Many sugar-free foods
              still have carbohydrates and may even have more carbohydrates than
              a product just made with pure sugar. It’s always important to
              check nutrition labels because product packaging can be deceiving.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>High or low blood sugars
              are a sign that a person with T1D is not looking after themselves
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>A low or high blood sugar
              can happen for many reasons: insulin, exercise, illness, stress,
              hormones, etc. Sometimes these can be prevented but sometimes they
              cannot -- it is unfortunately the nature of the disease.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>T1D is hereditary
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>The genetics of T1D are
              complicated, and are the subject of much research. Many people
              with T1D have no family history. Research shows that genetic
              factors are important and that developing T1D is a complicated
              interaction between genetic predisposition and certain
              environmental triggers such as viruses.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>People with T1D shouldn’t,
              or can’t have children
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>Women with Type 1 Diabetes
              who manage their diabetes well during pregnancy can give birth to
              healthy babies. Women are recommended to have their A1C within
              certain limits before pregnancy to prevent complications.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>Taking more injections, or
              using a pump means that your diabetes is “really bad”
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>Taking more injections or
              using a pump means that you may have better control of your
              diabetes, and also have more flexibility with your meals.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>Adults can’t get T1D
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>T1D does not discriminate
              – it affects babies, children, teens and adults. This is why Type
              1 Diabetes is no longer called “Juvenile Diabetes”.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Myth: </Text>People with T1D have a
              weak immune system
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Fact: </Text>Although T1D is an
              auto-immune disease, people with T1D do not have a weak immune
              system. They are not more susceptible to getting viral illnesses
              like the flu, or Covid-19 although these illnesses can make blood
              sugars more difficult to manage.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Text style={styles.title}>Other Diabetes Facts</Text>
              {""}
            </Text>
            <Text style={styles.text}>
              Diabetes Canada estimates that almost 3.7 million Canadians have
              some form of diabetes.
            </Text>
            <Text style={styles.text}>
              Approximately 10% of people with diabetes have type 1 diabetes,
              and approximately 90% have type 2.{" "}
            </Text>
            <Text style={styles.text}>
              Insulin was discovered and extracted from the islet cells of a
              dog’s pancreas in London, Ontario in 1921 by the Canadian team of
              Dr Frederick Banting, Professor J.J.R. Macleod, Charles Best and
              James Collip.
            </Text>
            <Text style={styles.text}>
              The first recipient of an insulin injection was a dog in Banting’s
              laboratory named Marjorie, on July 30, 1921.
            </Text>
            <Text style={styles.text}>
              The first human to receive an insulin injection was 14-year-old
              Leonard Thompson, at the Toronto General Hospital on January 11,
              1922.
            </Text>
            <Text style={styles.text}>
              Banting and Macleod were awarded the Nobel Prize in Physiology or
              Medicine in 1923 for their discovery.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MythBusters;

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
