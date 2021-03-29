import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class Travel extends Component {
  constructor() {
    super();
    this.state = {
      showPump: false,
      showCGM: false,
      showInjections: false,
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
          if (doc.data().questions.injectionsOrPump === "Pump") {
            this.setState({ showPump: true });
          } else {
            this.setState({ showInjections: true });
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
            title="Travel"
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
              <Text style={styles.italicized}>
                Travel check list adapted by Diabetes Canada
              </Text>
              <Text style={styles.text}>
                You are going traveling. What should you bring? How can you
                prepare? Here is a list of some of the things you should keep in
                mind while traveling with diabetes.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>General travel tips</Text>
              <Text style={styles.text}>
                {"\n"} - Make sure your vaccinations are up to date for your
                travel destination.
                {"\n"} - Have a letter from your doctor stating that you need to
                carry medicines or supplies because some airlines and some
                countries require you to.
                {"\n"} - Carry a list of your medications- you can get this from
                your pharmacist.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Carrying insulin and other supplies
              </Text>
              <Text style={styles.text}>
                {"\n"} - Always carry your insulin and supplies with you in your
                carry-on luggage. Do not place insulin in your checked luggage
                as the temperature fluctuations can damage it.
                {"\n"} - When traveling by air, you may carry liquids such as
                insulin, juice or gels to treat hypoglycemia, etc., even in
                amounts greater than 100 ml. Just make sure they’re accessible
                and declare them to security when being screened.
                {"\n"} - Syringes and needles are also allowed in your carry-on,
                as long as you are also carrying with you the injectable
                medication (e.g. insulin).
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Storing insulin while travelling</Text>
              <Text style={styles.text}>
                {"\n"} - Insulin must be stored properly, as it will spoil if
                left in temperatures that are too hot or too cold.
                {"\n"} - Insulin keeps its strength at room temperature for 30
                days. If traveling in hot temperatures, store your insulin in an
                insulated bag. If traveling in cold temperatures, keep your
                insulin close to your body to stop it from freezing.
                {"\n"} - You can carry a small sharps container to store used
                needles and syringes while traveling.
                {"\n"} - Take spare syringes and insulin and backups of any
                other medications or medical supplies.
                {"\n"} - If hand-washing facilities are not available, carry
                alcohol swabs, moist towelettes or hand sanitizer to clean your
                fingers prior to testing.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Adjusting insulin for time zone changes
              </Text>
              <Text style={styles.text}>
                {"\n"} - It is a good idea to speak with your doctor or diabetes
                educator prior to making changes to your medication schedule or
                dosage.
                {this.state.showInjections && (
                  <Text>
                    {"\n"} - When travelling east, your travel day will be
                    shorter. If you lose more than two hours, you may need to
                    take fewer units of intermediate or long-acting insulin.
                  </Text>
                )}
                {"\n"} - When travelling west, your travel day will be longer.
                If you gain more than two hours, you may need to take extra
                units of short-acting insulin and more food.
                {"\n"} - If you are crossing time zones, you should discuss your
                meal and insulin schedule with your doctor or diabetes educator.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Airport Screening</Text>
              <Text style={styles.text}>
                {"\n"} - You are not required to disclose that you have diabetes
                to screening personnel.
                {this.state.showPump && (
                  <Text>
                    {"\n"} - You are not required to remove your insulin pump
                    for screening. Just inform the Screening Officer that you
                    are wearing one.
                  </Text>
                )}
                {this.state.showCGM ||
                  (this.state.showPump && (
                    <Text>
                      {"\n"} - Do not wear an insulin pump or CGM through the
                      body scanner or place your insulin pump through the x-ray
                      machine as they may affect the devices’ functioning.
                      Instead, you can ask the screening officer to perform a
                      physical search instead (in a private location, if you
                      wish).
                      {"\n"} - Handheld metal detectors do not affect the
                      functioning of insulin pumps or CGMs.
                    </Text>
                  ))}
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Traveler's Checklist</Text>
              <Text style={styles.text}>
                Before you leave, remember to get:
                {"\n"} - Travel health insurance
                {"\n"} - A list of your medications
                {"\n"} - A letter from your doctor stating:
                {this.state.showInjections && (
                  <Text>
                    {"\n    "} - That you need to carry syringes or needles for
                    insulin pens and lancets as part of your insulin treatment.
                    Having this will be helpful if your luggage is examined at
                    airport security checkpoints.
                    {"\n    "} - The supplies you need for your diabetes care.
                    Be sure to keep your syringes, needles, pens, and lancets in
                    the same boxes that they came in with the original
                    prescription label on them.
                  </Text>
                )}
                {this.state.showPump && (
                  <Text>
                    {"\n    "} - That you need to carry pump supplies, glucose
                    measuring supplies, insulin, and extra syringes of part of
                    your treatment. Having this will be helpful if your luggage
                    is examined at airport security checkpoints.
                    {"\n    "} - A list of the supplies you need for your
                    diabetes care (including hypoglycemia treatment). If
                    prescribed, keep them in the same boxes that they came in
                    with the original prescription label on them.
                  </Text>
                )}
                {"\n"} - Ask your doctor, diabetes educator or health care team
                about:
                {"\n    "} - Illness management
                {"\n    "} - Low blood sugar management
                {"\n    "} - Adjustments for meals, insulin and medications in
                different time zones
                {"\n    "} - Avoiding illness caused by contaminated food and
                water
                {"\n    "} - Tips for adjusting your medication if required
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Packing list</Text>
              <Text style={styles.text}>
                {"\n"} - Telephone numbers of your doctor and diabetes educator
                {"\n"} - Extra supply of insulin
                {"\n"} - Blood glucose meter (with or without logbook)
                {"\n"} - Fast-acting sugar to treat low blood sugar
                {"\n"} - Snacks to cover delayed meals, such as crackers and
                fruit
                {"\n"} - Extra supply of syringes, needles and an extra insulin
                pen if used
                {"\n"} - Ketone-testing strips (urinary or blood)
                {"\n"} - Glucagon
                {this.state.showCGM && <Text>{"\n"} - CGM supplies</Text>}
                {"\n"} - Batteries or chargers for any medical device that so
                requires
                {this.state.showPump && (
                  <Text>
                    {"\n"} - Insulin pump supplies
                    {"\n"} - Extra insulin pump if available or backup long
                    acting insulin in case of pump malfunction
                  </Text>
                )}
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Le Voyage"
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
              <Text style={styles.italicized}>Adapté par Diabète Canada</Text>
              <Text style={styles.text}>
                Vous partez en voyage. Que devez-vous apporter? Comment
                pouvez-vous vous préparer? Voici une liste de certaines choses
                que vous devez garder à l'esprit lorsque vous voyagez avec le
                diabète.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Conseils de voyage généraux</Text>
              <Text style={styles.text}>
                {"\n"} - Assurez-vous que vos vaccins sont à jour pour votre
                destination de voyage.
                {"\n"} - Ayez une lettre de votre médecin indiquant que vous
                devez transporter des médicaments ou des fournitures parce que
                certaines compagnies aériennes et certains pays l'exigent.
                {"\n"} - Ayez sur vous une liste de vos médicaments - vous
                pouvez l'obtenir auprès de votre pharmacien.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Transport d'insuline et d'autres fournitures
              </Text>
              <Text style={styles.text}>
                {"\n"} - Ayez toujours votre insuline et vos fournitures avec
                vous dans votre bagage à main. Ne placez pas d'insuline dans vos
                bagages enregistrés car les fluctuations de température peuvent
                l'endommager.
                {"\n"} - Lorsque vous voyagez en avion, vous pouvez transporter
                des liquides tels que de l'insuline, du jus ou des gels pour
                traiter l'hypoglycémie, etc., même en quantités supérieures à
                100 ml. Assurez-vous simplement qu'ils sont accessibles et
                déclarez-les à la sécurité lors du dépistage.
                {"\n"} - Les seringues et aiguilles sont également autorisées
                dans votre bagage à main, à condition que vous ayez également
                avec vous le médicament injectable (par exemple, l'insuline).
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Stockage de l'insuline en voyage</Text>
              <Text style={styles.text}>
                {"\n"} - L'insuline doit être conservée correctement, car elle
                se gâtera si elle est laissée à des températures trop chaudes ou
                trop froides.
                {"\n"} - L'insuline conserve sa concentration à température
                ambiante pendant 30 jours. Si vous voyagez par temps chaud,
                stockez votre insuline dans un sac isotherme. Si vous voyagez
                par temps froid, gardez votre insuline près de votre corps pour
                l'empêcher de geler.
                {"\n"} - Vous pouvez transporter un petit contenant pour objets
                tranchants pour ranger les aiguilles et les seringues usagées
                lorsque vous voyagez.
                {"\n"} - Emportez des seringues et de l'insuline de rechange et
                des réserves de tout autre médicament ou matériel médical.
                {"\n"} - Si des installations de lavage des mains ne sont pas
                disponibles, emportez des tampons imbibés d'alcool, des
                lingettes humides ou un désinfectant pour les mains pour
                nettoyer vos doigts avant le test.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Ajustement de l'insuline pour les changements de fuseau horaire
              </Text>
              <Text style={styles.text}>
                {"\n"} - C'est une bonne idée de parler à votre médecin ou à
                votre éducateur en diabète avant de modifier votre horaire ou
                votre posologie.
                {this.state.showInjections && (
                  <Text>
                    {"\n"} - Lorsque vous voyagez vers l'est, votre journée de
                    voyage sera plus courte. Si vous perdez plus de deux heures,
                    vous devrez peut-être prendre moins d'unités d'insuline à
                    action intermédiaire ou prolongée.
                  </Text>
                )}
                {"\n"} - Lorsque vous voyagez vers l'ouest, votre journée de
                voyage sera plus longue. Si vous gagnez plus de deux heures,
                vous devrez peut-être prendre des unités supplémentaires
                d'insuline à action brève et plus de nourriture.
                {"\n"} - Si vous traversez des fuseaux horaires, vous devriez
                discuter de votre horaire de repas et d'insuline avec votre
                médecin ou votre éducateur en diabète.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Contrôle d'aéroport</Text>
              <Text style={styles.text}>
                {"\n"} - Vous n'êtes pas obligé de divulguer votre diabète au
                personnel de dépistage.
                {this.state.showPump && (
                  <Text>
                    {"\n"} - Vous n'êtes pas obligé de retirer votre pompe à
                    insuline pour le dépistage. Informez simplement l'agent de
                    contrôle que vous en portez un.
                  </Text>
                )}
                {this.state.showCGM ||
                  (this.state.showPump && (
                    <Text>
                      {"\n"} - Ne portez pas de pompe à insuline ou de CGM à
                      travers le scanner corporel et ne placez pas votre pompe à
                      insuline dans l'appareil à rayons X car ils peuvent
                      affecter le fonctionnement des dispositifs. Au lieu de
                      cela, vous pouvez demander à l'agent de contrôle
                      d'effectuer une fouille physique à la place (dans un
                      endroit privé, si vous le souhaitez).
                      {"\n"} - Les détecteurs de métaux portables n'affectent
                      pas le fonctionnement des pompes à insuline ou des CGM.
                    </Text>
                  ))}
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>La liste de contrôle du voyageur</Text>
              <Text style={styles.text}>
                Avant de partir, n'oubliez pas de vous procurer:
                {"\n"} - Assurance maladie en voyage
                {"\n"} - Une liste de vos médicaments
                {"\n"} - Une lettre de votre médecin indiquant:
                {this.state.showInjections && (
                  <Text>
                    {"\n    "} - Vous devez transporter des seringues ou des
                    aiguilles pour crayons à insuline et lancettes dans le cadre
                    de votre traitement par insuline. Cela vous sera utile si
                    vos bagages sont examinés aux points de contrôle de sécurité
                    de l'aéroport.
                    {"\n    "} - Les fournitures dont vous avez besoin pour vos
                    soins du diabète. Assurez-vous de conserver vos seringues,
                    aiguilles, crayons et lancettes dans les mêmes boîtes dans
                    lesquelles ils ont été livrés avec l'étiquette de
                    prescription d'origine.
                  </Text>
                )}
                {this.state.showPump && (
                  <Text>
                    {"\n    "} - Vous devez transporter des fournitures de
                    pompe, des fournitures de mesure du glucose, de l'insuline
                    et des seringues supplémentaires faisant partie de votre
                    traitement. Cela vous sera utile si vos bagages sont
                    examinés aux points de contrôle de sécurité de l'aéroport.
                    {"\n    "} - Une liste des fournitures dont vous avez besoin
                    pour vos soins du diabète (y compris le traitement de
                    l'hypoglycémie). S'ils sont prescrits, conservez-les dans
                    les mêmes boîtes dans lesquelles ils sont venus avec
                    l'étiquette de prescription originale.
                  </Text>
                )}
                {"\n"} - Demandez à votre médecin, à votre éducateur en diabète
                ou à votre équipe de soins de santé:
                {"\n    "} - Gestion des maladies
                {"\n    "} - Gestion de l'hypoglycémie
                {"\n    "} - Ajustements pour les repas, l'insuline et les
                médicaments dans différents fuseaux horaires
                {"\n    "} - Éviter les maladies causées par des aliments et de
                l'eau contaminés
                {"\n    "} - Conseils pour ajuster votre médication si
                nécessaire
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Liste de colisage</Text>
              <Text style={styles.text}>
                {"\n"} - Les numéros de téléphone de votre médecin et de votre
                éducateur en diabète
                {"\n"} - Apport supplémentaire d'insuline
                {"\n"} - Lecteur de glycémie (avec ou sans un journal de bord)
                {"\n"} - Sucre à action rapide pour traiter l'hypoglycémie
                {"\n"} - Des collations pour couvrir les repas retardés, comme
                des craquelins et des fruits
                {"\n"} - Fourniture supplémentaire de seringues, d'aiguilles et
                d'un stylo à insuline supplémentaire si utilisé
                {"\n"} - Bandelettes de test de cétone
                {"\n"} - Glucagon
                {this.state.showCGM && (
                  <Text>{"\n"} - Fournitures pour les capteurs de glucose</Text>
                )}
                {"\n"} - Les batteries ou chargeurs pour aucun machine médical
                qui en a besoin
                {this.state.showPump && (
                  <Text>
                    {"\n"} - Fournitures pour la pompe
                    {"\n"} - Pompe à insuline supplémentaire si disponible ou
                    insuline de secours à action prolongée en cas de
                    dysfonctionnement de la pompe
                  </Text>
                )}
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default Travel;

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
  italicized: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
    fontStyle: "italic",
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
