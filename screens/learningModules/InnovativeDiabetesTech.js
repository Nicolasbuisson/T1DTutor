import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import Context from "../../Context";

class InnovativeDiabetesTech extends Component {
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
            title="Innovative Technologies"
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
                the skin and transmission to a separate device. There are 2
                types of CGM:
                {"\n"} - Real-time CGM (such as Guardian(R) or Dexcom(R))
                measures glucose on a continuous basis, with or without
                calibration with finger-prick. Real-time CGM can be set with
                alarms for high or low glucose.
                {"\n"} - Flash CGM (such as Freestyle Libre(R)) measures the
                last 8 hours of glucose when the sensor is scanned. This device
                does not come with alarms, but newer versions with alarms are
                already available in Europe, and will eventually come to Canada.
                {"\n\n"}CGM has become the recommended choice for those with
                type 1 diabetes to monitor their blood sugars. It allows your
                diabetes team to know what is happening in between finger-prick
                tests to best adjust your treatment plan. Using CGM has shown to
                help reduce hypoglycemia and improve blood sugar control.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Insulin Pumps</Text>
              <Text style={styles.text}>
                Insulin pumps have been around for quite a while, but are
                getting better every year. Insulin pumps work by giving a
                continuous infusion of rapid-acting insulin ("basal"), with the
                ability to give extra insulin for food and correction ("bolus")
                as needed. All settings are put in the computer of the pump
                based on time of day. The person wearing the pump only has to
                put in the amount of carbs being eaten and blood sugar levels;
                the calculator in the pump helps to suggest what amount of
                insulin needs to be given.
                {"\n"} There are 2 types of pumps:
                {"\n"} - Tube-based pumps, where a machine is attached to a tube
                of insulin connected to a catheter that is inserted into the fat
                tissue of the wearer. There are various companies available that
                offer this type of pump, which include Tandem Diabetes Care (R),
                Medtronic (R), and more recently, Ypso (R).
                {"\n"} - Tubeless pumps, where a pod of insulin with a catheter
                is inserted into the fat tissue of the wearer. Everything is
                controlled by a hand-held machine. An example of this is the
                OmniPod pump.
                {"\n\n"}Research has shown that insulin pump therapy, given the
                ability to fine-tune insulin delivery more accurately, has some
                benefit over injections. However, this depends on the user and
                does not replace routine diabetes care such as accurate carb
                counting, monitoring glucose levels, and giving insulin before
                eating and when sugars are high.
                {"\n\n"}Coverage for insulin pumps is variable throughout
                Canada. Talk to your diabetes care team concerning pump
                coverage.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Closed-loop systems ("Artificial Pancreas" or "Looping")
              </Text>
              <Text style={styles.text}>
                Closed-loop insulin therapy refers to using insulin pumps and
                CGM together, along with an algorithm, to automatically change
                insulin doses based on glucose readings. This allows for less
                hypoglycemia at night, as well as better blood sugar control
                during the day. The wearer needs only to put in carb amounts and
                blood sugar readings as needed.
                {"\n\n"}In Canada, available systems include Control-IQ by
                Tandem, and Medtronic's MiniMed 670G. More choices are coming as
                the market expands.
                {"\n\n"}These systems do not replace the need for routine
                diabetes care, but they help lessen the ups and downs.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Diabetes phone and tablet applications: mHealth
              </Text>
              <Text style={styles.text}>
                Just like this app, there are many other smartphone apps to help
                manage diabetes and connect with others in the diabetes
                community. A great example are tools to help with carb counting,
                that even include photo recognition! Be aware that some of these
                apps are unregulated by Health Canada or not created by
                healthcare professionals.
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
                Scientists are working on closed-loop systems that don't just
                give insulin, but other hormones like glucagon (the antidote to
                insulin) and pramlintide (a gut hormone that helps with blood
                sugars).
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                There are many advances on the way to help with type 1 diabetes.
                If you ever want to help with the progress of diabetes
                treatment, you can volunteer through research! These can be
                found at{" "}
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
                    WebBrowser.openBrowserAsync(
                      "https://www.connect1d.ca/home"
                    );
                  }}
                >
                  CONNECT1D.
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Les Nouvelles Technologies du Diabète"
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
                Le traitement du diabète de type 1 évolue grâce à la
                technologie. Voici un rappel de ce qui est maintenant (et sera)
                disponible pour le traitement du diabète de type 1. Les choses
                changent si vite que cette section peut ne pas être à jour
                lorsque vous lisez ceci! Pour plus d'informations, parlez à
                votre équipe de soins du diabète.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Surveillance de glucose en continu (SGC)
              </Text>
              <Text style={styles.text}>
                La surveillance de glucose en continu, ou SGC, est un moyen de
                mesurer votre glucose sans vous piquer le doigt en mesurant la
                glycémie dans les tissus (par exemple, votre bras ou votre
                abdomen). Ceux-ci impliquent un capteur sur la peau et la
                transmission à un appareil séparé. Il existe 2 types de CGM:
                {"\n"} - La SGC en temps réel (tel que Guardian (R) ou Dexcom
                (R)) mesure le glucose en continu, avec ou sans prélècement du
                doigt. Le SGC en temps réel peut être réglé avec des alarmes de
                glucose haut ou bas.
                {"\n"} - Le SGC de flash (comme Freestyle Libre (R)) mesure les
                8 dernières heures de glucose lorsque le capteur est scanné. Cet
                appareil n'est pas livré avec des alarmes, mais des versions
                plus récentes avec des alarmes sont déjà disponibles en Europe
                et pourraient éventuellement arriver au Canada.
                {"\n\n"}La SGC est devenue le choix recommandé pour les
                personnes atteintes de diabète de type 1 pour surveiller leur
                glycémie. Elle permet à votre équipe de diabète de savoir ce qui
                se passe entre les tests de piqûre au doigt afin d'ajuster au
                mieux votre plan de traitement. Il a été démontré que
                l'utilisation de SGC aide à réduire l'hypoglycémie et à
                améliorer le contrôle de la glycémie.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Pompes à insuline</Text>
              <Text style={styles.text}>
                Les pompes à insuline existent depuis un certain temps, mais
                elles s'améliorent chaque année. Les pompes à insuline
                fonctionnent en administrant une perfusion continue d'insuline à
                action rapide («basale»), avec la capacité de donner de
                l'insuline supplémentaire pour la nourriture et la correction
                («bolus») au besoin. Tous les paramètres sont enregistrés dans
                l'ordinateur de la pompe en fonction de l'heure de la journée.
                La personne qui porte la pompe ne doit mettre que la quantité de
                glucides consommée et la glycémie; le calculateur dans la pompe
                aide à suggérer la quantité d'insuline à administrer.
                {"\n"}Il existe 2 types de pompes:
                {"\n"} - Pompes avec tubulure, où une machine est attachée à un
                tube d'insuline connecté à un cathéter qui est inséré dans le
                tissu adipeux du porteur. Il existe différentes entreprises qui
                proposent ce type de pompe. Des exemples sont Medtronic (R),
                Tandem (R), et récemment Ypso (R).
                {"\n"} - Pompes sans tubulure, où une dosette d'insuline avec un
                cathéter est insérée dans le tissu adipeux du porteur. Tout est
                contrôlé par une machine portative. Un exemple est OmniPod.
                {"\n\n"}La recherche a montré que le traitement par pompe à
                insuline, étant donné la capacité de régler plus précisément
                l'administration d'insuline, présente certains avantages par
                rapport aux injections. Cependant, cela dépend de l'utilisateur
                et ne remplace pas les soins de routine du diabète tels que le
                comptage précis des glucides, la surveillance des taux de
                glucose et l'administration d'insuline avant de manger et
                lorsque les sucres sont élevés.
                {"\n\n"}La couverture des pompes à insuline est variable partout
                au Canada. Discutez avec votre équipe de soins du diabète de la
                couverture de la pompe.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Systèmes en boucle fermée ("pancréas artificiel")
              </Text>
              <Text style={styles.text}>
                L'insulinothérapie en boucle fermée consiste à utiliser
                conjointement une pompe à insuline et une SGC, ainsi qu'un
                algorithme, pour modifier automatiquement les doses d'insuline
                en fonction des lectures de glucose. Cela permet moins
                d'hypoglycémie la nuit et un meilleur contrôle de la glycémie
                pendant la journée. Le porteur n'a besoin que de mettre des
                quantités de glucides et des lectures de glycémie au besoin.
                {"\n\n"}Au Canada, les systèmes disponibles comprennent
                Control-IQ de Tandem et le MiniMed 670G de Medtronic. De plus en
                plus de choix se présentent à mesure que le marché se développe.
                {"\n\n"}Ces systèmes ne remplacent pas le besoin de soins de
                routine du diabète, mais ils aident à atténuer les hauts et les
                bas.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Applications pour téléphones et tablettes pour le diabète:
                mHealth
              </Text>
              <Text style={styles.text}>
                Tout comme cette application, il existe de nombreuses autres
                applications pour smartphone pour aider à gérer le diabète et à
                se connecter avec d'autres membres de la communauté du diabète.
                Des bons exemples sont les outils d'aide au comptage des
                glucides, qui incluent même la reconnaissance de photos! Sachez
                que certaines de ces applications ne sont pas réglementées ou ne
                sont pas créées par des professionnels de la santé.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Prochainement: crayons d'insuline intelligents
              </Text>
              <Text style={styles.text}>
                Des crayons à insuline spéciaux ou des capuchons de crayon à
                insuline sont présents en Europe et à destination des
                États-Unis, qui peuvent enregistrer et suggérer des doses
                d'insuline. Ceux-ci ne sont pas encore disponibles au Canada.
                Restez à l'écoute pour savoir quand ils seront disponibles.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                À venir: médicaments autres que l'insuline
              </Text>
              <Text style={styles.text}>
                Les scientifiques travaillent sur des systèmes en boucle fermée
                qui ne donnent pas seulement de l'insuline, mais d'autres
                hormones comme le glucagon (l'antidote de l'insuline) et le
                pramlintide (une hormone intestinale qui aide à réduire la
                glycémie).
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Il existe de nombreux progrès sur la voie de l'aide au diabète
                de type 1. Si jamais vous souhaitez contribuer au progrès du
                traitement du diabète, vous pouvez faire du bénévolat grâce à la
                recherche! Ceux-ci peuvent être trouvés sur{" "}
                <Text
                  style={styles.text}
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.clinicaltrials.gov/"
                    );
                  }}
                >
                  le site Web des essais cliniques
                </Text>{" "}
                ou{" "}
                <Text
                  style={styles.text}
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.connect1d.ca/home"
                    );
                  }}
                >
                  sur CONNECT1D.
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
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
