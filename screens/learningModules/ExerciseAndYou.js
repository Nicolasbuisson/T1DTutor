import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class ExerciseAndYou extends Component {
  constructor() {
    super();
    this.state = {
      weight: 0,
      moderateCarbs: 0,
      intenseCarbs: 0,
      showInjections: true,
      english: true,
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.calculateCarbs = this.calculateCarbs.bind(this);
    this.onInputChangeWeight = this.onInputChangeWeight.bind(this);
  }
  static contextType = Context;
  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  calculateCarbs(value) {
    this.setState({
      moderateCarbs: +value * 0.5,
      intenseCarbs: +value,
    });
  }

  onInputChangeWeight(text) {
    this.setState({ weight: text });
    this.calculateCarbs(text);
  }

  componentDidMount() {
    var user = this.context.user;
    dbh
      .collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (doc.data().questions.injectionsOrPump === "Pump") {
            this.setState({ showInjections: false });
          }
          if (doc.data().language === "French") {
            this.setState({ english: false });
          }
        }
      });
  }

  render() {
    if (this.state.showInjections) {
      {
        if (this.state.english) {
          return (
            <View style={styles.container}>
              <Header
                title="Exercise and You"
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
                    You are being active. That’s great!
                  </Text>
                  <Text style={styles.text}>
                    <Text style={{ fontWeight: "700" }}>
                      Prevention of low blood sugars
                    </Text>{" "}
                    requires balancing activity with carbs and insulin. Plan
                    ahead! Exercise {">"}30 minutes will likely require extra
                    carbs or adjustment to your insulin.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>Calculate your extra carbs:</Text>
                  <View style={styles.table}>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Weight</Text>
                      </View>
                      <View style={styles.inputColumn}>
                        <TextInput
                          style={styles.input}
                          onChangeText={(text) =>
                            this.onInputChangeWeight(text)
                          }
                          keyboardType="numeric"
                          value={this.state.weight}
                          placeholder="Enter Weight"
                        ></TextInput>
                        <Text>Kg</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Approximate extra carbs for activity</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Moderate activity</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>~0.5g/kg/hr</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>{this.state.moderateCarbs}g *</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Intense activity</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>Up to 1.0g/kg/hr</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>{this.state.intenseCarbs}g *</Text>
                      </View>
                    </View>
                    <Text style={styles.text}>
                      * Can be consumed prior, during and/or after exercise
                    </Text>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>Insulin Adjustment:</Text>
                  <View style={styles.table}>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text></Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>Timing of exercise</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Insulin adjustment</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 1</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>Activity within 2 hours after a meal</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Reduce meal bolus by 25-75%</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 2</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>
                          Activity{" "}
                          <Text style={{ textDecorationLine: "underline" }}>
                            not
                          </Text>{" "}
                          within 2 hours after a meal bolus
                        </Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Consume extra carbs</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 3</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>On days of planned physical activity</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>
                          Reduce long-acting basal insulin by 20% (or as
                          recommended by your doctor)
                        </Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 4</Text>
                      </View>
                      <View style={styles.bigColumn}>
                        <Text>
                          Combination of the above options, adapted to your
                          goals
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>
                    If blood sugar is high prior to exericse?
                  </Text>
                  <View style={styles.table}>
                    <View style={styles.row}>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          Blood glucose before exercise
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          How do you feel?
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>Ketone levels</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          Insulin correction dose
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>Exercise</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.standardColumn}>
                        <Text>{">"}16 mmol/L</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Not well</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>
                          Elevated{"\n"}
                          {">"}1.5 mmol/L in blood or 2+ in urine
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>yes</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>
                          Postpone vigorous exercise until ketones are negative
                        </Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.standardColumn}>
                        <Text>{">"}16 mmol/L</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Well</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Negative or trace</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text> </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Exercise with caution and test regularly</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>
                    Certain types of exercise can induce high blood sugars
                  </Text>
                  <Text style={styles.text}>
                    Due to the release of stress hormones.{"\n"} Examples are
                    <Text style={{ fontWeight: "700" }}> resistance</Text>{" "}
                    training and
                    <Text style={{ fontWeight: "700" }}> intense</Text> exercise
                    like sprinting, weight-lifting, CrossFit, etc.{"\n"}
                    If this occurs, give a small bolus (50% of usual correction
                    dose) during exercise recovery
                  </Text>
                </View>
              </ScrollView>
            </View>
          );
        } else {
          return (
            <View style={styles.container}>
              <Header
                title="L’Exercise et Vous"
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
                    Vous êtes actif. C’est super!
                  </Text>
                  <Text style={styles.text}>
                    <Text style={{ fontWeight: "700" }}>
                      La prevention de l’hypoglycémie
                    </Text>{" "}
                    La prevention de l’hypoglycémie nécessite la balance entre
                    l’activité physique, les glucides et l’insuline. Planifiez à
                    l’avance! L’exercise pour plus que 30 minutes probablement
                    nécessite des glucides supplémentaires et les ajustements à
                    votre dosage d’nsuline.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>
                    Calculez vos glucides supplémentaires:
                  </Text>
                  <View style={styles.table}>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Poids</Text>
                      </View>
                      <View style={styles.inputColumn}>
                        <TextInput
                          style={styles.input}
                          onChangeText={(text) =>
                            this.onInputChangeWeight(text)
                          }
                          keyboardType="numeric"
                          value={this.state.weight}
                          placeholder="Enter Weight"
                        ></TextInput>
                        <Text>Kg</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Glucides additionels pour l’activité</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>L’activité modérée</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>~0.5g/kg/hr</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>{this.state.moderateCarbs}g *</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>L’activité intense</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>Up to 1.0g/kg/hr</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>{this.state.intenseCarbs}g *</Text>
                      </View>
                    </View>
                    <Text style={styles.text}>
                      * Peuvent être consommés avant, durant ou après l’exercise
                    </Text>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>L’ajustement d’insuline:</Text>
                  <View style={styles.table}>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text></Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>Horaire de l’exercise</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Ajustement d’insuline</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 1</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>Activité pendant 2 heures après un repas</Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Réduisez votre bolus de repas par 25-75%</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 2</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>
                          Activité{" "}
                          <Text style={{ textDecorationLine: "underline" }}>
                            pas
                          </Text>{" "}
                          pendant 2 heures après un repas
                        </Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>Consommez des glucides additionels</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 3</Text>
                      </View>
                      <View style={styles.rapidColumn}>
                        <Text>
                          Durant les jours où l’activité physique est planifiée
                        </Text>
                      </View>
                      <View style={styles.longColumn}>
                        <Text>
                          Réduisez votre insuline basal par 20% (ou comme
                          suggérer par votre médecin)
                        </Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.durationColumn}>
                        <Text>Option 4</Text>
                      </View>
                      <View style={styles.bigColumn}>
                        <Text>
                          Combinaison des options au-dessous, selon vos buts
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>
                    Si votre glycémie est haute avant l’exercice?
                  </Text>
                  <View style={styles.table}>
                    <View style={styles.row}>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          Glycémie avant l’exercice
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          Comment sentez-vous?
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          Niveau de cétones
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>
                          Dosage de correction d’insuline
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text style={{ fontWeight: "700" }}>Exercice</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.standardColumn}>
                        <Text>{">"}16 mmol/L</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Pas bien</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>
                          Élevé
                          {"\n"}
                          {">"}1.5 mmol/L in blood or 2+ in urine
                        </Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>oui</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>
                          Retarder aucun exercise vigoureux jusqu’à ce que les
                          cétones diminuent
                        </Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.standardColumn}>
                        <Text>{">"}16 mmol/L</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Bien</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>Négatif ou trace</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>non</Text>
                      </View>
                      <View style={styles.standardColumn}>
                        <Text>
                          Faites l’exercice avec caution et vérifier vos
                          glycémies régulièrement
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.title}>
                    Certains types d’exercice peuvent augmenter la glycémie
                  </Text>
                  <Text style={styles.text}>
                    À cause de l’augmentation des hormones de stresse. {"\n"}Les
                    exemples sont l’entraînement en resistance et l’exercise
                    intense comme le sprint, le Crossfit, ou la musculation.{" "}
                    {"\n"}Si celui-ci arrive, vous pouvez vous donner un petit
                    bolus (la moitié de votre dosage de correction typique)
                    durant la récupération de votre exercise. {"\n"}Si vous avez
                    besoin de corriger après chaque fois vous faites l’exercise
                    intense, considérez un basal temporaire augmenté qui
                    commence 90 minutes avant l’exercise. Vous pouvez commencer
                    avec 110% (ou 10% de plus) de votre debit régulier.
                  </Text>
                </View>
              </ScrollView>
            </View>
          );
        }
      }
    } else {
      if (this.state.english) {
        return (
          <View style={styles.container}>
            <Header
              title="Exercise and You"
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
                  You are being active. That’s great!
                </Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: "700" }}>
                    Prevention of low blood sugars
                  </Text>{" "}
                  requires balancing activity with carbs and insulin. Plan
                  ahead! Exercise {">"}30 minutes will likely require extra
                  carbs or adjustment to your insulin.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>Calculate your extra carbs:</Text>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Weight</Text>
                    </View>
                    <View style={styles.inputColumn}>
                      <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onInputChangeWeight(text)}
                        keyboardType="numeric"
                        value={this.state.weight}
                        placeholder="Enter Weight"
                      ></TextInput>
                      <Text>Kg</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Approximate extra carbs for activity</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Moderate activity</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>~0.5g/kg/hr</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>{this.state.moderateCarbs}g *</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Intense activity</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>Up to 1.0g/kg/hr</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>{this.state.intenseCarbs}g *</Text>
                    </View>
                  </View>
                  <Text style={styles.text}>
                    * Can be consumed prior, during and/or after exercise
                  </Text>
                </View>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>Insulin Adjustment:</Text>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text></Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>Timing of exercise</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Insulin adjustment</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Option 1</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>Activity within 2 hours after a meal</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Reduce meal bolus by 25-75%</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Option 2</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>
                        Activity{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          not
                        </Text>{" "}
                        within 2 hours after a meal bolus
                      </Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Consume extra carbs</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Option 3</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>
                        Activity{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          not
                        </Text>{" "}
                        within 2 hours after a meal bolus
                      </Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>
                        Run a temp basal (50-75% reduction) starting 90 minutes{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          before
                        </Text>
                        ,{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          throughout
                        </Text>{" "}
                        and 1-2 hours{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          after
                        </Text>{" "}
                        your activity. Extend for longer duration if needed.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  If blood sugar is high prior to exericse?
                </Text>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        Blood glucose before exercise
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        How do you feel?
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>Ketone levels</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        Insulin correction dose
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>Exercise</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.standardColumn}>
                      <Text>{">"}16 mmol/L</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Not well</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>
                        Elevated{"\n"}
                        {">"}1.5 mmol/L in blood or 2+ in urine
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>yes</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>
                        Postpone vigorous exercise until ketones are negative
                      </Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.standardColumn}>
                      <Text>{">"}16 mmol/L</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Well</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Negative or trace</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text> </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Exercise with caution and test regularly</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Certain types of exercise can induce high blood sugars
                </Text>
                <Text style={styles.text}>
                  Due to the release of stress hormones. {"\n"}Examples are
                  <Text style={{ fontWeight: "700" }}> resistance</Text>{" "}
                  training and
                  <Text style={{ fontWeight: "700" }}> intense</Text> exercise
                  like sprinting, weight-lifting, CrossFit, etc.{"\n"}
                  If this occurs, give a small bolus (50% of usual correction
                  dose) during exercise recovery.
                  {"\n"}
                  If you have to correct after every intense activity, consider
                  increasing basal insulin rate 90 minutes prior to activity.
                  Start with 110% of your usual rate.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>Site and tubing</Text>
                <Text style={styles.text}>
                  - If you are using your arms or legs as infusion sites,
                  insulin may be absorbed quicker after those areas are
                  exercised.
                  {"\n"} - Swinging motions from basketball, golf or tennis may
                  dislodge an infusion set on the abdomen.
                  {"\n"} - If needed, secure the site with additional tape.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>Sweating</Text>
                <Text style={styles.text}>
                  - Sweating from activity can loosen attachment of your
                  infusion set.
                  {"\n"} - Try skin-tac or IV prep to help with this.
                </Text>
              </View>
            </ScrollView>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Header
              title="L'Exercice et Toi"
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
                <Text style={styles.title}>Vous êtes actif. C’est super!</Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: "700" }}>
                    La prevention des sucres bas
                  </Text>{" "}
                  nécessite la balance entre l’activité physique et les glucides
                  et l’insuline. Planifiez à l’avance! L’exercise plus de 30
                  minutes probablement nécissitent les glucides additionels ou
                  l’ajustement dans vos taux basaux.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Calculatez vos glucides supplémentaires:
                </Text>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Poids</Text>
                    </View>
                    <View style={styles.inputColumn}>
                      <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.onInputChangeWeight(text)}
                        keyboardType="numeric"
                        value={this.state.weight}
                        placeholder="Enter Weight"
                      ></TextInput>
                      <Text>Kg</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Glucides additionels pour l’activité</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>L’activité modérée</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>~0.5g/kg/hr</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>{this.state.moderateCarbs}g *</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>L’activité intense</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>Up to 1.0g/kg/hr</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>{this.state.intenseCarbs}g *</Text>
                    </View>
                  </View>
                  <Text style={styles.text}>
                    * Peuvent être consommés avant, durant ou après l’exercice
                  </Text>
                </View>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>L’ajustement d’insuline:</Text>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text></Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>Horaire de l’exercise</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Ajustement d’insuline</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Option 1</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>Activité pendant 2 heures après un repas</Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Réduisez votre bolus de repas par 25-75%</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Option 2</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>
                        Activité{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          pas
                        </Text>{" "}
                        pendant 2 heures après un repas
                      </Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>Consommez des glucides additionels</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.durationColumn}>
                      <Text>Option 3</Text>
                    </View>
                    <View style={styles.rapidColumn}>
                      <Text>
                        Activité{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          pas
                        </Text>{" "}
                        pendant 2 heures après un repas
                      </Text>
                    </View>
                    <View style={styles.longColumn}>
                      <Text>
                        Utilisez un basal temporaire (50-75% réduit) au moins 90
                        minutes{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          avant
                        </Text>
                        ,{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          pendant
                        </Text>{" "}
                        et{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                          après
                        </Text>{" "}
                        l’exercise. Continuez le basal temporaire si en besoin.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Si votre glycémie est haute avant l’exercise?
                </Text>
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        Glycémie avant l’exercice
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        Comment sentez-vous?
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        Niveau de cétones
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>
                        Dosage de correction d’insuline
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text style={{ fontWeight: "700" }}>Exercice</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.standardColumn}>
                      <Text>{">"}16 mmol/L</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Pas bien</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>
                        Élevé{"\n"}
                        {">"}1.5 mmol/L in blood or 2+ in urine
                      </Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>oui</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>
                        Retarder aucun exercise vigoureux jusqu’à ce que les
                        cétones diminuent
                      </Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.standardColumn}>
                      <Text>{">"}16 mmol/L</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Bien</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>Négatif ou trace</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>non</Text>
                    </View>
                    <View style={styles.standardColumn}>
                      <Text>
                        Faites l’exercise avec caution et vérifier vos glycémies
                        régulièrement
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Certains types d’exercise peuvent augmenter la glycémie
                </Text>
                <Text style={styles.text}>
                  À cause de l’augmentation des hormones de stresse.{"\n"}Les
                  exemples sont l’entraînement en resistance et l’exercise
                  intense comme le sprint, le Crossfit, ou la musculation.{" "}
                  {"\n"}Si celui-ci arrive, vous pouvez vous donner un petit
                  bolus (la moitié de votre dosage de correction typique) durant
                  la récupération de votre exercise. {"\n"}Si vous avez besoin
                  de corriger après chaque fois vous faites l’exercise intense,
                  considérez un basal temporaire augmenté qui commence 90
                  minutes avant l’exercise. Vous pouvez commencer avec 110% (ou
                  10% de plus) de votre debit régulier.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>Les sites de perfusion et fils</Text>
                <Text style={styles.text}>
                  - Si vous utilisez vos bras ou jambes pour les sites de
                  perfusion, votre insuline peut être absorbée plus vite si ces
                  endroits sont exercés.
                  {"\n"} - Les mouvements de balancement de basketball, golf, ou
                  tennis peuvent déloger les sites de perfusion sur le ventre.
                  {"\n"} - Si c’est necessaire, vous pouvez securiser le site
                  avec un collant supplémentaire.
                </Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.title}>La transpiration</Text>
                <Text style={styles.text}>
                  - La transpiration durant l’exercise peut desserrer les sites
                  de perfusion.
                  {"\n"} - Utilisez le Skin-Tac (des lingettes adhésifs) ou IV
                  Prep (des collants adhésifs) pour en prévenir.
                </Text>
              </View>
            </ScrollView>
          </View>
        );
      }
    }
  }
}

export default ExerciseAndYou;

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
  input: {
    backgroundColor: colors.background,
    borderColor: colors.grey,
    borderWidth: 1,
    width: "80%",
    maxHeight: 20,
  },
  inputColumn: {
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "45%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
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
    marginTop: 5,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "inherit",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "inherit",
  },
  durationColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "25%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  rapidColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "45%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  longColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "30%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  bigColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "75%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  standardColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "20%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
});
