import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class PreventingComplications extends Component {
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
            title="Preventing Complications"
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
              <Text style={styles.text}>
                Diabetes is important to manage because good blood sugars can
                reduce your risk of complications. Complications are due to
                damage to both big and small blood vessels in the body if blood
                sugars (and other risk factors) are not well controlled. These
                complications include:
                {"\n"} - Heart disease (such as heart attacks and heart failure)
                {"\n"} - Stroke
                {"\n"} - Eye damage in the back of your eye
                {"\n"} - Kidney damage that can lead to needing dialysis
                {"\n"} - Nerve damage
                {"\n"} - Damage to blood vessels in the legs, causing pain,
                infections, and wounds.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                This is why it is important to take care of your diabetes. You
                are not only preventing high and low sugars, but allowing you to
                live a long and healthy life without these complications.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                This is also why your doctor wants you to do the following
                "screening tests" (which means detecting early signs of problems
                before they get serious)
                {"\n"} - Eye exam every year
                {"\n"} - Foot exam every year
                {"\n"} - Blood pressure measurement at each visit
                {"\n"} - Urine tests and cholesterol levels at least once per
                year
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Reducing and preventing the risk of complications due to
                diabetes requires the following:
                {"\n"} - Aiming for target blood sugar levels
                {"\n"} - Controlling blood pressure (BP {"<"} 130/80 mmHg) and
                cholesterol levels (LDL-C {"<"} 2.0 mmol/L) - your doctor will
                let you know if your levels are an issue.
                {"\n"} - Stop smoking
                {"\n"} - Exercise - 150 minutes of moderate to vigorous aerobic
                activity per week and resistance exercises 2-3 times/week
                {"\n"} - Healthy eating [see "Food and You"]
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="La Prévention de Complications"
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
              <Text style={styles.text}>
                Le diabète est important à prendre en charge car une bonne
                glycémie peut réduire le risque de complications. Les
                complications sont dues à des dommages aux gros et petits
                vaisseaux sanguins du corps si la glycémie (et d'autres facteurs
                de risque) ne sont pas bien contrôlés. Ces complications
                comprennent:
                {"\n"} - La maladie cardiaque (comme les crises cardiaques et
                l'insuffisance cardiaque)
                {"\n"} - L'accidents vasculaires cérébrales
                {"\n"} - Les lésions oculaires à l'arrière de l'œil
                {"\n"} - Lésions rénales pouvant entraîner la nécessité de
                dialyse
                {"\n"} - Les lésions nerveuses
                {"\n"} - Les dommages aux vaisseaux sanguins dans les jambes,
                provoquant des douleurs, des infections et des blessures.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                C'est pourquoi il est important de prendre soin de votre
                diabète. Vous évitez non seulement les sucres élevés et faibles,
                mais vous permettez également de vivre une vie longue et saine
                sans ces complications.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                C'est également la raison pour laquelle votre médecin vous
                demande de faire les «tests de dépistage» suivants (ce qui
                signifie détecter les premiers signes de problèmes avant qu'ils
                ne deviennent graves).
                {"\n"} - Examen de la vue chaque année
                {"\n"} - Examen du pied au moins chaque année
                {"\n"} - Mesure de la pression artérielle à chaque visite
                {"\n"} - Tests d'urine et taux de cholestérol au moins une fois
                par an
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                La réduction et la prévention du risque de complications liées
                au diabète nécessitent les éléments suivants:
                {"\n"} - Ensurer votre glycémie est en cible la plupart du temps
                {"\n"} - o Contrôle de la pression artérielle (TA {"<"} 130/80
                mmHg) et des taux de cholestérol (LDL-C {"<"} 2.0 mmol/L) -
                votre médecin vous informera si vos taux posent problème
                {"\n"} - Arrêtez de fumer (si vous fumez)
                {"\n"} - Exercice - 150 minutes d'activité aérobie modérée à
                vigoureuse par semaine et des exercices de résistance 2 à 3 fois
                par semaine
                {"\n"} - Une alimentation saine [voir «La nourriture et vous»]
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default PreventingComplications;

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
});
