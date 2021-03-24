import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class HighBloodSugar extends Component {
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
    var user = this.context.user;
    dbh
      .collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (doc.data().language === "French") {
            this.setState({ english: false });
          }
        }
      });
  }

  render() {
    if (this.state.english) {
      return (
        <View style={styles.container}>
          <Header
            title="High Blood Sugar"
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
                The definition of high blood sugar is more variable than the
                definition for low blood sugar.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Though sugars are preferred to be less than 10, you can start
                having symptoms (thirst, tiredness, needing to go to the
                washroom) above 12. Sugars above 16 should alarm you to find out
                why your sugar is high, while sugars above 18 should be dealt
                with immediately.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Important reasons for high blood sugar to be aware of are:
                {"\n"} - Forgetting to bolus for a meal
                {"\n"} - Forgetting to administer long-acting insulin (if on
                injections)
                {"\n"} - Infusion site / catheter malfunction of your insulin
                pump (if you use an insulin pump)
                {"\n"} - Problem with insulin (e.g. exposed to extreme
                temperatures, out of the fridge for more than 30 days)
                {"\n"} - Eating a high fat meal with delayed rise in blood sugar
                (such as pizza)
                {"\n"} - Being sick (such as having an infection)
                {"\n"} - Stress
                {"\n"} - Certain medications (such as prednisone)
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                A risk of diabetes that is important to know is diabetic
                ketoacidosis. When your body cannot absorb sugar because of lack
                of insulin, your body starts to break down fat into ketones,
                which are an acid. At high levels, this acid can be
                life-threatening. Symptoms of ketoacidosis are nausea, vomiting,
                abdominal pain, dehydration. In severe cases, you should seek
                medical attention immediately.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                See “Sick Day Management” for what you should do if your sugar
                is above 16 and/or feeling unwell
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Les Sucres Hauts"
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
                La définition d'un sucre haut ("hyperglycémie") est plus
                variable que celle d'un sucre bas.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Bien que les sucres soient préférablement moins de 10 mmol/L,
                vous pouvez commencer à avoir des symptômes (soif, fatigue,
                besoin d'aller aux toilettes) au-dessus de 12. Les sucres
                supérieurs à 16 devraient vous alarmer pour savoir pourquoi
                votre taux de sucre est élevé, tandis que les sucres supérieurs
                à 18 devraient être traités immédiatement.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Les raisons importantes pour lesquelles la glycémie peut être
                haute sont:
                {"\n"} - Oublier de vous donner un bolus d'insuline pour un
                repas
                {"\n"} - Oublier d'administrer de l'insuline à action
                prolongée(pour injections)
                {"\n"} - Dysfonctionnement du site de perfusion / du cathéter de
                votre pompe à insuline(pour pompe)
                {"\n"} - Problème d'insuline (par exemple exposé à des
                températures extrêmes, hors du réfrigérateur pendant plus de 30
                jours)
                {"\n"} - Manger un repas riche en graisses avec une augmentation
                retardée de la glycémie (comme la pizza)
                {"\n"} - Être malade (comme avoir une infection)
                {"\n"} - Le stress
                {"\n"} - Certains médicaments (comme la prednisone)
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                L'acidocétose diabétique est un risque de diabète qui est
                important de connaître. Lorsque votre corps ne peut pas absorber
                le sucre en raison d'un manque d'insuline, votre corps commence
                à décomposer les graisses en cétones, qui sont des acides. À des
                niveaux élevés, cet acide peut mettre la vie en danger. Les
                symptômes de l'acidocétose sont des nausées, des vomissements,
                des douleurs abdominales, la déshydratation. Dans les cas
                graves, vous devez consulter immédiatement un médecin.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Voir «Gestion des jours de maladie» pour savoir ce que vous
                devez faire si votre taux de sucre est supérieur à 16 et / ou si
                vous vous sentez mal
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default HighBloodSugar;

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
