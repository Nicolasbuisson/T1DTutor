import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

class InnovativeDiabetesTech extends Component {
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
          title="Innovative Diabetes Technologies"
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
              The treatment of type 1 diabetes is changing with the help of
              technology. Here is a refresher of what is now (and will be)
              available for treating type 1 diabetes. Things are changing so
              fast that this section may not be up-to-date when you read this!
              For more information, talk to your diabetes care team.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Continuous glucose monitoring</Text>
            <Text style={styles.text}>
              Continuous glucose monitoring, or CGM, is a way to measure your
              glucose without pricking your finger by measuring glucose in
              tissues (such as your arm or abdomen). These involve a sensor on
              the skin and transmission to a separate device. There are 2 types
              of CGM:
              {"\n"} - Real-time CGM (such as Guardian(R) or Dexcom(R)) measures
              glucose on a continuous basis, with or without calibration with
              finger-prick. Real-time CGM can be set with alarms for high or low
              glucose.
              {"\n"} - Flash CGM (such as Freestyle Libre(R)) measures the last
              8 hours of glucose when the sensor is scanned. This device does
              not come with alarms, but newer versions with alarms are already
              available in Europe, and will eventually come to Canada.
              {"\n\n"}CGM has become the recommended choice for those with type
              1 diabetes to monitor their blood sugars. It allows your diabetes
              team to know what is happening in between finger-prick tests to
              best adjust your treatment plan. Using CGM has shown to help
              reduce hypoglycemia and improve blood sugar control.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Insulin Pumps</Text>
            <Text style={styles.text}>
              Insulin pumps have been around for quite a while, but are getting
              better every year. Insulin pumps work by giving a continuous
              infusion of rapid-acting insulin ("basal"), with the ability to
              give extra insulin for food and correction ("bolus") as needed.
              All settings are put in the computer of the pump based on time of
              day. The person wearing the pump only has to put in the amount of
              carbs being eaten and blood sugar levels; the calculator in the
              pump helps to suggest what amount of insulin needs to be given.
              {"\n"} There are 2 types of pumps:
              {"\n"} - Tube-based pumps, where a machine is attached to a tube
              of insulin connected to a catheter that is inserted into the fat
              tissue of the wearer. There are various companies available that
              offer this type of pump, which include Tandem Diabetes Care (R),
              Medtronic (R), and more recently, Ypso (R).
              {"\n"} - Tubeless pumps, where a pod of insulin with a catheter is
              inserted into the fat tissue of the wearer. Everything is
              controlled by a hand-held machine. An example of this is the
              OmniPod pump.
              {"\n\n"}Research has shown that insulin pump therapy, given the
              ability to fine-tune insulin delivery more accurately, has some
              benefit over injections. However, this depends on the user and
              does not replace routine diabetes care such as accurate carb
              counting, monitoring glucose levels, and giving insulin before
              eating and when sugars are high.
              {"\n\n"}Coverage for insulin pumps is variable throughout Canada.
              Talk to your diabetes care team concerning pump coverage.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Closed-loop systems ("Artificial Pancreas" or "Looping")
            </Text>
            <Text style={styles.text}>
              Closed-loop insulin therapy refers to using insulin pumps and CGM
              together, along with an algorithm, to automatically change insulin
              doses based on glucose readings. This allows for less hypoglycemia
              at night, as well as better blood sugar control during the day.
              The wearer needs only to put in carb amounts and blood sugar
              readings as needed.
              {"\n\n"}In Canada, available systems include Control-IQ by Tandem,
              and Medtronic's MiniMed 670G. More choices are coming as the
              market expands.
              {"\n\n"}These systems do not replace the need for routine diabetes
              care, but they help lessen the ups and downs.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Diabetes phone and tablet applications: mHealth
            </Text>
            <Text style={styles.text}>
              Just like this app, there are many other smartphone apps to help
              manage diabetes and connect with others in the diabetes community.
              A great example are tools to help with carb counting, that even
              include photo recognition! Be aware that some of these apps are
              unregulated by Health Canada or not created by healthcare
              professionals.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Coming soon: Smart pens</Text>
            <Text style={styles.text}>
              Currently in Europe and coming to the United States are special
              insulin pens or insulin pen caps that can record and suggest
              insulin doses. These are not yet available in Canada. Stay tuned
              for when these do become available.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              Coming eventually: medications other than insulin
            </Text>
            <Text style={styles.text}>
              Scientists are working on closed-loop systems that don't just give
              insulin, but other hormones like glucagon (the antidote to
              insulin) and pramlintide (a gut hormone that helps with blood
              sugars).
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              There are many advances on the way to help with type 1 diabetes.
              If you ever want to help with the progress of diabetes treatment,
              you can volunteer through research! These can be found at{" "}
              <Text
                style={styles.text}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.clinicaltrials.gov/"
                  );
                }}
              >
                the clinical trial website
              </Text>{" "}
              or{" "}
              <Text
                style={styles.text}
                onPress={() => {
                  WebBrowser.openBrowserAsync("https://www.connect1d.ca/home");
                }}
              >
                CONNECT1D.
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default InnovativeDiabetesTech;

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
