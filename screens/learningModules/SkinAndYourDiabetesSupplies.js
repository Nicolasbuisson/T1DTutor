import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";

class SkinAndYourDiabetesSupplies extends Component {
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
          title="Skin and your Diabetes Supplies"
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
            <Text style={styles.title}>Insulin Injections</Text>
            <Text style={styles.text}>
              1. Where to inject
              {"\n"} - Avoid lumps (lipohypertrophy) or indented areas
              (lipodystrophy)
              {"\n"} - Remember that injecting in an exercising muscle group
              increases insulin absorption and your chances of a low blood
              sugar. Example, injecting in your leg if you are a runner
            </Text>
            <Text style={styles.text}>
              2. Injection site problems
              {"\n"}A. Lumps (known as lipohypertrophy),
              {"\n"} - are thickened tissues under the skin caused by scarring
              and tissue damage.
              {"\n"} - are caused by injecting insulin frequently in the same
              location
              {"\n"} - may be caused by reusing needles
              {"\n"} - lead to erratic blood glucose levels
              {"\n"} - may cause ketones due to poorly absorbing insulin.
              {"\n"}Avoid lumps by
              {"\n"} - Rotating your injection sites, and rotating within the
              site you use. Consider using a different site each week
              {"\n"} - Giving your injection 1-2 cm from your previous injection
              {"\n"} - Using a fresh needle with each injection
              {"\n\n"}B. Infections
              {"\n"}Signs of an infected injection site
              {"\n"} - Redness
              {"\n"} - Warm to touch
              {"\n"} - Pus
              {"\n"}If your injection site looks infected:
              {"\n"} - Try warm compresses, and seek medical help if the
              symptoms do not improve in 24 hours, if you develop a fever, or if
              the red area gets larger.
              {"\n"}
              Preventing infection
              {"\n"} - Use a new pen needle or syringe for each injection
              {"\n"} - Clean your skin with alcohol
              {"\n"} - Let the alcohol dry before injecting
              {"\n"} - Never blow on your skin to speed up the drying. Bacteria
              in your mouth can cause an infection on your skin
              {"\n\n"}
              C. Bleeding and/or Bruising
              {"\n"} - Avoid using the site until any bruises heal
              {"\n"} - If painful, try warm compresses
              {"\n"} - Watch for signs of infection (less common)
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Insulin Pumps</Text>
            <Text style={styles.text}>
              Where can I put my infusion site or pod:
              {"\n"} - Abdomen and buttocks provide the best insulin absorption
              {"\n"} - A different place from your most recent infusion site!
              {"\n"} - Avoid lumps (lipohypertrophy) or indented areas
              (lipodystrophy)
              {"\n"} - Avoid moles, bruises, scars, tattoos, piercings, bony
              areas (hip bones), previously infected sites (for at least a
              month)
              {"\n"} - Avoid areas where there will be folds, pressure or
              friction: beltline, sleeping or sitting.
              {"\n"} - Think about any upcoming activities or special clothing
              that might effect your chosen site
              {"\n"} - No closer than 2.5 cm from your belly button
              {"\n"} - Remember that infusing insulin in an exercising muscle
              group increases insulin absorption and your chances of a low blood
              sugar. Example, an infusion site in your leg if you are a runner
              {"\n\n"}Infusion site problems
              {"\n"}A. Cannula blocked or not inserted: No insulin!!!! Signs
              {"\n"} - Unexplained high blood glucose that does not respond to
              correction boluses, especially after inserting a new site!
              {"\n"} - Blood in the cannula
              {"\n"} - Insulin leakage around infusion site
              {"\n"} -{" "}
              <Text style={{ fontWeight: "700" }}>
                Don't wait for an occlusion alarm: it may take many hours for
                enough pressure to build up for an alarm
                {"\n\n"}Take immediate action: think safety first!
              </Text>
              {"\n"} - Test for ketones if you are high, especially if you feel
              unwell.
              {"\n"} - Take insulin by injection following the ketone protocol
              if you have ketones.
              {"\n"} - Change your catheter/cannula
              {"\n\n"}WHEN IN DOUBT…TAKE IT OUT!!!!
              {"\n\n"}
              <Text style={{ fontWeight: "700" }}>
                Safe pump practices to prevent disasters
              </Text>
              {"\n"} - Change your infusion site before a bolus (correction or
              meal), and avoid changing before bedtime
              {"\n"} - Test your blood glucose 1-2 hours after changing your
              catheter
              {"\n"} - Always carry a spare infusion set, insulin and
              syringe/pen
              {"\n\n"}B. Lumps (known as lipohypertrophy),
              {"\n"} - Are thickened tissues under the skin caused by scarring
              and tissue damage.
              {"\n"} - Are caused by infusing insulin frequently in the same
              location
              {"\n"} - Not rotating sites
              {"\n"} - Leaving catheters in too long
              {"\n"} - Lead to erratic blood glucose levels
              {"\n"} - May cause ketones due to poorly absorbing insulin
              {"\n"}Avoid lumps by:
              {"\n"} - Rotating your infusion sites, and rotating within the
              site you use.
              {"\n"} - Placing your infusion sites 2 cm from your previous site
              {"\n"} - Changing your silicone catheter/cannula every 2-3 days;
              metal needle infusion sets should be changed every 1-2 days.
              {"\n\n"}C. Infection
              {"\n"}Signs of an infected infusion site
              {"\n"} - Pain
              {"\n"} - Redness
              {"\n"} - Warmth
              {"\n"} - Pus
              {"\n\n"} WHEN IN DOUBT…TAKE IT OUT!!!!
              {"\n\n"}Try warm compresses, and seek medical help if the symptoms
              do not improve in 24 hours, if you develop a fever, or if the red
              area gets larger.
              {"\n\n"}
              Preventing infection
              {"\n"} - Practice good hygiene! Wash your hands before changing
              your site.
              {"\n"} - Avoid touching the needle or any part of the infusion set
              that comes into contact with insulin
              {"\n"} - Change your infusion site as recommended: every 48-72
              hours (2-3 days) for silicone sets, every 24-28 hours (1-2 days)
              for metal sets
              {"\n"} - Clean your skin with alcohol, and let the alcohol dry
              before inserting your infusion set
              {"\n  "} - Never blow on your skin to speed up the drying.
              {"\n  "} - Bacteria in your mouth can cause an infection on your
              skin
              {"\n"} - If you are prone to skin infections, try cleansing your
              skin with an antibacterial soap (eg. Dial®, Betadine®, Hibiclens®)
              before cleaning with alcohol.
              {"\n"} - Do not reuse pump supplies!
              {"\n\n"}
              D. Bleeding and/or Bruising
              {"\n"} - Avoid using the site until any bruises heal
              {"\n"} - If painful, try warm compresses
              {"\n"} - Watch for signs of infection
              {"\n\n"}
              E. Tape not sticking
              {"\n"} - Make sure that your skin is clean and dry before
              inserting your cannula
              {"\n"} - Trim or shave excessive hair.
              {"\n  "} - Do not use hair removal creams or products
              {"\n"} - Try an additional dressing or tape over top of your
              infusion site, such as Tegaderm®, IV 3000®, Hypafi®x. Cut a hole
              in the dressing so that you can still disconnect for showering,
              etc.
              {"\n"} - Try using a wipe such as Skin Tac® or Skin Prep® after
              you have cleaned your skin.
              {"\n"} - If excessive perspiration is the problem, try an
              antiperspirant around the edges of where your tape will be,
              avoiding the disinfected region where the cannula will be inserted
              {"\n"} - Try the “sandwich technique.” Cut a small hole in a clear
              dressing for your cannula, and place another dressing over top of
              the infusion set tape.
              {"\n"} - If you need a stronger product, try Mastisol® to help the
              site stick and Detachol® to remove it.
              {"\n\n"}
              F. Tape allergy/irritation
              {"\n"}Signs:
              {"\n"} - Red, itchy skin in the shape of your infusion set/pod
              tape
              {"\n\n"}
              Action:
              {"\n"} - If you have dry skin (especially in the winter) use a
              mild unscented soap to clean your skin, and an unscented
              moisturizing lotion after showering/bathing
              {"\n"} - Be kind to your skin when removing your old infusion
              site/pod.
              {"\n  "} - Try using baby oil/mineral oil, or an adhesive removal
              product like Remove® or Unisolve® to gently unstick the tape.
              {"\n"} - Try a barrier wipe such as Cavillon®, or placing another
              dressing on your skin (such as Tegaderm®, Biocclusive®, IV 300®),
              being sure to cut a small hole for your cannula.
              {"\n"} - Try different dressings or infusion sets -- different
              products use different glues.
              {"\n"} - Discuss using Flovent® on your skin with your physician
              (avoiding the actual insertion site) before you change your
              cannula. Use Flovent® and other steroid creams sparingly, and with
              caution, as they cause thinning of your skin.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              I Use Lancets And Glucose Strips To Test My Blood Glucose
            </Text>
            <Text style={styles.text}>
              A. Painful pokes
              {"\n"} - Use a fresh lancet with each test!!!!
              {"\n"} - Test the side of your finger tip
              {"\n"} - Adjust the depth of your lancing device (finger poker)
              there are fewer nerve endings
              {"\n"} - Avoid cleaning your finger with alcohol – wash your hands
              with soap and water
              {"\n\n"}
              B. Infections
              {"\n"}Signs of infection
              {"\n"} - Pain
              {"\n"} - Redness
              {"\n"} - Warm to touch
              {"\n"} - Pus
              {"\n\n"}If your finger looks infected:
              {"\n"} - Try warm compresses
              {"\n"} - Soak in warm salt water
              {"\n"} - Seek medical help if the symptoms do not improve in 24
              hours, or if you develop a fever.
              {"\n\n"}
              Preventing infection
              {"\n"} - Use a new lancet for each test
              {"\n"} - Wash your hands with soap and water before testing
              {"\n"} - Dry your hands with a clean towel, or paper towel
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>
              I use a CGM or Flash Glucose Monitor (Libre®)
            </Text>
            <Text style={styles.text}>
              A. Where can I put my sensor?
              {"\n"} - A different place from your most recent sensor!
              {"\n"} - Avoid lumps (lipohypertrophy) or indented areas
              (lipodystrophy)
              {"\n"} - Avoid moles, bruises, scars, tattoos, piercings, bony
              areas, previously infected sites (for at least a month)
              {"\n"} - Avoid areas where there will be folds, pressure or
              friction: beltline, sleeping or sitting.
              {"\n"} - Think about your upcoming activities or special
              events/clothing that might effect your chosen site
              {"\n"} - No closer than 5 cm from your belly button
              {"\n"} - Note that manufacturers’ approved insertions sites may
              differ from the diagram, as they are based on sites used in
              studies.
              {"\n\n"}
              B. Painful insertion
              {"\n"} - Ensure that you are inserting into an area with good fat
              stores
              {"\n"} - Try numbing the skin with an ice cube in a Ziploc bag or
              face cloth for a few seconds.
              {"\n\n"}
              C. Sensor not sticking
              {"\n"} - Ensure that your skin has dried after cleaning with
              alcohol
              {"\n"} - If you have oily skin, wash with soap and water, and
              clean with alcohol.
              {"\n"} - Try reinforcing your sensor tape with a larger dressing
              such as Hypafix®:{" "}
              <Text style={{ fontWeight: "700" }}>
                avoid covering the sensor
              </Text>
              {"\n"} - Try using a wipe such as Skin Tac® or Skin Prep® after
              you have cleaned your skin.{" "}
              <Text style={{ fontWeight: "700" }}>
                Be sure to wipe around where the edges of the tape will be, and
                not where the sensor will be inserted.
              </Text>
              {"\n"} - If excessive perspiration is the problem, try an
              antiperspirant{" "}
              <Text style={{ fontWeight: "700" }}>
                around the edges of where your tape will be, avoiding the
                disinfected region where the sensor will be inserted
              </Text>
              {"\n"} - Try the “sandwich technique.” Cut a small hole in a clear
              dressing for your sensor, and place another dressing over top of
              the sensor tape.
              {"\n"} - Try using an area with little or no body hair
              {"\n  "} - If not possible, trim or shave excessive hair.
              {"\n  "} - Do not use hair removal creams or products
              {"\n\n"}
              D. Tape allergy/irritation
              {"\n"}Signs:
              {"\n"} - Red, itchy skin in the shape of your sensor tape
              {"\n\n"}Action:
              {"\n"} - If you have dry skin (especially in the winter) use a
              mild unscented soap to clean your skin, and an unscented
              moisturizing lotion after showering/bathing
              {"\n"} - Be kind to your skin when removing your old sensor.
              {"\n  "} - Try using baby oil/mineral oil or an adhesive removal
              product like Remove® or Unisolve® to gently unstick the tape.
              {"\n"} - Try a barrier wipe such as Cavillon®, or placing another
              dressing on your skin (such as Tegaderm®, Biocclusive®, IV 300®),
              being sure to cut a small hole for your sensor.
              {"\n"} - Discuss using Flovent® on your skin with your physician
              (avoiding the actual insertion site) before you change your
              sensor. Use Flovent® and other steroid creams sparingly, and with
              caution, as they cause thinning of your skin.
              {"\n"} - Try a different brand of sensor
              {"\n\n"}
              E. Infection
              {"\n"}Signs of an infected sensor site
              {"\n"} - Pain
              {"\n"} - Redness
              {"\n"} - Warmth
              {"\n"} - Pus
              {"\n\n"}WHEN IN DOUBT…TAKE IT OUT!!!!
              {"\n\n"}Try warm compresses, and seek medical help if the symptoms
              do not improve in 24 hours, or if you develop a fever, or if the
              red area gets larger.
              {"\n\n"}Preventing infection
              {"\n"} - Practice good hygiene! Wash your hands before changing
              your sensor.
              {"\n"} - Avoid touching any part of the sensor needle
              {"\n"} - Clean your skin with alcohol, and let the alcohol dry
              before inserting your sensor
              {"\n  "} - Never blow on your skin to speed up the drying.
              {"\n  "} - Bacteria in your mouth can cause an infection on your
              skin
              {"\n  "} - If you are prone to skin infections, try cleaning your
              skin with an antibacterial soap (eg. Dial®, Betadine®, Hibiclens®)
              before cleaning with alcohol.
              {"\n  "} - Rotate your sites to let your sensor sites heal.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SkinAndYourDiabetesSupplies;

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
