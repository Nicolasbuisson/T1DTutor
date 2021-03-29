import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class KeepingYourSugarsAtTarget extends Component {
  constructor() {
    super();
    this.state = {
      showCGM: false,
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
          if (doc.data().questions.checkBloodSugar === "Real-time CGM") {
            this.setState({ showCGM: true });
          }
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
            title="Keep your Sugars at Target"
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
                To delay or prevent complications of diabetes, aim to keep blood
                glucose close to target. Though your own personalized targets
                are best discussed with your healthcare providers, these are
                general guidelines recommended for most with type 1 diabetes.
                Target values may change depending on medical conditions, age
                and other risk factors.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                A glycated hemoglobin level (or HbA1c) demonstrates the average
                glucose control within the last 3 - 4 months. For most with type
                1 diabetes, the HbA1c target is 7.0% or less, which means an
                average glucose of 8.5 mmol/L. This number comes from research
                showing that this target was associated with less diabetes
                complications.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                In order to achieve an A1C of maximum 7.0%, aim for:{"\n"} -
                Fasting blood sugar (first one in the morning after not eating)
                of 4.0–7.0 mmol/L.{"\n"} - Blood sugar target of 5.0–10.0 mmol/L
                at least 2 hours after eating.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Other targets include:{"\n"} - Having as few episodes of low
                blood sugar per week as much as possible (no more than 2 per
                week){"\n"} - Having as few high blood sugars (more than 13) as
                much as possible{"\n"} - Never having ketones as much as
                possible [See Sick Day Management]
              </Text>
            </View>
            {/*only for CGM*/}
            {this.state.showCGM && (
              <View style={styles.listItem}>
                <Text style={styles.text}>
                  If you are on continuous glucose monitoring, through devices
                  such as Dexcom or Freestyle Libre, you can see an overview of
                  your blood sugars. When a healthcare professional looks at the
                  ambulatory glucose profile (AGP), which is the overall trend,
                  our targets are:{"\n"} - Time in target range of 4.0 - 10.0
                  mmol/L of at least 70%{"\n"} - Glucose variability (also named
                  "CV") of less than 36%
                  {"\n"} - Having as little time spent in low or high blood
                  sugar as much as possible.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Gardez vos sucres à la cible"
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
                Pour retarder ou prévenir les complications du diabète, essayez
                de maintenir la glycémie proche de l'objectif. Bien que vos
                propres objectifs personnalisés soient mieux discutés avec
                professionnels de la santé, ce sont des directives générales
                recommandées pour la plupart des personnes avec le diabète de
                type 1. Les valeurs cibles peuvent changer en fonction des
                conditions médicales, de l'âge et d'autres facteurs de risque.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Un taux d'hémoglobine glyquée (ou HbA1c) démontre le contrôle
                glycémique moyen au cours des 3 à 4 derniers mois. Pour la
                plupart des personnes avec le diabéte de type 1, l'objectif
                d'HbA1c est 7.0% ou moins, ce qui signifie une glycémie moyenne
                de 8,5 mmol / L. Ce nombre provient de recherches montrant que
                cette cible était associée à moins de complications du diabète.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Pour atteindre un A1C de maximum 7,0%, visez:{"\n"} - Glycémie à
                jeun (la première le matin après ne pas avoir mangé) de 4,0 à
                7,0 mmol / L.{"\n"} - Objectif glycémique de 5,0 à 10,0 mmol / L
                au moins 2 heures après avoir mangé.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Les autres objectifs comprennent:{"\n"} - Avoir le moins
                d'épisodes d'hypoglycémie par semaine autant que possible (pas
                plus de 2 par semaine){"\n"} - Avoir le moins de sucre dans le
                sang (plus de 13) autant que possible{"\n"} - Ne jamais avoir de
                cétones autant que possible [Voir Gestion des jours de maladie]
              </Text>
            </View>
            {/*only for CGM*/}
            {this.state.showCGM && (
              <View style={styles.listItem}>
                <Text style={styles.text}>
                  Si vous utilisez les capteurs de glucose qui démontre le
                  mesure de glycémie en continu, via des appareils tels que
                  Dexcom ou Freestyle Libre, vous pouvez voir un aperçu de votre
                  glycémie. Lorsqu'un professionnel de la santé examine le
                  profil glycémique ambulatoire (PGA), qui est la tendance
                  générale, nos objectifs sont:{"\n"} - Temps dans la plage
                  cible de 4,0 à 10,0 mmol / L d'au moins 70%{"\n"} -
                  Variabilité du glucose (également appelée «CV») inférieure à
                  36%
                  {"\n"} - Avoir le moins de temps possible dans une glycémie
                  basse ou élevée.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
    }
  }
}

export default KeepingYourSugarsAtTarget;

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
