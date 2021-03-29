import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class LowBloodSugar extends Component {
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
            title="Low Blood Sugar"
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
                A low blood sugar ("hypoglycemia") is any true measured low
                sugar less than 4.0 mmol/L. This is an unfortunate side effect
                of having relatively too much insulin.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Symptoms you may feel if your sugar is low are the following:
                {"\n"} - Trembling, palpitations, sweating, hunger{"\n"} -
                Confusion, weakness, dizziness, drowsiness, difficulty
                concentrating
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Some people do not feel their low sugar. This does not mean you
                are okay: rather, this can be dangerous as there is no warning.
                Talk to your doctor if this is happening.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                If your sugar is low, you must treat with fast sugar of at least
                15 grams. You can treat with the following:
                {"\n"} - Glucose tablets, for example 4 Dex4 tablets
                {"\n"} - 3 packets of sugar dissolved in water
                {"\n"} - 6 lifesavers
                {"\n"} - 150 ml of juice
                {"\n"} - 1 tablespoon of honey
                {"\n"}Note that chocolate is not the best way to treat low blood
                sugar because it also contains fat as well as sugar!
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                "Severe hypoglycemia" is when you need help treating your low
                sugar because you are unwell (e.g. loss of consciousness,
                seizure). In this situation where you cannot swallow sugar, the
                antidote to insulin (glucagon) may be helpful. This is also
                helpful when you are alone, your blood sugar is low, and you
                cannot swallow sugar. Talk to your doctor about glucagon
                injections or the intranasal spray.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                This is also why having a medical bracelet is important. If you
                are ever in a situation where you cannot help yourself, such as
                a severe hypoglycemia, a medical bracelet can tell first
                responders that you have type 1 diabetes.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Les Sucres Bas"
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
                Un faible taux de sucre sanguin («hypoglycémie») est un vrai
                faible taux de sucre moins de 4,0 mmol / L. C'est un effet
                secondaire malheureux d'avoir relativement trop d'insuline.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Les symptômes que vous pouvez ressentir si votre taux de sucre
                est bas sont les suivants:
                {"\n"} - Tremblements, palpitations, transpiration, faim{"\n"} -
                Confusion, faiblesse, étourdissements, somnolence, difficulté à
                se concentrer
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Certaines personnes ne ressentent pas leur faible taux de sucre.
                Cela ne veut pas dire que vous allez bien: cela peut plutôt être
                dangereux car il n'y a pas d'avertissement. Parlez-en à votre
                médecin si cela se produit.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Si votre taux de sucre est faible, vous devez traiter avec du
                sucre rapide d'au moins 15 grammes. Vous pouvez traiter avec:
                {"\n"} - Comprimés de glucose, par exemple 4 comprimés Dex4
                {"\n"} - 3 sachets de sucre dissous dans l'eau
                {"\n"} - 6 pièces de bonbons de "Life Savers"
                {"\n"} - 150 ml de jus
                {"\n"} - 1 cuillère à soupe de miel
                {"\n"}Notez que le chocolat n'est pas une bonne façon pour
                élever le sucre car le chocolat inclus le gras aussi.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Une «hypoglycémie sévère» est lorsque vous avez besoin d'aide
                pour traiter votre faible taux de sucre parce que vous ne vous
                sentez pas bien (par exemple, perte de conscience, convulsions).
                Dans cette situation où vous ne pouvez pas avaler de sucre,
                l'antidote à l'insuline (glucagon) peut être utile. Ceci est
                également utile lorsque vous êtes seul, que votre glycémie est
                basse et que vous ne pouvez pas avaler de sucre. Parlez à votre
                médecin des injections de glucagon ou du poudre nasale.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                C'est aussi pourquoi avoir un bracelet médical est important. Si
                vous vous trouvez dans une situation où vous ne pouvez pas vous
                aider, comme une hypoglycémie sévère, un bracelet médical peut
                indiquer aux premiers intervenants que vous avez le diabète de
                type 1.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default LowBloodSugar;

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
