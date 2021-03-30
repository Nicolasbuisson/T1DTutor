import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class SkinAndYourDiabetesSupplies extends Component {
  constructor() {
    super();
    this.state = {
      showPump: false,
      showCGM: false,
      showFingerPrick: false,
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
    if (this.context.user?.questions?.injectionsOrPump === "Pump") {
      this.setState({ showPump: true });
    }
    if (this.context.user?.questions?.checkBloodSugar === "Real-time CGM") {
      this.setState({ showCGM: true });
    }
    if (
      this.context.user?.questions?.checkBloodSugar === "Finger-prick testing"
    ) {
      this.setState({ showFingerPrick: true });
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
            title="Skin and your Diabetes Supplies"
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
            {!this.state.showPump && (
              <View style={styles.listItem}>
                <Text style={styles.title}>Insulin Injections</Text>
                <Text style={styles.text}>
                  1. Where to inject
                  {"\n"} - Avoid lumps (lipohypertrophy) or indented areas
                  (lipodystrophy)
                  {"\n"} - Remember that injecting in an exercising muscle group
                  increases insulin absorption and your chances of a low blood
                  sugar. Example, injecting in your leg if you are a runner
                </Text>
                <Text style={styles.text}>
                  2. Injection site problems
                  {"\n"}A. Lumps (known as lipohypertrophy),
                  {"\n"} - are thickened tissues under the skin caused by
                  scarring and tissue damage.
                  {"\n"} - are caused by injecting insulin frequently in the
                  same location
                  {"\n"} - may be caused by reusing needles
                  {"\n"} - lead to erratic blood glucose levels
                  {"\n"} - may cause ketones due to poorly absorbing insulin.
                  {"\n"}Avoid lumps by
                  {"\n"} - Rotating your injection sites, and rotating within
                  the site you use. Consider using a different site each week
                  {"\n"} - Giving your injection 1-2 cm from your previous
                  injection
                  {"\n"} - Using a fresh needle with each injection
                  {"\n\n"}B. Infections
                  {"\n"}Signs of an infected injection site
                  {"\n"} - Redness
                  {"\n"} - Warm to touch
                  {"\n"} - Pus
                  {"\n"}If your injection site looks infected:
                  {"\n"} - Try warm compresses, and seek medical help if the
                  symptoms do not improve in 24 hours, if you develop a fever,
                  or if the red area gets larger.
                  {"\n"}
                  Preventing infection
                  {"\n"} - Use a new pen needle or syringe for each injection
                  {"\n"} - Clean your skin with alcohol
                  {"\n"} - Let the alcohol dry before injecting
                  {"\n"} - Never blow on your skin to speed up the drying.
                  Bacteria in your mouth can cause an infection on your skin
                  {"\n\n"}
                  C. Bleeding and/or Bruising
                  {"\n"} - Avoid using the site until any bruises heal
                  {"\n"} - If painful, try warm compresses
                  {"\n"} - Watch for signs of infection (less common)
                </Text>
              </View>
            )}
            {this.state.showPump && (
              <View style={styles.listItem}>
                <Text style={styles.title}>Insulin Pumps</Text>
                <Text style={styles.text}>
                  Where can I put my infusion site or pod:
                  {"\n"} - Abdomen and buttocks provide the best insulin
                  absorption
                  {"\n"} - A different place from your most recent infusion
                  site!
                  {"\n"} - Avoid lumps (lipohypertrophy) or indented areas
                  (lipodystrophy)
                  {"\n"} - Avoid moles, bruises, scars, tattoos, piercings, bony
                  areas (hip bones), previously infected sites (for at least a
                  month)
                  {"\n"} - Avoid areas where there will be folds, pressure or
                  friction: beltline, sleeping or sitting.
                  {"\n"} - Think about any upcoming activities or special
                  clothing that might effect your chosen site
                  {"\n"} - No closer than 2.5 cm from your belly button
                  {"\n"} - Remember that infusing insulin in an exercising
                  muscle group increases insulin absorption and your chances of
                  a low blood sugar. Example, an infusion site in your leg if
                  you are a runner
                  {"\n\n"}Infusion site problems
                  {"\n"}A. Cannula blocked or not inserted: No insulin!!!! Signs
                  {"\n"} - Unexplained high blood glucose that does not respond
                  to correction boluses, especially after inserting a new site!
                  {"\n"} - Blood in the cannula
                  {"\n"} - Insulin leakage around infusion site
                  {"\n"} -{" "}
                  <Text style={{ fontWeight: "700" }}>
                    Don't wait for an occlusion alarm: it may take many hours
                    for enough pressure to build up for an alarm
                    {"\n\n"}Take immediate action: think safety first!
                  </Text>
                  {"\n"} - Test for ketones if you are high, especially if you
                  feel unwell.
                  {"\n"} - Take insulin by injection following the ketone
                  protocol if you have ketones.
                  {"\n"} - Change your catheter/cannula
                  {"\n\n"}WHEN IN DOUBT…TAKE IT OUT!!!!
                  {"\n\n"}
                  <Text style={{ fontWeight: "700" }}>
                    Safe pump practices to prevent disasters
                  </Text>
                  {"\n"} - Change your infusion site before a bolus (correction
                  or meal), and avoid changing before bedtime
                  {"\n"} - Test your blood glucose 1-2 hours after changing your
                  catheter
                  {"\n"} - Always carry a spare infusion set, insulin and
                  syringe/pen
                  {"\n\n"}B. Lumps (known as lipohypertrophy),
                  {"\n"} - Are thickened tissues under the skin caused by
                  scarring and tissue damage.
                  {"\n"} - Are caused by infusing insulin frequently in the same
                  location
                  {"\n"} - Not rotating sites
                  {"\n"} - Leaving catheters in too long
                  {"\n"} - Lead to erratic blood glucose levels
                  {"\n"} - May cause ketones due to poorly absorbing insulin
                  {"\n"}Avoid lumps by:
                  {"\n"} - Rotating your infusion sites, and rotating within the
                  site you use.
                  {"\n"} - Placing your infusion sites 2 cm from your previous
                  site
                  {"\n"} - Changing your silicone catheter/cannula every 2-3
                  days; metal needle infusion sets should be changed every 1-2
                  days.
                  {"\n\n"}C. Infection
                  {"\n"}Signs of an infected infusion site
                  {"\n"} - Pain
                  {"\n"} - Redness
                  {"\n"} - Warmth
                  {"\n"} - Pus
                  {"\n\n"} WHEN IN DOUBT…TAKE IT OUT!!!!
                  {"\n\n"}Try warm compresses, and seek medical help if the
                  symptoms do not improve in 24 hours, if you develop a fever,
                  or if the red area gets larger.
                  {"\n\n"}
                  Preventing infection
                  {"\n"} - Practice good hygiene! Wash your hands before
                  changing your site.
                  {"\n"} - Avoid touching the needle or any part of the infusion
                  set that comes into contact with insulin
                  {"\n"} - Change your infusion site as recommended: every 48-72
                  hours (2-3 days) for silicone sets, every 24-28 hours (1-2
                  days) for metal sets
                  {"\n"} - Clean your skin with alcohol, and let the alcohol dry
                  before inserting your infusion set
                  {"\n  "} - Never blow on your skin to speed up the drying.
                  {"\n  "} - Bacteria in your mouth can cause an infection on
                  your skin
                  {"\n"} - If you are prone to skin infections, try cleansing
                  your skin with an antibacterial soap (eg. Dial®, Betadine®,
                  Hibiclens®) before cleaning with alcohol.
                  {"\n"} - Do not reuse pump supplies!
                  {"\n\n"}
                  D. Bleeding and/or Bruising
                  {"\n"} - Avoid using the site until any bruises heal
                  {"\n"} - If painful, try warm compresses
                  {"\n"} - Watch for signs of infection
                  {"\n\n"}
                  E. Tape not sticking
                  {"\n"} - Make sure that your skin is clean and dry before
                  inserting your cannula
                  {"\n"} - Trim or shave excessive hair.
                  {"\n  "} - Do not use hair removal creams or products
                  {"\n"} - Try an additional dressing or tape over top of your
                  infusion site, such as Tegaderm®, IV 3000®, Hypafi®x. Cut a
                  hole in the dressing so that you can still disconnect for
                  showering, etc.
                  {"\n"} - Try using a wipe such as Skin Tac® or Skin Prep®
                  after you have cleaned your skin.
                  {"\n"} - If excessive perspiration is the problem, try an
                  antiperspirant around the edges of where your tape will be,
                  avoiding the disinfected region where the cannula will be
                  inserted
                  {"\n"} - Try the “sandwich technique.” Cut a small hole in a
                  clear dressing for your cannula, and place another dressing
                  over top of the infusion set tape.
                  {"\n"} - If you need a stronger product, try Mastisol® to help
                  the site stick and Detachol® to remove it.
                  {"\n\n"}
                  F. Tape allergy/irritation
                  {"\n"}Signs:
                  {"\n"} - Red, itchy skin in the shape of your infusion set/pod
                  tape
                  {"\n\n"}
                  Action:
                  {"\n"} - If you have dry skin (especially in the winter) use a
                  mild unscented soap to clean your skin, and an unscented
                  moisturizing lotion after showering/bathing
                  {"\n"} - Be kind to your skin when removing your old infusion
                  site/pod.
                  {"\n  "} - Try using baby oil/mineral oil, or an adhesive
                  removal product like Remove® or Unisolve® to gently unstick
                  the tape.
                  {"\n"} - Try a barrier wipe such as Cavillon®, or placing
                  another dressing on your skin (such as Tegaderm®,
                  Biocclusive®, IV 300®), being sure to cut a small hole for
                  your cannula.
                  {"\n"} - Try different dressings or infusion sets -- different
                  products use different glues.
                  {"\n"} - Discuss using Flovent® on your skin with your
                  physician (avoiding the actual insertion site) before you
                  change your cannula. Use Flovent® and other steroid creams
                  sparingly, and with caution, as they cause thinning of your
                  skin.
                </Text>
              </View>
            )}
            {this.state.showFingerPrick && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  I Use Lancets And Glucose Strips To Test My Blood Glucose
                </Text>
                <Text style={styles.text}>
                  A. Painful pokes
                  {"\n"} - Use a fresh lancet with each test!!!!
                  {"\n"} - Test the side of your finger tip
                  {"\n"} - Adjust the depth of your lancing device (finger
                  poker) there are fewer nerve endings
                  {"\n"} - Avoid cleaning your finger with alcohol – wash your
                  hands with soap and water
                  {"\n\n"}
                  B. Infections
                  {"\n"}Signs of infection
                  {"\n"} - Pain
                  {"\n"} - Redness
                  {"\n"} - Warm to touch
                  {"\n"} - Pus
                  {"\n\n"}If your finger looks infected:
                  {"\n"} - Try warm compresses
                  {"\n"} - Soak in warm salt water
                  {"\n"} - Seek medical help if the symptoms do not improve in
                  24 hours, or if you develop a fever.
                  {"\n\n"}
                  Preventing infection
                  {"\n"} - Use a new lancet for each test
                  {"\n"} - Wash your hands with soap and water before testing
                  {"\n"} - Dry your hands with a clean towel, or paper towel
                </Text>
              </View>
            )}
            {this.state.showCGM && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  I use a CGM or Flash Glucose Monitor (Libre®)
                </Text>
                <Text style={styles.text}>
                  A. Where can I put my sensor?
                  {"\n"} - A different place from your most recent sensor!
                  {"\n"} - Avoid lumps (lipohypertrophy) or indented areas
                  (lipodystrophy)
                  {"\n"} - Avoid moles, bruises, scars, tattoos, piercings, bony
                  areas, previously infected sites (for at least a month)
                  {"\n"} - Avoid areas where there will be folds, pressure or
                  friction: beltline, sleeping or sitting.
                  {"\n"} - Think about your upcoming activities or special
                  events/clothing that might effect your chosen site
                  {"\n"} - No closer than 5 cm from your belly button
                  {"\n"} - Note that manufacturers’ approved insertions sites
                  may differ from the diagram, as they are based on sites used
                  in studies.
                  {"\n\n"}
                  B. Painful insertion
                  {"\n"} - Ensure that you are inserting into an area with good
                  fat stores
                  {"\n"} - Try numbing the skin with an ice cube in a Ziploc bag
                  or face cloth for a few seconds.
                  {"\n\n"}
                  C. Sensor not sticking
                  {"\n"} - Ensure that your skin has dried after cleaning with
                  alcohol
                  {"\n"} - If you have oily skin, wash with soap and water, and
                  clean with alcohol.
                  {"\n"} - Try reinforcing your sensor tape with a larger
                  dressing such as Hypafix®:{" "}
                  <Text style={{ fontWeight: "700" }}>
                    avoid covering the sensor
                  </Text>
                  {"\n"} - Try using a wipe such as Skin Tac® or Skin Prep®
                  after you have cleaned your skin.{" "}
                  <Text style={{ fontWeight: "700" }}>
                    Be sure to wipe around where the edges of the tape will be,
                    and not where the sensor will be inserted.
                  </Text>
                  {"\n"} - If excessive perspiration is the problem, try an
                  antiperspirant{" "}
                  <Text style={{ fontWeight: "700" }}>
                    around the edges of where your tape will be, avoiding the
                    disinfected region where the sensor will be inserted
                  </Text>
                  {"\n"} - Try the “sandwich technique.” Cut a small hole in a
                  clear dressing for your sensor, and place another dressing
                  over top of the sensor tape.
                  {"\n"} - Try using an area with little or no body hair
                  {"\n  "} - If not possible, trim or shave excessive hair.
                  {"\n  "} - Do not use hair removal creams or products
                  {"\n\n"}
                  D. Tape allergy/irritation
                  {"\n"}Signs:
                  {"\n"} - Red, itchy skin in the shape of your sensor tape
                  {"\n\n"}Action:
                  {"\n"} - If you have dry skin (especially in the winter) use a
                  mild unscented soap to clean your skin, and an unscented
                  moisturizing lotion after showering/bathing
                  {"\n"} - Be kind to your skin when removing your old sensor.
                  {"\n  "} - Try using baby oil/mineral oil or an adhesive
                  removal product like Remove® or Unisolve® to gently unstick
                  the tape.
                  {"\n"} - Try a barrier wipe such as Cavillon®, or placing
                  another dressing on your skin (such as Tegaderm®,
                  Biocclusive®, IV 300®), being sure to cut a small hole for
                  your sensor.
                  {"\n"} - Discuss using Flovent® on your skin with your
                  physician (avoiding the actual insertion site) before you
                  change your sensor. Use Flovent® and other steroid creams
                  sparingly, and with caution, as they cause thinning of your
                  skin.
                  {"\n"} - Try a different brand of sensor
                  {"\n\n"}
                  E. Infection
                  {"\n"}Signs of an infected sensor site
                  {"\n"} - Pain
                  {"\n"} - Redness
                  {"\n"} - Warmth
                  {"\n"} - Pus
                  {"\n\n"}WHEN IN DOUBT…TAKE IT OUT!!!!
                  {"\n\n"}Try warm compresses, and seek medical help if the
                  symptoms do not improve in 24 hours, or if you develop a
                  fever, or if the red area gets larger.
                  {"\n\n"}Preventing infection
                  {"\n"} - Practice good hygiene! Wash your hands before
                  changing your sensor.
                  {"\n"} - Avoid touching any part of the sensor needle
                  {"\n"} - Clean your skin with alcohol, and let the alcohol dry
                  before inserting your sensor
                  {"\n  "} - Never blow on your skin to speed up the drying.
                  {"\n  "} - Bacteria in your mouth can cause an infection on
                  your skin
                  {"\n  "} - If you are prone to skin infections, try cleaning
                  your skin with an antibacterial soap (eg. Dial®, Betadine®,
                  Hibiclens®) before cleaning with alcohol.
                  {"\n  "} - Rotate your sites to let your sensor sites heal.
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
            title="La Peau et le Diabète"
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
            {!this.state.showPump && (
              <View style={styles.listItem}>
                <Text style={styles.title}>Injections d'insuline</Text>
                <Text style={styles.text}>
                  1. Où injecter?
                  {"\n"} - Évitez les bosses (lipohypertrophie) ou les zones
                  indentées (lipodystrophie)
                  {"\n"} - N'oubliez pas que l'injection dans un groupe
                  musculaire qui fait de l'exercice augmente l'absorption
                  d'insuline et vos chances d'hypoglycémie. {"\n"}Exemple,
                  injection dans votre jambe si vous êtes un coureur
                </Text>
                <Text style={styles.text}>
                  2. Les problèmes des sites d'injections
                  {"\n"}A. Des bosses (appelées lipohypertrophie),
                  {"\n"} - sont des tissus épaissis sous la peau causés par des
                  cicatrices et des lésions tissulaires.
                  {"\n"} - sont causés par une injection d'insuline fréquente au
                  même endroit
                  {"\n"} - peut être causé par la réutilisation des aiguilles
                  {"\n"} - conduire à des niveaux de glucose sanguin erratiques
                  {"\n"} - peut provoquer des cétones en raison d'une insuline
                  mal absorbée.
                  {"\n"}Évitez les grumeaux en
                  {"\n"} - Rotation de vos sites d'injection et rotation au sein
                  du site que vous utilisez. Pensez à utiliser un site différent
                  chaque semaine
                  {"\n"} - Donner votre injection à 1 à 2 cm de votre injection
                  précédente
                  {"\n"} - Utilisation d'une aiguille neuve à chaque injection
                  {"\n\n"}B. Infections
                  {"\n"}Les signes d'un site infecté
                  {"\n"} - Rougeur
                  {"\n"} - Chaud au toucher
                  {"\n"} - Pus
                  {"\n"}Si votre site d'injection apparaît infecté:
                  {"\n"} - Essayez des compresses chaudes et consultez un
                  médecin si les symptômes ne s'améliorent pas en 24 heures, si
                  vous développez de la fièvre ou si la zone rouge s'agrandit.
                  {"\n"}
                  Prévenir une infection
                  {"\n"} - Utilisez une nouvelle aiguille ou une nouvelle
                  seringue pour chaque injection
                  {"\n"} - Nettoyez votre peau avec de l'alcool
                  {"\n"} - Laisser sécher l'alcool avant l'injection
                  {"\n"} - Ne soufflez jamais sur votre peau pour accélérer le
                  séchage. Les bactéries dans votre bouche peuvent provoquer une
                  infection sur votre peau
                  {"\n\n"}
                  C. Saignements et / ou ecchymoses
                  {"\n"} - Évitez d'utiliser le site jusqu'à ce que les
                  ecchymoses guérissent
                  {"\n"} - Si douloureux, essayez des compresses chaudes
                  {"\n"} - Surveillez les signes d’infection (moins fréquents)
                </Text>
              </View>
            )}
            {this.state.showPump && (
              <View style={styles.listItem}>
                <Text style={styles.title}>Pompe à insuline</Text>
                <Text style={styles.text}>
                  1. Où puis-je mettre mon site de perfusion ou mon dosette?
                  {"\n"} - L'abdomen et la derrière offrent la meilleure
                  absorption d'insuline
                  {"\n"} - Un endroit différent de votre site de perfusion le
                  plus récent!
                  {"\n"} - Évitez les bosses (lipohypertrophie) ou les zones
                  indentées (lipodystrophie)
                  {"\n"} - Évitez les grains de beauté, les ecchymoses, les
                  cicatrices, les tatouages, les piercings, les zones osseuses
                  (os de la hanche), les sites précédemment infectés (pendant au
                  moins un mois)
                  {"\n"} - Évitez les endroits où il y aura des plis, des
                  pressions ou des frottements: ceinture de caisse, dormir ou
                  s'asseoir.
                  {"\n"} - Pensez aux activités à venir ou aux vêtements
                  spéciaux qui pourraient affecter le site que vous avez choisi
                  {"\n"} - Pas à moins de 2,5 cm de votre nombril
                  {"\n"} - N'oubliez pas que la perfusion d'insuline dans un
                  groupe musculaire qui fait de l'exercice augmente l'absorption
                  d'insuline et vos risques d'hypoglycémie. Par exemple, un site
                  de perfusion dans votre jambe si vous êtes un coureur
                  {"\n\n"}2. Les problèmes de site d'infusion
                  {"\n"}A. Canule bloquée ou non insérée: pas d'insuline !!!!
                  Les signes
                  {"\n"} - Une glycémie élevée inexpliquée qui ne répond pas aux
                  bolus de correction, surtout après l'insertion d'un nouveau
                  site!
                  {"\n"} - Sang dans la canule
                  {"\n"} - Fuite d'insuline autour du site de perfusion
                  {"\n"} -{" "}
                  <Text style={{ fontWeight: "700" }}>
                    N'attendez pas une alarme d'occlusion: cela peut prendre
                    plusieurs heures avant qu'une pression suffisante ne
                    s'accumule pour une alarme
                    {"\n\n"}Agissez immédiatement: pensez à la sécurité avant
                    tout!
                  </Text>
                  {"\n"} - Faites un test de cétones si vous êtes élevé, surtout
                  si vous ne vous sentez pas bien.
                  {"\n"} - Prenez de l'insuline par injection en suivant le
                  protocole des cétones si vous avez des cétones.
                  {"\n"} - Changez votre cathéter / canule
                  {"\n\n"}Quand il doute, sortez-le!
                  {"\n\n"}
                  <Text style={{ fontWeight: "700" }}>
                    Pratiques de pompage sûres pour éviter les catastrophes
                  </Text>
                  {"\n"} - Changez de site de perfusion avant un bolus
                  (correction ou repas) et évitez de changer avant le coucher
                  {"\n"} - Testez votre glycémie 1 à 2 heures après avoir changé
                  votre cathéter
                  {"\n"} - Ayez toujours un kit de perfusion, de l'insuline et
                  une seringue / crayon de rechange
                  {"\n\n"}B. Les bosses (connues sous le nom de
                  lipohypertrophie)
                  {"\n"} - Sont des tissus épaissis sous la peau causés par des
                  cicatrices et des lésions tissulaires.
                  {"\n"} - Sont causés par la perfusion d'insuline fréquemment
                  au même endroit,
                  {"\n"} - Pas de rotation des sites
                  {"\n"} - Laisser les cathéters trop longtemps
                  {"\n"} - Conduit à des niveaux de glucose sanguin erratiques
                  {"\n"} - Peut provoquer des cétones en raison d'une insuline
                  mal absorbée
                  {"\n"}Évitez les grumeaux en:
                  {"\n"} - Rotation de vos sites de perfusion et rotation au
                  sein du site que vous utilisez.
                  {"\n"} - Placer vos sites de perfusion à 2 cm de votre ancien
                  site
                  {"\n"} - Changer votre cathéter / canule en silicone tous les
                  2-3 jours; les sets de perfusion en métal doivent être changés
                  tous les 1 à 2 jours.
                  {"\n\n"}C. Infection
                  {"\n"}Signes d'un site de perfusion infecté
                  {"\n"} - Douleur
                  {"\n"} - Rougeur
                  {"\n"} - Chaleur
                  {"\n"} - Pus
                  {"\n\n"} EN CAS DE DOUTE… SORTEZ-LE !!!!
                  {"\n\n"}Essayez des compresses chaudes et consultez un médecin
                  si les symptômes ne s'améliorent pas en 24 heures, si vous
                  développez de la fièvre ou si la zone rouge s'agrandit.
                  {"\n\n"}
                  Prévenir l'infection
                  {"\n"} - Ayez une bonne hygiène! Lavez-vous les mains avant de
                  changer de site.
                  {"\n"} - Évitez de toucher l’aiguille ou toute partie du
                  nécessaire de perfusion qui entre en contact avec l’insuline
                  {"\n"} - Changez votre site de perfusion comme recommandé:
                  toutes les 48-72 heures (2-3 jours) pour les sets en silicone,
                  toutes les 24-28 heures (1-2 jours) pour les sets métalliques
                  {"\n"} - Nettoyez votre peau avec de l'alcool et laissez
                  sécher l'alcool avant d'insérer votre set de perfusion
                  {"\n  "} - Ne soufflez jamais sur votre peau pour accélérer le
                  séchage.
                  {"\n  "} - Les bactéries présentes dans votre bouche peuvent
                  provoquer une infection cutanée
                  {"\n"} - Si vous êtes sujet aux infections cutanées, essayez
                  de nettoyer votre peau avec un savon antibactérien (par
                  exemple Dial®, Betadine®, Hibiclens®) avant de nettoyer avec
                  de l'alcool.
                  {"\n"} - Ne réutilisez pas les fournitures de la pompe!
                  {"\n\n"}
                  D. Saignement et / ou ecchymose
                  {"\n"} - Évitez d'utiliser le site jusqu'à ce que les
                  ecchymoses guérissent
                  {"\n"} - Si douloureux, essayez des compresses chaudes
                  {"\n"} - Surveillez les signes d’infection
                  {"\n\n"}
                  E. Le ruban ne colle pas
                  {"\n"} - Assurez-vous que votre peau est propre et sèche avant
                  d'insérer votre canule
                  {"\n"} - Coupez ou rasez les poils excessifs.
                  {"\n  "} - N'utilisez pas de crèmes ou de produits d'épilation
                  {"\n"} - Essayez un pansement ou une bande supplémentaire sur
                  le dessus de votre site de perfusion, tel que Tegaderm®, IV
                  3000®, Hypafi®x. Découpez un trou dans le pansement pour
                  pouvoir toujours le déconnecter pour la douche, etc.
                  {"\n"} - Essayez d'utiliser une lingette telle que Skin Tac®
                  ou Skin Prep® après avoir nettoyé votre peau.
                  {"\n"} - Si la transpiration excessive est le problème,
                  essayez un anti-transpirant sur les bords de votre bande, en
                  évitant la région désinfectée où la canule sera insérée
                  {"\n"} - Essayez la «technique du sandwich». Découpez un petit
                  trou dans un pansement transparent pour votre canule et placez
                  un autre pansement sur le dessus du ruban du set de perfusion.
                  {"\n"} - Si vous avez besoin d'un produit plus fort, essayez
                  Mastisol® pour aider le site à coller et Detachol® pour
                  l'enlever.
                  {"\n\n"}
                  F. Allergie au collant / irritation
                  {"\n"}Panneaux:
                  {"\n"} - Peau rouge et qui démange sous la forme de votre set
                  de perfusion / bande de dosette
                  {"\n\n"}
                  Action:
                  {"\n"} - Si vous avez la peau sèche (surtout en hiver),
                  utilisez un savon doux non parfumé pour nettoyer votre peau et
                  une lotion hydratante non parfumée après la douche / le bain
                  {"\n"} - Soyez gentil avec votre peau lorsque vous retirez
                  votre ancien site / dosette de perfusion.
                  {"\n  "} - Essayez d'utiliser de l'huile pour bébé / huile
                  minérale, ou un produit antiadhésif comme Remove® ou Unisolve®
                  pour décoller doucement le ruban.
                  {"\n"} - Essayez une lingette barrière comme Cavillon® ou
                  placez un autre pansement sur votre peau (tel que Tegaderm®,
                  Biocclusive®, IV 300®), en veillant à percer un petit trou
                  pour votre canule.
                  {"\n"} - Essayez différents pansements ou sets de perfusion -
                  différents produits utilisent des colles différentes.
                  {"\n"} - Discutez de l'utilisation de Flovent® sur votre peau
                  avec votre médecin (en évitant le site d'insertion réel) avant
                  de changer votre canule. Utilisez Flovent® et les autres
                  crèmes stéroïdes avec parcimonie et prudence, car ils
                  amincissent votre peau.
                </Text>
              </View>
            )}
            {this.state.showFingerPrick && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  J'utilise des lancettes et des bandelettes de glucose pour
                  tester ma glycémie
                </Text>
                <Text style={styles.text}>
                  A. Coups douloureux
                  {"\n"} - Utilisez une nouvelle lancette à chaque test !!!!
                  {"\n"} - Testez le côté du bout de votre doigt
                  {"\n"} - Ajustez la profondeur de votre stylo autopiqueur
                  (doigt poker) il y a moins de terminaisons nerveuses
                  {"\n"} - Évitez de nettoyer votre doigt avec de l'alcool -
                  lavez-vous les mains avec du savon et de l'eau
                  {"\n\n"}
                  B. Infections
                  {"\n"}Les signes d'une infection:
                  {"\n"} - La douleur
                  {"\n"} - La rougeur
                  {"\n"} - Chaud au toucher
                  {"\n"} - Pus
                  {"\n\n"}Si votre doigt apparaît infecté:
                  {"\n"} - Essayez des compresses chaudes
                  {"\n"} - Faire tremper dans de l'eau salée tiède
                  {"\n"} - Consultez un médecin si les symptômes ne s'améliorent
                  pas en 24 heures ou si vous développez de la fièvre.
                  {"\n\n"}
                  La prévention d'infection
                  {"\n"} - Utilisez une nouvelle lancette pour chaque test
                  {"\n"} - Lavez-vous les mains avec du savon et de l'eau avant
                  de tester
                  {"\n"} - Séchez-vous les mains avec une serviette propre ou
                  une serviette en papier
                </Text>
              </View>
            )}
            {this.state.showCGM && (
              <View style={styles.listItem}>
                <Text style={styles.title}>
                  J'utilise en capteur de mesure en continu ou capteur flash
                  (Libre®)
                </Text>
                <Text style={styles.text}>
                  A. Où est-ce que je peux mettre mon capteur?
                  {"\n"} - Un endroit différent de votre capteur le plus récent!
                  {"\n"} - Évitez les bosses (lipohypertrophie) ou les zones
                  indentées (lipodystrophie)
                  {"\n"} - Évitez les grains de beauté, les ecchymoses, les
                  cicatrices, les tatouages, les piercings, les zones osseuses,
                  les sites précédemment infectés (pendant au moins un mois)
                  {"\n"} - Évitez les endroits où il y aura des plis, des
                  pressions ou des frottements: ceinture de caisse, dormir ou
                  s'asseoir.
                  {"\n"} - Pensez à vos activités à venir ou à vos événements /
                  vêtements spéciaux qui pourraient affecter le site que vous
                  avez choisi
                  {"\n"} - À moins de 5 cm de votre nombril
                  {"\n"} - Notez que les sites d’insertion approuvés par les
                  fabricants peuvent différer du diagramme, car ils sont basés
                  sur des sites utilisés dans les études.
                  {"\n\n"}
                  B. Insertion douloureuse
                  {"\n"} - Assurez-vous que vous insérez dans une zone avec de
                  bonnes réserves de graisse
                  {"\n"} - Si vous avez la peau grasse, lavez à l'eau et au
                  savon et nettoyez avec de l'alcool.
                  {"\n\n"}
                  C. Le capteur ne colle pas
                  {"\n"} - Assurez-vous que votre peau est sèche après le
                  nettoyage avec de l'alcool
                  {"\n"} - Si vous avez la peau grasse, lavez à l'eau et au
                  savon et nettoyez avec de l'alcool.
                  {"\n"} - • Essayez de renforcer votre bande de détection avec
                  un pansement plus grand tel que Hypafix®:{" "}
                  <Text style={{ fontWeight: "700" }}>
                    évitez de couvrir le capteur
                  </Text>
                  {"\n"} - Essayez d'utiliser une lingette telle que Skin Tac®
                  ou Skin Prep® après avoir nettoyé votre peau. Assurez-vous
                  d'essuyer là où les bords de la bande seront et non là où le
                  capteur sera inséré.
                  {"\n"} - Si la transpiration excessive est le problème,
                  essayez un antisudorifique sur les bords de votre bande, en
                  évitant la région désinfectée où le capteur sera inséré
                  {"\n"} - Essayez la «technique du sandwich». Découpez un petit
                  trou dans un pansement transparent pour votre capteur et
                  placez un autre pansement sur le dessus du ruban du capteur.
                  {"\n"} - Essayez d'utiliser une zone avec peu ou pas de poils
                  {"\n  "} - Si ce n'est pas possible, coupez ou rasez les poils
                  excessifs.
                  {"\n  "} - N'utilisez pas de crèmes ou de produits d'épilation
                  {"\n\n"}
                  D. Allergie / irritation du ruban adhésif
                  {"\n"}Panneaux:
                  {"\n"} - Peau rouge et démangeaisons sous la forme de votre
                  ruban de détection
                  {"\n\n"}Action:
                  {"\n"} - Si vous avez la peau sèche (surtout en hiver),
                  utilisez un savon doux non parfumé pour nettoyer votre peau et
                  une lotion hydratante non parfumée après la douche / le bain
                  {"\n"} - Soyez gentil avec votre peau lorsque vous retirez
                  votre ancien capteur.
                  {"\n  "} - Essayez d'utiliser de l'huile pour bébé / huile
                  minérale ou un produit de retrait d'adhésif comme Remove® ou
                  Unisolve® pour décoller doucement le ruban.
                  {"\n"} - Essayez une lingette barrière telle que Cavillon®, ou
                  placez un autre pansement sur votre peau (comme Tegaderm®,
                  Biocclusive®, IV 300®), en veillant à percer un petit trou
                  pour votre capteur.
                  {"\n"} - Discutez de l'utilisation de Flovent® sur votre peau
                  avec votre médecin (en évitant le site d'insertion réel) avant
                  de changer votre capteur. Utilisez Flovent® et les autres
                  crèmes stéroïdes avec parcimonie et prudence, car ils
                  amincissent votre peau.
                  {"\n"} - Essayez une autre marque de capteur
                  {"\n\n"}
                  E. Infection
                  {"\n"}Signes d'un site de capteur infecté
                  {"\n"} - Douleur
                  {"\n"} - Rougeur
                  {"\n"} - Chaleur
                  {"\n"} - Pus
                  {"\n\n"}EN CAS DE DOUTE… SORTEZ !!!!
                  {"\n\n"}Essayez des compresses chaudes et consultez un médecin
                  si les symptômes ne s'améliorent pas en 24 heures, si vous
                  développez de la fièvre ou si la zone rouge s'agrandit.
                  {"\n\n"}Prévenir l'infection
                  {"\n"} - Ayez une bonne hygiène! Lavez-vous les mains avant de
                  changer votre capteur.
                  {"\n"} - Évitez de toucher une partie de l'aiguille du capteur
                  {"\n"} - Nettoyez votre peau avec de l'alcool et laissez
                  sécher l'alcool avant d'insérer votre capteur
                  {"\n  "} - Ne soufflez jamais sur votre peau pour accélérer le
                  séchage.
                  {"\n  "} - Les bactéries présentes dans votre bouche peuvent
                  provoquer une infection cutanée
                  {"\n  "} - Si vous êtes sujet aux infections cutanées, essayez
                  de nettoyer votre peau avec un savon antibactérien (par
                  exemple Dial®, Betadine®, Hibiclens®) avant de nettoyer avec
                  de l'alcool.
                  {"\n  "} - Faites pivoter vos sites pour permettre à vos sites
                  de capteurs de guérir.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
    }
  }
}

export default SkinAndYourDiabetesSupplies;

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
