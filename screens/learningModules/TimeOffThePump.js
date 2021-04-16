import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class TimeOffThePump extends Component {
  constructor() {
    super();
    this.state = {
      english: true,
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }
  static contextType = Context;
  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  componentDidMount() {
    if (this.context.user?.language === "French") {
      this.setState({ english: false });
    }
  }

  render() {
    if (this.state.english) {
      return (
        <View style={styles.container}>
          <Header
            title="Time Off the Pump"
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
              <Text style={styles.title}>
                You may need to come off your pump:
              </Text>
              <Text style={styles.text}>
                {"\n"} - if you experience pump malfunction
                {"\n"} - during diagnostic tests or hospitalizations
                {"\n"} - during planned time off the pump
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Plan ahead:</Text>
              <Text style={styles.text}>
                -
                <Text style={{ fontWeight: "700" }}>
                  Know your pump settings.
                </Text>
                Always keep a copy of your most recent pump settings.
                {"\n"} -{" "}
                <Text style={{ fontWeight: "700" }}>
                  Know your MDI regimen.
                </Text>{" "}
                Determine your insulin dose with your MD and get a prescription.
                {"\n"} -{" "}
                <Text style={{ fontWeight: "700" }}>Know who to call.</Text>{" "}
                Troubleshoot with{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => this.props.navigation.navigate("WhoToCall")}
                >
                  the technical support team
                </Text>{" "}
                from your pump company.
                {"\n"} -{" "}
                <Text style={{ fontWeight: "700" }}>
                  Test blood sugars more often
                </Text>{" "}
                to prevent low or high blood glucose.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                While not receiving insulin from your pump, you must give
                insulin by injection to prevent ketoacidosis.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Use this table to guide you:</Text>
              <View style={styles.table}>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>Duration off the pump</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>Rapid insulin as coverage</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Long-acting insulin as coverage</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Meal (rapid) bolus</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>{"<"} 1 hour</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>
                      - No additional insulin {"\n"} - Give correction bolus if
                      blood sugar is high
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>No</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus for meals if eating while disconnected</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>1-5 hours</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>
                      - Take 80% of basal insulin to be missed by injection
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>No</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus for meals</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>{">"} 5 hours</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>
                      - Continue to inject rapid insulin every 4 hours (or every
                      2 hours if using Fiasp)
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>No</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus for meals</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>{">"} 12 hours</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>- You will need to be given long-acting insulin</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Use your backup long-acting insulin</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus for meals</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Going off the pump:</Text>
              <Text style={styles.text}>
                {"\n"} 1. Plan to stop the pump around dinner time
                {"\n"} 2. Bolus for dinner and disconnect your pump
                {"\n"} 3. Inject your prescribed dose of long-acting insulin
                {"\n"} 4. Continue the inject long-acting insulin at the same
                time each night until your go back on your pump
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Going back on the pump:</Text>
              <Text style={styles.text}>
                {"\n"} 1. Plan to restart the pump in the morning
                {"\n"} 2. Restart your pump using your previous pump setting
                {"\n"} 3. You may need to run a temporary basal rate for a
                period of time to prevent hypoglycemia
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Check your blood sugar more frequently while transitioning off
                or on to your pump.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Temps Libre de la Pompe à Insuline"
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
              <Text style={styles.title}>
                Vous avez besoin d’enlever votre pompe quand:
              </Text>
              <Text style={styles.text}>
                {"\n"} - Vous avez une malfonction de pompe
                {"\n"} - Durant les examens diagnostiques ou hospitalisations
                {"\n"} - Durant les temps planifiés d’être libre de la pompe
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Planifiez à l’avance :</Text>
              <Text style={styles.text}>
                -
                <Text style={{ fontWeight: "700" }}>
                  Savez vos paramètres de pompe.
                </Text>
                Gardez un copie de vos paramètres plus récents.
                {"\n"} -{" "}
                <Text style={{ fontWeight: "700" }}>
                  Savez votre regime d’injections.
                </Text>{" "}
                Déterminez l’équivalent de vos dosages de pompe comme injections
                avec votre médecin. Assurez vous avez une préscription.
                {"\n"} -{" "}
                <Text style={{ fontWeight: "700" }}>Savez qui appeler.</Text>{" "}
                Dépannez avec{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => this.props.navigation.navigate("WhoToCall")}
                >
                  l'équipe d'assistance technique
                </Text>{" "}
                de votre companie de pompe.
                {"\n"} -{" "}
                <Text style={{ fontWeight: "700" }}>
                  Testez votre glycémie plus fréquemment
                </Text>{" "}
                pour prévenir l’hypoglycémie et l’hyperglycémie.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Bien que vous ne receviez pas d'insuline de votre pompe, vous
                devez administrer de l'insuline par injection pour prévenir
                l'acidocétose.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Utilisez ce tableau pour vous aider:
              </Text>
              <View style={styles.table}>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>Durée libre de la pompe</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>Insuline à action rapide</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Insuline à action prolongée</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus pour les repas</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>{"<"} 1 heure</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>
                      - Pas d’insuline supplémentaire
                      {"\n"}- Administrez un bolus de correction si votre
                      glycémie est haute
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Non</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus pour votre repas si vous êtes déconnecté</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>1-5 heures</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>- Prenez 80% de votre debit basal par injection</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Non</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus pour vos repas</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>{">"} 5 heures</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>
                      - Continuez de vous injecter chaque 4 heures (ou chaque 2
                      heures si vous utilisez Fiasp)
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Non</Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus pour vos repas</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.durationColumn}>
                    <Text>{">"} 12 heures</Text>
                  </View>
                  <View style={styles.rapidColumn}>
                    <Text>
                      - Vous avez besoin d’insuline à action prolongée
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>
                      Utilisez votre sauvegarde d’insuline à action prolongée
                    </Text>
                  </View>
                  <View style={styles.longColumn}>
                    <Text>Bolus pour vos repas</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Déconnectez de la pompe:</Text>
              <Text style={styles.text}>
                {"\n"} 1. Planifiez d’arrêter votre pompe autours du temps de
                souper
                {"\n"} 2. Administrez un bolus pour le souper et déconnectez de
                la pompe
                {"\n"} 3. Injectez votre dose prescite d’insuline à l’action
                prolongée
                {"\n"} 4. Continuez votre insuline à l’action prolongée au même
                temps chaque nuit jusqu’au temps vous reconnectez votre pompe
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Reconnectez la pompe:</Text>
              <Text style={styles.text}>
                {"\n"} 1. Planifiez de recommencer la pompe dans le matin
                {"\n"} 2. Recommencez votre pompe avec les mêmes paramètres
                {"\n"} 3. Vous pouvez utililser un basal temporaire pour
                quelques heures pour prévenir l’hypoglycémie
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Vérifiez votre glycémie plus fréquemment durant la transition de
                la pompe.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default TimeOffThePump;

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
    // backgroundColor: "inherit",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    // backgroundColor: "inherit",
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
    flexBasis: "24.5%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
});
