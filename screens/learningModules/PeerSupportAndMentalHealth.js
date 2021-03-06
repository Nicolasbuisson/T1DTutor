import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class PeerSupportAndMentalHealth extends Component {
  constructor() {
    super();

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }
  //TODO ADD THEM LINKS TO ALL THE WEBSITES, APPS, PHONE, SMS
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Peer Support and Mental Health"
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
              Having type 1 diabetes is not easy. It requires a lot of work to
              do day-to-day activities that your peers don't have to do. Over
              time, this can make you angry, sad, or anxious about your
              diabetes.{" "}
              <Text style={styles.boldText}>
                You are not alone in having these feelings.
              </Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              It can be helpful to speak to others who also have type 1
              diabetes. There are many organizations who bring those with type 1
              diabetes to support and help each other. While there are many
              support/interest groups on social media, here are 3 official
              organizations:
              {"\n"} - The Juvenile Diabetes Research Foundation (JDRF) has
              multiple tools and resources on their website, from links to
              clinical trials to support resources
              {"\n  "} - Talk Type 1 is a JDRF program that provides one-one-one
              support, that matches you with a volunteer. You can find the
              online form at [this link].
              {"\n\n"} - Beyond Type 1 is an organization that provides many
              resources to help manage with diabetes (including mental health)
              and help connect with others with type 1. There is also a
              smartphone app!
              {"\n\n"} - The Diabetes Hope Foundation started off as a
              scholarship program but has since branched into supporting youth
              with diabetes across Canada.
              {"\n  "} - The transition resource guide breaks down each
              province's healthcare system addressing your needs, insight from
              other type 1s about transitioning to adulthood, and diabetes
              resources per university/college in Canada
              {"\n  "} - Peer support programs that can match you with a T1D
              buddy to talk to.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Diabetes distress refers to stress, guilt, and negative feelings
              that come from living with and managing diabetes. It can be a
              barrier in itself to enjoying life and managing your diabetes.
              Your diabetes team is not only there to help with your blood
              sugars, but also with the social and emotional burden of type 1
              diabetes. If you have a family doctor, feel free to discuss how
              you feel, because they too can help treat these feelings and offer
              referrals for trained specialists. Your mental health is just as
              important as your blood sugars!
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Some people with type 1 diabetes may develop a toxic relationship
              with food, insulin, and body image. If left untreated, this can be
              extremely dangerous. Please talk to your diabetes team if your
              diabetes is impacting your body image as soon as possible.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.boldText}>
              If you ever feel so sad, anxious, or angry that you don't want to
              get up in the morning, or you have feelings or harming yourself or
              others, please call your doctor or go to the emergency department
              immediately.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              If you would like to speak to someone, here are websites and phone
              numbers you can use:
              {"\n"} - Kids Help Phone: Canada-wide, English/French
              {"\n  "} - https://kidshelpphone.ca/
              {"\n  "} - 1-800-668-6868 or text 686868
              {"\n\n"} - Tel Jeunes: for under 20 years old, Canada-wide,
              English/French
              {"\n  "} - https://www.teljeunes.com/Home
              {"\n  "} - 1-800-263-2266 (phone)
              {"\n  "} - 514-600-1002 (text)
              {"\n\n"} - Suicide Action Montreal (SAM): Montreal-specific,
              English/French
              {"\n  "} - https://suicideactionmontreal.org/en/
              {"\n  "} - 1-866-277-3553
              {"\n\n"} - Tel Aide: Montreal-specific, English/French
              {"\n  "} - http://www.telaide.org/en/
              {"\n  "} - 514-935-1101
              {"\n\n"} - For more services: https://amiquebec.org/listen/
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PeerSupportAndMentalHealth;

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
  boldText: {
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 3,
  },
});
