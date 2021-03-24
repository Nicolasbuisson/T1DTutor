import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class AlcoholAndOtherSubstances extends Component {
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
            title="Alcohol and other Substances"
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
              <Text style={styles.title}>Alcohol</Text>
              <Text style={styles.text}>
                People with type 1 diabetes should be aware that alcohol may
                result in delayed low blood sugar (hypoglycemia) up to 24 hours
                after alcohol consumption. Alcohol should be limited to 2
                standard drinks/ day or less than 10 drinks/ week for women, and
                limited to 3 standard drinks/ day or less than 15 drinks/ week
                for men.
                {"\n\n"}
                Alcohol can:
                {"\n"} - affect judgement
                {"\n"} - provide empty calories that might lead to weight gain
                if taken in excess
                {"\n"} - increase blood pressure and triglycerides (a type of
                fat in the blood)
                {"\n"} - cause damage to liver and nerves including brain and
                sexual organs
                {"\n"} - contribute to inflammation of the pancreas
                {"\n"} - dehydrate the body which is very dangerous in someone
                with high blood sugar
                {"\n"} - worsen eye disease
                {"\n\n"}
                For young people in particular, alcohol use:
                {"\n"} - can lead to addiction
                {"\n"} - is associated with a dramatic increase in injuries and
                death
                {"\n\n"}
                To prevent hypoglycemia when drinking alcohol:
                {"\n"} BEFORE drinking alcohol:
                {"\n"} - Eat regular meals, do not skip insulin, and check your
                blood sugar levels frequently (keep your blood glucose meter
                with you).
                {"\n"} - Always have a treatment for low blood sugar with you
                (such as 4 glucose tablets or 150 mL regular pop or 6 Life
                Savers®).
                {"\n"} - Wherever you are, make sure someone with you knows your
                signs and symptoms of low blood sugar and how to treat it so
                they can help you.
                {"\n"} - Be aware that glucagon, a treatment for low blood
                sugar, will not work while alcohol is in the body. Because of
                this, make sure that someone knows to call an ambulance if you
                pass out.
                {"\n"} - Wear diabetes identification such as a MedicAlert®
                bracelet.
                {"\n\n"} WHILE drinking alcohol:
                {"\n"} - Eat carbohydrate-rich foods when drinking alcohol.
                {"\n"} - Eat extra carbohydrate-rich foods if you are dancing,
                playing sports or doing other physical activity.
                {"\n"} - Always pour your own drinks.
                {"\n\n"} AFTER drinking alcohol:
                {"\n"} - Tell a responsible person that you have been drinking.
                They should look for low blood sugar symptoms in the case you
                cannot.
                {"\n"} - Check your blood sugar before going to bed. Eat a
                carbohydrate snack if your blood sugar is lower than usual.
                {"\n"} - Set an alarm or have a responsible person wake you up
                through the night and early morning – a delayed low blood sugar
                can occur anytime up to 24 hours after drinking alcohol.
                {"\n"} - You need to get up on time the next day for any food or
                insulin you normally take. Missed insulin can lead to high blood
                sugar, ketones and diabetic ketoacidosis (DKA).
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Cannabis (Marijuana)</Text>
              <Text style={styles.text}>
                Cannabis can have a number of effects on blood glucose control,
                depending on dosage. These include:
                {"\n"} - Memory and concentration-related problems which may
                affect blood sugar control.
                {"\n"} - Increased appetite, or ‘munchies’ – a craving for
                sweet/fatty food, which can then lead to high blood sugar
                {"\n"} - Insulin resistance (i.e. you need more insulin to have
                an effect than before) and high blood sugar when heavily used.
                {"\n\n"}Cannabis indirectly affects blood glucose levels due to
                the drugs’ effect on the brain, can lead to users not
                recognizing symptoms of low blood sugar or confusing such
                symptoms with the effects of the drug.
                {"\n\n"}Though cannabis has only been legal in Canada recently,
                prior studies have shown the following:
                {"\n"} - those with type 1 diabetes who use it on a regular
                basis have higher blood sugars on average than those who do not
                {"\n"} - those with type 1 diabetes who use it regularly are at
                double the risk of diabetic ketoacidosis
                {"\n"} - chronic cannabis use can trigger a cyclic vomiting
                syndrome, or "hyperemesis", which in itself can trigger diabetic
                ketoacidosis.
                {"\n\n"}If you are to use cannabis, please be aware of the risks
                associated with it. Never feel afraid to tell your healthcare
                provider about your use, as it allows for them to help you more.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Alcool et Autres Substances"
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
              <Text style={styles.title}>L'Alcool</Text>
              <Text style={styles.text}>
                Les personnes atteintes de diabète de type 1 doivent être
                conscientes que l'alcool peut entraîner un faible taux de sucre
                dans le sang (hypoglycémie) jusqu'à 24 heures après la
                consommation d'alcool.{"\n"}L'alcool doit être limité à 2 verres
                standard / jour ou moins de 10 verres / semaine pour les femmes,
                et limité à 3 verres standards / jour ou moins de 15 verres /
                semaine pour les hommes.
                {"\n\n"}
                L'alcool peut:
                {"\n"} - affecter le jugement
                {"\n"} - fournir des calories vides qui pourraient entraîner une
                prise de poids en cas de consommation excessive
                {"\n"} - augmenter la pression artérielle et les triglycérides
                (un type de graisse dans le sang)
                {"\n"} - endommager le foie et les nerfs, y compris le cerveau
                et les organes sexuels
                {"\n"} - contribuent à l'inflammation du pancréas
                {"\n"} - déshydrater le corps, ce qui est très dangereux chez
                une personne ayant une glycémie élevée
                {"\n"} - aggraver la maladie oculaire
                {"\n\n"}
                Pour les jeunes en particulier, la consommation d'alcool:
                {"\n"} - peut conduire à la dépendance
                {"\n"} - est associée à une augmentation spectaculaire des
                blessures et des décès
                {"\n\n"}
                Pour prévenir l'hypoglycémie en buvant de l'alcool:
                {"\n"} AVANT de boire de l'alcool:
                {"\n"} - Prenez des repas réguliers, ne sautez pas d'insuline et
                vérifiez fréquemment votre glycémie (gardez votre lecteur de
                glycémie avec vous).
                {"\n"} - Ayez toujours un traitement pour l'hypoglycémie avec
                vous (comme 4 comprimés de glucose ou 150 ml de boisson gazeuse
                ordinaire ou 6 Life Savers®).
                {"\n"} - Où que vous soyez, assurez-vous que quelqu'un qui vous
                accompagne connaît vos signes et symptômes d'hypoglycémie et
                comment le traiter afin qu'il puisse vous aider.
                {"\n"} - Sachez que le glucagon, un traitement pour
                l'hypoglycémie, ne fonctionnera pas tant que l'alcool est dans
                le corps. Pour cette raison, assurez-vous que quelqu'un sait
                qu'il faut appeler une ambulance si vous vous évanouissez.
                {"\n"} - Portez une identification du diabète, comme un bracelet
                MedicAlert®.
                {"\n\n"} TOUT EN buvant de l'alcool:
                {"\n"} - Mangez des aliments riches en glucides lorsque vous
                buvez de l'alcool.
                {"\n"} - Mangez des aliments riches en glucides si vous dansez,
                faites du sport ou faites une autre activité physique.
                {"\n"} - Versez toujours vos propres boissons.
                {"\n\n"} APRÈS avoir bu de l'alcool:
                {"\n"} - Dites à une personne responsable que vous avez bu. Ils
                doivent rechercher des symptômes d'hypoglycémie dans le cas où
                vous ne le pouvez pas.
                {"\n"} - Vérifiez votre glycémie avant de vous coucher. Mangez
                une collation glucidique si votre glycémie est plus basse que
                d'habitude.
                {"\n"} - Réglez une alarme ou demandez à une personne
                responsable de vous réveiller toute la nuit et tôt le matin -
                une hypoglycémie retardée peut survenir à tout moment jusqu'à 24
                heures après avoir bu de l'alcool.
                {"\n"} - Vous devez vous lever à l'heure le lendemain pour tout
                aliment ou insuline que vous prenez normalement. L'absence
                d'insuline peut entraîner une glycémie élevée, des cétones et
                une acidocétose diabétique (ACD).
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Cannabis (Marijuana)</Text>
              <Text style={styles.text}>
                Le cannabis peut avoir un certain nombre d'effets sur le
                contrôle de la glycémie, selon la dose. Ceux-ci inclus:
                {"\n"} - Problèmes de mémoire et de concentration qui peuvent
                affecter le contrôle de la glycémie.
                {"\n"} - Augmentation de l'appétit, ou «grignotines» - une envie
                de nourriture sucrée / grasse, qui peut alors conduire à une
                glycémie élevée.
                {"\n"} - Résistance à l'insuline (c'est-à-dire que vous avez
                besoin de plus d'insuline pour avoir un effet qu'auparavant) et
                une glycémie élevée en cas d'utilisation intensive.
                {"\n\n"}Le cannabis affecte indirectement la glycémie en raison
                de l’effet des médicaments sur le cerveau, peut amener les
                utilisateurs à ne pas reconnaître les symptômes d’hypoglycémie
                ou à confondre ces symptômes avec les effets du médicament.
                {"\n\n"}Bien que le cannabis n'ait été légal au Canada que
                récemment, des études antérieures ont montré ce qui suit:
                {"\n"} - les personnes atteintes de diabète de type 1 qui
                l'utilisent régulièrement ont en moyenne une glycémie plus
                élevée que celles qui n'en utilisent pas
                {"\n"} - les personnes atteintes de diabète de type 1 qui
                l'utilisent régulièrement courent le double du risque
                d'acidocétose diabétique
                {"\n"} - la consommation chronique de cannabis peut déclencher
                un syndrome de vomissement cyclique, ou «hyperémèse», qui en soi
                peut déclencher une acidocétose diabétique.
                {"\n\n"}Si vous devez consommer du cannabis, veuillez être
                conscient des risques qui y sont associés. N'ayez jamais peur de
                parler de votre utilisation à votre professionnel de la santé,
                car cela lui permet de vous aider davantage.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default AlcoholAndOtherSubstances;

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
