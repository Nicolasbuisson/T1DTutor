import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class FindingPatterns extends Component {
  constructor() {
    super();
    this.state = {
      showPump: false,
      Pump670: false,
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
    if (this.context.user?.questions?.pumpType === "Medtronic: MiniMed 670G") {
      this.setState({ Pump670: true });
    }
    if (this.context.user?.questions?.injectionsOrPump === "Pump") {
      this.setState({ showPump: true });
    }
    if (this.context.user?.language === "French") {
      this.setState({ english: false });
    }
  }

  render() {
    if (this.state.english) {
      return (
        <View style={styles.container}>
          <Header
            title="Finding Patterns"
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
                It can be difficult to find patterns to your blood sugars. Some
                days may feel like you get different blood sugars for the same
                dose of insulin. Knowing key concepts are helpful.
                {"\n\n"}
                Always remember there is a close relationship between exercise,
                insulin dose, and food. Any change to one can change the other.
                Eating more starch at a meal can increase your blood sugar. To
                prevent this, you can either increase your insulin dose, or do
                exercise.
                {"\n\n"}
                Though these are the 3 main factors, there are many other
                elements: glycemic index, fat content, stress, infections,
                change in sleeping cycle, and certain medications. Because of
                this, watch for patterns over 2 to 3 days before making changes.
                {"\n\n"}
                Here are some recommendations on how to titrate your insulin
                based on patterns (assuming food and exercise are not the
                issue). Talk to your doctor and diabetes educator to make sure
                this is right for you.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                When you are changing your doses:
                {"\n"} - The most important blood sugar readings are before each
                meal and before going to bed
                {"\n"} - Try and keep good records of your blood sugar and
                insulin doses (either by writing it down or downloading with
                software)
                {"\n"} - Make sure low blood sugar episodes are dealt with first
                for safety before adjusting any other doses for high blood
                sugar.
              </Text>
            </View>
            {!this.state.showPump && (
              <View style={styles.listItem}>
                <Text style={styles.title}>Adjusting injection doses</Text>
                <Text style={styles.text}>
                  {"\n"}
                  Here are some rules of thumb for low blood sugars:
                  {"\n"} - If you have low blood sugar after a meal, the
                  rapid-acting insulin given before the low must be changed. For
                  example, if you have low blood sugar after lunch, your dose of
                  rapid-acting insulin at lunch needs to be reduced.
                  {"\n"} - If you have low blood sugar during the night, or in
                  the morning when waking up, your long-acting insulin needs to
                  be reduced. This should be corrected as soon as possible -
                  having low sugar when you are not awake can be very dangerous.
                  {"\n"} - If you have low blood sugar only after your sugar is
                  high and you've given extra insulin to correct, your sliding
                  scale needs to be adjusted. Talk to your healthcare team to
                  change this.
                  {"\n"} - Whenever insulin doses need to be reduced, do so by 1
                  - 2 units each time.
                  {"\n\n"}
                  Here are some rules of thumb for high blood sugars:
                  {"\n"} - If your blood sugar rises by at least 3 mmol/L after
                  a meal, the rapid-acting insulin taken at the meal needs to be
                  increased.
                  {"\n"} - if your blood sugar rises by at least 3 mmol/L
                  between bedtime and morning, your long-acting insulin may need
                  to be increased, as long as blood sugar did not go low
                  overnight. An untreated low blood sugar at night can cause
                  your sugar to go high after. If not, increase your long-acting
                  insulin.
                  {"\n"} - If your blood sugar is high after a low blood sugar,
                  preventing the low blood sugar may prevent the high blood
                  sugar.
                  {"\n"} - If you notice your blood sugar is high at times you
                  are snacking without giving insulin, snacking is the cause. If
                  you do not have an insulin dose for snacking, talk to your
                  healthcare team about this. Otherwise, try to avoid snacking
                  on foods with starch or sugar when you are hungry.
                  {"\n"} - Whenever insulin doses need to be increased, do so by
                  1 to 2 units.
                </Text>
              </View>
            )}
            {this.state.showPump && !this.state.Pump670 && (
              <View style={styles.listItem}>
                <Text style={styles.title}>Adjusting pump settings</Text>
                <Text style={styles.text}>
                  {"\n"}
                  Before discussing dose adjustments, remember the following
                  about your pump settings:
                  {"\n"} - An insulin: carbohydrate ratio (ICR) is the ratio of
                  how many units to give per grams of carbohydrates. For
                  example, a ratio of 1:10 means you give 1 unit for 10 grams.
                  If you need to give more insulin, the ratio needs to go down
                  because you are dividing by a smaller number (and vice versa).
                  {"\n"} - Basal rates are measured in units per hour.
                  {"\n"} - Insulin sensitivity factor or correction factor
                  (ISF/CF) are terms used in different pumps. Both are used to
                  calculate extra doses of insulin when your sugar is high. This
                  is also a ratio. A factor of 1:4, or 4, means that for 1 unit
                  of insulin, your blood sugar drops by 4 mmol/L. If you need to
                  give more insulin, the number needs to go down because you are
                  dividing by a smaller number (and vice versa).
                  {"\n\n"}
                  Here are some rules of thumb for low blood sugars:
                  {"\n"} - If you have low blood sugar after a meal, the ICR
                  used must be changed. For example, if you have low blood sugar
                  after lunch, your lunchtime ICR needs to be increased by 0.5
                  to 1. If your ICR is 1:10, increase to 1: 10.5 or 1:11 (the
                  option of 0.5 depends on the pump type).
                  {"\n"} - If you have low blood sugar a long time after a meal
                  or overnight, your basal rates right before the episode should
                  be decreased. Decrease your basal rates by at least 0.05
                  units/hour. For example, if you have different basal rates at
                  midnight and 3 am, and you have a low blood sugar at 2 am,
                  your midnight basal rate needs to be reduced.
                  {"\n"} - If your blood sugar drops after each correction dose
                  of insulin, your ISF/CF needs to be increased by 0.5 to 1. For
                  example, if your ISF/CF is 4, you should increase it to 4.5 or
                  5.
                  {"\n\n"}Overnight low blood sugar should be corrected as soon
                  as possible - having low sugar when you are not awake can be
                  very dangerous.
                  {"\n\n"}
                  Here are some rules of thumb for high blood sugars:
                  {"\n"} - If your blood sugar rises by at least 3 mmol/L right
                  after a meal, your ICR should be decreased by 0.5 to 1. For
                  example, if your ICR is 1:10, you can decrease to 1: 9 or 1:
                  9.5.
                  {"\n"} - If your blood sugar rises by at least 3 mmol/L a long
                  time after a meal or overnight, your basal rates before the
                  rise should be increased by 0.05 units/hour. If your blood
                  sugar is high in the morning, make sure there was no low blood
                  sugar overnight. Sometimes an untreated low blood sugar at
                  night can cause a stress response that makes your sugar high.
                  If this is not the case, increase your basal rates before.
                  {"\n"} - If your blood sugar is high after a low blood sugar,
                  preventing the low blood sugar may prevent this.
                  {"\n"} - If you notice your blood sugar is high at times you
                  are snacking without giving insulin, snacking is the cause. If
                  you do not have an insulin dose for snacking, talk to your
                  healthcare team about this. Otherwise, try to avoid snacking
                  on foods with starch or sugar when you are hungry.
                </Text>
              </View>
            )}
            {this.state.showPump && this.state.Pump670 && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Adjusting the settings of your pump
                </Text>
                <Text style={styles.text}>
                  {"\n"}
                  Before discussing dose adjustments, remember the following
                  about your pump:
                  {"\n"} - An insulin: carbohydrate ratio (ICR) is the ratio of
                  how many units to give per grams of carbohydrates. For
                  example, a ratio of 1:10 means you give 1 unit for 10 grams.
                  If you need to give more insulin, the ratio needs to go down
                  because you are dividing by a smaller number (or vice versa).
                  {"\n"} - Basal rates are measured in units per hour.
                  {"\n"} - Insulin sensitivity factor (ISF) is used to calculate
                  extra doses of insulin to correct your sugar when it is high.
                  This is also a ratio. For example, a factor of 1:4, or 4,
                  means that for 1 unit of insulin, your blood sugar drops by 4
                  mmol/L. If you need to give more insulin, the number needs to
                  go down because you are dividing by a smaller number (and vice
                  versa).
                  {"\n"} - Active insulin time is how long a dose of insulin is
                  active in your system. This influences how much insulin you
                  can give yourself after your last dose of insulin.
                  {"\n"} - When 670G is in Manual Mode, all these settings,
                  including your targe blood sugar, can be changed. When you are
                  in AutoMode, only the ICR and active insulin time can be
                  changed, while your basal rates, ISF, and targets are set by
                  the pump.
                  {"\n\n"}
                  Here are some rules of thumb for low blood sugars:
                  {"\n"} - If you have low blood sugar right after a meal, the
                  ICR used before the episode must be changed to prevent low
                  blood sugar. For example, if you have low blood sugar after
                  lunch, your lunchtime ICR needs to be increased by 0.5 to 1.
                  If your ICR at lunchtime is 1:10, increase to 1: 10.5 or 1:11
                  (the option of 0.5 depends on the pump type).
                  {"\n"} - If your blood sugar is below target a long time after
                  a meal or overnight, your active insulin time should be
                  increased by 15 - 30 minutes.
                  {"\n\n"}
                  Here are some rules of thumb for high blood sugars:
                  {"\n"} - If your blood sugar rises by at least 3 mmol/L right
                  after a meal, your ICR needs to be decreased by 0.5 to 1. For
                  example, if your ICR is 1:10, you can decrease to 1: 9 or 1:
                  9.5.
                  {"\n"} - If your blood sugar remains above target a long time
                  after a meal or overnight, your active insulin time needs to
                  be decreased by 15 - 30 minutes.
                  {"\n"} - If your blood sugar is high after a low blood sugar,
                  preventing the low blood sugar may prevent this.
                  {"\n"} - If you notice your blood sugar is high at times you
                  are snacking without giving insulin, snacking is the cause. If
                  you do not have an insulin dose for snacking, talk to your
                  healthcare team about this. Otherwise, try to avoid snacking
                  on foods with starch or sugar when you are hungry.
                  {"\n\n"}
                  If you remain long periods of time in Manual Mode, your ISF
                  and basal rates may need to be adjusted. If you are using
                  Manual Mode, here are other rules to consider:
                  {"\n"} - If you have low blood sugar a long time after a meal
                  or overnight, your basal rates right before the episode should
                  be decreased. Decrease your basal rates by at least 0.05
                  units/hour. For example, if you have different basal rates at
                  midnight and 3 am, and you have a low blood sugar at 2 am,
                  your midnight basal rate needs to be reduced.
                  {"\n"} - If your blood sugar rises by at least 3 mmol/L a long
                  time after a meal or overnight, your basal rates before the
                  rise need to be increased by 0.05 units/hour.
                  {"\n"} - If your blood sugar drops after each correction dose
                  of insulin, your ISF needs to be increased by 0.5 to 1. If
                  your ISF is 4, you should increase it to 4.5 or 5.
                  {"\n"} - If your blood sugar is high after a low blood sugar,
                  preventing the low blood sugar may prevent this.
                </Text>
              </View>
            )}
            <View style={styles.listItem}>
              <Text style={styles.title}>Control-IQ</Text>
              <Text style={styles.text}>
                {"\n"}
                Using Control-IQ on your Tandem t:slim pumps means all your pump
                settings are still at work, but with a little help:
                {"\n"} - When your sugar is above 8.9, your basal rate goes up
                {"\n"} - When your sugar is above 10.0, a correction bolus is
                given
                {"\n"} - When your sugar is less than 6.25, your basal rate goes
                down
                {"\n"} - When your sugar is less than 3.9, your bolus rate
                suspends
                {"\n\n"}
                Control-IQ also includes "Sleep Activity" and "Exercise
                Activity."
                {"\n"} - In Sleep Activity, when sugar is above 6.7, basal rate
                goes up. There is no correction bolus. Thresholds for basal
                decrease and suspension are the same.
                {"\n"} - In Exercise Activity, when sugar is less than 7.8,
                basal rate goes down. When sugar is less than 4.4, basal rate is
                suspended. Thresholds for basal increase and correction bolus
                are the same.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Trouver des Modèles"
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
                Il peut être difficile de trouver des modèles de glycémie.
                Certains jours, vous aurez l'impression d'avoir des taux de
                glycémie différents pour la même dose d'insuline. Connaître les
                concepts clés est utile.
                {"\n\n"}
                Souvenez qu'il existe une relation entre l'exercice, la dose
                d'insuline et la nourriture. Une modification de l'un peut
                changer l'autre. Manger plus de glucides au cours d'un repas
                peut augmenter votre glycémie. Pour éviter cela, vous pouvez
                augmenter votre dose d'insuline ou faire de l'exercice.
                {"\n\n"}
                Bien que ce soient les 3 principaux facteurs, de nombreux autres
                éléments peuvent entrer en jeu: l'indice glycémique, la quantité
                de graisse, le stress, les infections, la modification du cycle
                de sommeil et certains médicaments. Pour cette raison,
                surveillez les modèles pendant 2 à 3 jours avant d'apporter des
                changements.
                {"\n\n"}
                Voici quelques recommandations sur la façon de titrer votre
                insuline en fonction de modèles (en supposant que la nourriture
                et l'exercice ne sont pas le problème). Parlez à votre médecin
                et à votre éducateur en diabète pour vous assurer que cela vous
                convient.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Lorsque vous changez vos doses:
                {"\n"} - Les lectures de glycémie les plus importantes ont lieu
                avant chaque repas et avant le coucher
                {"\n"} - Essayez de conserver de bons enregistrements de votre
                glycémie et de vos doses d'insuline (soit en les écrivant, soit
                en les téléchargeant avec un logiciel)
                {"\n"} - Assurez-vous que les épisodes d'hypoglycémie sont
                traités en premier pour des raisons de sécurité avant d'ajuster
                toute autre dose pour l'hyperglycémie.
              </Text>
            </View>
            {!this.state.showPump && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Ajustement des doses d'injection
                </Text>
                <Text style={styles.text}>
                  {"\n"}
                  Voici quelques règles de base pour l'hypoglycémie:
                  {"\n"} - Si vous avez une hypoglycémie après un repas,
                  l'insuline à action rapide administrée avant l'hypoglycémie
                  doit être modifiée. Par exemple, si vous avez une glycémie
                  basse après le déjeuner, votre dose d'insuline à action rapide
                  au déjeuner doit être réduite.
                  {"\n"} - Si votre glycémie est basse pendant la nuit ou le
                  matin au réveil, votre insuline à action prolongée doit être
                  réduite. Cela devrait être corrigé dès que possible - avoir
                  une faible teneur en sucre lorsque vous n'êtes pas réveillé
                  peut être très dangereux.
                  {"\n"} - Si votre taux de sucre dans le sang est faible
                  seulement après que votre taux de sucre est élevé et que vous
                  avez donné de l'insuline supplémentaire pour corriger, votre
                  échelle d'insuline doit être ajustée. Parlez à votre équipe de
                  soins pour la changer.
                  {"\n"} - Chaque fois que les doses d'insuline doivent être
                  réduites, faites-le de 1 à 2 unités à chaque fois.
                  {"\n\n"}
                  Voici quelques règles de base pour l'hyperglycémie:
                  {"\n"} - Si votre glycémie augmente d'au moins 3 mmol/L après
                  un repas, l'insuline à action rapide prise au repas doit être
                  augmentée.
                  {"\n"} - Si votre glycémie augmente d'au moins 3 mmol/L entre
                  le coucher et le matin, votre insuline à action prolongée
                  devrait être augmentée, tant que la glycémie n'est pas
                  descendue pendant la nuit. Une hypoglycémie non traitée la
                  nuit peut faire monter votre taux de sucre après. Sinon,
                  augmentez votre insuline à action prolongée.
                  {"\n"} - Si votre glycémie est élevée après une hypoglycémie,
                  la prévention de l'hypoglycémie peut empêcher l'hyperglycémie.
                  {"\n"} - Si vous remarquez que votre glycémie est élevée à des
                  moments où vous mangez sans insuline, les collations en sont
                  la cause. Si vous n'avez pas de dose d'insuline pour des
                  collations, parlez-en à votre équipe de soins. Sinon, essayez
                  d'éviter des aliments contenant du sucre lorsque vous avez
                  faim.
                  {"\n"} - Chaque fois que les doses d'insuline doivent être
                  augmentées, faites-le de 1 à 2 unités.
                </Text>
              </View>
            )}
            {this.state.showPump && !this.state.Pump670 && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Réglage des paramètres de la pompe
                </Text>
                <Text style={styles.text}>
                  {"\n"}
                  Avant de discuter des ajustements de dose, rappelez-vous ce
                  qui suit concernant les réglages de votre pompe:
                  {"\n"} - Un ratio de glucides (RG) est le ratio du nombre
                  d'unités à administrer par gramme de glucides. Par exemple, un
                  ratio de 1:10 signifie que vous donnez 1 unité pour 10
                  grammes. Si vous devez donner plus d'insuline, le ratio doit
                  diminuer car vous divisez par un nombre plus petit (et vice
                  versa).
                  {"\n"} - Les débits basaux sont mesurés en unités par heure.
                  {"\n"} - Le facteur de sensibilité à l'insuline ou le facteur
                  de correction (FSI) sont des termes utilisés dans des pompes
                  différentes. Les deux sont utilisés pour calculer des doses
                  supplémentaires d'insuline lorsque votre taux de sucre est
                  élevé. C'est aussi un ratio. Un facteur de 1: 4 ou 4 signifie
                  que pour 1 unité d'insuline, votre glycémie baisse de 4 mmol /
                  L. Si vous devez donner plus d'insuline, le nombre doit
                  diminuer car vous divisez par un plus petit nombre (et vice
                  versa).
                  {"\n\n"}
                  Voici quelques règles de base pour l'hypoglycémie:
                  {"\n"} - • Si vous avez une glycémie basse après un repas, le
                  RG utilisé doit être changé. Par exemple, si votre glycémie
                  est basse après le déjeuner, votre RG du déjeuner doit être
                  augmenté de 0,5 à 1. Si votre RG est de 1:10, augmentez à 1:
                  10,5 ou 1:11 (l'option de 0,5 dépend de la pompe type).
                  {"\n"} - Si vous avez une hypoglycémie longtemps après un
                  repas ou pendant la nuit, vos débits basaux juste avant
                  l'épisode doivent être diminués. Diminuez vos débits basaux
                  d'au moins 0,05 unité / heure. Par exemple, si vous avez des
                  débits basaux différents à minuit et 3 heures du matin et que
                  votre glycémie est basse à 2 heures du matin, votre débit
                  basal à minuit doit être réduit.
                  {"\n"} - Si votre glycémie baisse après chaque dose de
                  correction d'insuline, votre FSI doit être augmenté de 0,5 à
                  1. Par exemple, si votre FSI est de 4, vous devez l'augmenter
                  à 4,5 ou 5.
                  {"\n\n"}L'hypoglycémie au cours de la nuit doit être corrigée
                  dès que possible - avoir un faible taux de sucre lorsque vous
                  n'êtes pas réveillé peut être très dangereux.
                </Text>
              </View>
            )}
            {this.state.showPump && this.state.Pump670 && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  Ajuster les paramètres de votre pompe
                </Text>
                <Text style={styles.text}>
                  {"\n"}
                  Avant de discuter des ajustements de dose, rappelez-vous ce
                  qui suit à propos de votre pompe:
                  {"\n"} - Un ratio de glucides (RG) est le ratio du nombre
                  d'unités à administrer par gramme de glucides. Par exemple, un
                  rapport de 1:10 signifie que vous donnez 1 unité pour 10
                  grammes. Si vous devez donner plus d'insuline, le ratio doit
                  diminuer car vous divisez par un nombre plus petit (ou vice
                  versa).
                  {"\n"} - Les débits basaux sont mesurés en unités par heure.
                  {"\n"} - Le facteur de sensibilité à l'insuline (FSI) est
                  utilisé pour calculer des doses supplémentaires d'insuline
                  afin de corriger votre taux de sucre lorsqu'il est élevé.
                  C'est aussi un ratio. Par exemple, un facteur de 1: 4 ou 4
                  signifie que pour 1 unité d'insuline, votre glycémie diminue
                  de 4 mmol / L. Si vous devez donner plus d'insuline, le nombre
                  doit diminuer car vous divisez par un plus petit nombre (et
                  vice versa).
                  {"\n"} - La durée d'insuline active est la durée pendant
                  laquelle une dose d'insuline est active dans votre système.
                  Cela influence la quantité d'insuline que vous pouvez vous
                  administrer après votre dernière dose d'insuline.
                  {"\n"} - Lorsque le 670G est en mode manuel, tous ces
                  paramètres, y compris votre glycémie cible, peuvent être
                  modifiés. Lorsque vous êtes en automode, seuls les RG et la
                  durée d'insuline active peuvent être modifiés, tandis que vos
                  débits basaux, le FSI et les objectifs sont définis par la
                  pompe.
                  {"\n\n"}
                  Voici quelques règles de base pour l'hypoglycémie:
                  {"\n"} - Si vous avez une hypoglycémie juste après un repas,
                  le RG utilisé avant l'épisode doit être modifié pour éviter
                  une hypoglycémie. Par exemple, si votre glycémie est basse
                  après le déjeuner, votre RG à l'heure du déjeuner doit être
                  augmenté de 0,5 à 1. Si votre RG à l'heure du déjeuner est de
                  1:10, augmentez à 1: 10,5 ou 1:11 (l'option de 0,5 dépend de
                  le type de pompe).
                  {"\n"} - Si votre glycémie est inférieure à l'objectif
                  longtemps après un repas ou pendant la nuit, votre durée
                  d'insuline active doit être augmenté de 15 à 30 minutes.
                  {"\n\n"}• L'hypoglycémie au cours de la nuit doit être
                  corrigée dès que possible - avoir un faible taux de sucre
                  lorsque vous n'êtes pas réveillé peut être très dangereux.
                  {"\n\n"}
                  Voici quelques règles de base pour l'hyperglycémie:
                  {"\n"} - Si votre glycémie augmente d'au moins 3 mmol / L
                  juste après un repas, votre RG doit être diminué de 0,5 à 1.
                  Par exemple, si votre RG est de 1:10, vous pouvez diminuer à
                  1: 9 ou 1: 9.5.
                  {"\n"} - Si votre glycémie reste au-dessus de l'objectif
                  longtemps après un repas ou toute la nuit, votre durée
                  d'insuline active doit être diminué de 15 à 30 minutes.
                  {"\n"} - Si votre glycémie est élevée après une hypoglycémie,
                  la prévention de l'hypoglycémie peut l'empêcher.
                  {"\n"} - Si vous remarquez que votre glycémie est élevée à des
                  moments où vous grignotez sans insuline, les collations en
                  sont la cause. Si vous n'avez pas de dose d'insuline pour les
                  collations, parlez-en à votre équipe de soins. Sinon, essayez
                  d'éviter des collations contenant de l'amidon ou du sucre
                  lorsque vous avez faim.
                  {"\n\n"}
                  Si vous restez de longues périodes en mode manuel, votre ISF
                  et vos débits de base devront peut-être être ajustés. Si vous
                  utilisez le mode manuel, voici d'autres règles à prendre en
                  compte:
                  {"\n"} - Si vous avez une hypoglycémie longtemps après un
                  repas ou pendant la nuit, vos débits basaux juste avant
                  l'épisode doivent être diminués. Diminuez vos débits basaux
                  d'au moins 0,05 unité / heure. Par exemple, si vous avez des
                  débits basaux différents à minuit et 3 heures du matin et que
                  votre glycémie est basse à 2 heures du matin, votre débit
                  basal à minuit doit être réduit.
                  {"\n"} - Si votre glycémie augmente d'au moins 3 mmol / L
                  longtemps après un repas ou toute la nuit, vos taux basaux
                  avant l'augmentation doivent être augmentés de 0,05 unité /
                  heure.
                  {"\n"} - Si votre glycémie baisse après chaque dose de
                  correction d'insuline, votre FSI doit être augmenté de 0,5 à
                  1. Si votre FSI est de 4, vous devez l'augmenter à 4,5 ou 5.
                  {"\n"} - Si votre glycémie est élevée après une hypoglycémie,
                  la prévention de l'hypoglycémie peut l'empêcher.
                </Text>
              </View>
            )}
            <View style={styles.listItem}>
              <Text style={styles.title}>Control-IQ</Text>
              <Text style={styles.text}>
                {"\n"}• L'utilisation de Control-IQ sur votre pompe Tandem t:
                slim signifie que tous les réglages de votre pompe sont encore
                en effet, mais avec un peu d'aide:
                {"\n"} - Lorsque votre taux de sucre est plus de 8,9, votre taux
                de base augmente
                {"\n"} - Lorsque votre taux de sucre est plus de 10,0, un bolus
                de correction est administré
                {"\n"} - Lorsque votre taux de sucre est moins de 6,25, votre
                taux basal descends
                {"\n"} - Lorsque votre taux de sucre est moins de 3,9, votre
                débit de bolus est suspendu
                {"\n\n"}
                Control-IQ comprend également «Activité de sommeil» et «Activité
                d'exercice».
                {"\n"} - En activité de sommeil, lorsque le taux de sucre est
                supérieur à 6,7, le débit de base augmente. Il n'y a pas de
                bolus de correction. Les seuils de diminution basale et de
                suspension sont les mêmes
                {"\n"} - Dans l'activité d'exercice, lorsque le sucre est
                inférieur à 7,8, le taux de base diminue. Lorsque le sucre est
                inférieur à 4,4, le débit basal est suspendu. Les seuils
                d'augmentation basale et de bolus de correction sont les mêmes.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default FindingPatterns;

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
