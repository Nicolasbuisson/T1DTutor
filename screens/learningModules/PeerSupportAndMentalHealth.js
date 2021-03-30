import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import Context from "../../Context";

class PeerSupportAndMentalHealth extends Component {
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
            title="Peer Support and Mental Health"
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
                Having type 1 diabetes is not easy. It requires a lot of work to
                do day-to-day activities that your peers don't have to do. Over
                time, this can make you angry, sad, or anxious about your
                diabetes.{" "}
                <Text style={styles.boldText}>
                  You are not alone in having these feelings.
                </Text>
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                It can be helpful to speak to others who also have type 1
                diabetes. There are many organizations who bring those with type
                1 diabetes to support and help each other. While there are many
                support/interest groups on social media, here are 3 official
                organizations:
                {"\n"}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("https://www.jdrf.ca/");
                  }}
                >
                  - The Juvenile Diabetes Research Foundation (JDRF) has
                  multiple tools and resources on their website, from links to
                  clinical trials to support resources
                </Text>
                {"\n  "} - Talk Type 1 is a JDRF program that provides
                one-one-one support, that matches you with a volunteer. You can
                find the online form at{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.jdrf.ca/resources/learn/adults/talk-t1d/?gclid=CjwKCAjwlbr8BRA0EiwAnt4MTrjyxWjXRA4b0vtaWMUc5f3K0iz3SOwCpTDEon5DkHxbz_8zxjZJVRoCRKoQAvD_BwE"
                    );
                  }}
                >
                  [this link].
                </Text>
                {"\n\n"} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("https://beyondtype1.org/");
                  }}
                >
                  Beyond Type 1 is an organization that provides many resources
                  to help manage with diabetes (including mental health) and
                  help connect with others with type 1.
                </Text>
                <Text>There is also a smartphone app!</Text>
                {"\n\n"} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://diabeteshopefoundation.com/"
                    );
                  }}
                >
                  The Diabetes Hope Foundation started off as a scholarship
                  program but has since branched into supporting youth with
                  diabetes across Canada.
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://diabeteshopefoundation.com/transition/"
                    );
                  }}
                >
                  The transition resource guide breaks down each province's
                  healthcare system addressing your needs, insight from other
                  type 1s about transitioning to adulthood, and diabetes
                  resources per university/college in Canada.
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://diabeteshopefoundation.com/peer-support-program/"
                    );
                  }}
                >
                  Peer support programs that can match you with a T1D buddy to
                  talk to.
                </Text>
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Diabetes distress refers to stress, guilt, and negative feelings
                that come from living with and managing diabetes. It can be a
                barrier in itself to enjoying life and managing your diabetes.
                Your diabetes team is not only there to help with your blood
                sugars, but also with the social and emotional burden of type 1
                diabetes. If you have a family doctor, feel free to discuss how
                you feel, because they too can help treat these feelings and
                offer referrals for trained specialists. Your mental health is
                just as important as your blood sugars!
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Some people with type 1 diabetes may develop a toxic
                relationship with food, insulin, and body image. If left
                untreated, this can be extremely dangerous. Please talk to your
                diabetes team if your diabetes is impacting your body image as
                soon as possible.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.boldText}>
                If you ever feel so sad, anxious, or angry that you don't want
                to get up in the morning, or you have feelings or harming
                yourself or others, please call your doctor or go to the
                emergency department immediately.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                If you would like to speak to someone, here are websites and
                phone numbers you can use:
                {"\n"} - Kids Help Phone: Canada-wide, English/French
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("https://kidshelpphone.ca/");
                  }}
                >
                  https://kidshelpphone.ca/
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+18006686868");
                  }}
                >
                  1-800-668-6868
                </Text>{" "}
                or{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("sms:686868");
                  }}
                >
                  text 686868
                </Text>
                {"\n\n"} - Tel Jeunes: for under 20 years old, Canada-wide,
                English/French
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.teljeunes.com/Home"
                    );
                  }}
                >
                  https://www.teljeunes.com/Home
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+18002632266");
                  }}
                >
                  1-800-263-2266 (phone)
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("sms:+15146001002");
                  }}
                >
                  514-600-1002 (text)
                </Text>
                {"\n\n"} - Suicide Action Montreal (SAM): Montreal-specific,
                English/French
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://suicideactionmontreal.org/en/"
                    );
                  }}
                >
                  https://suicideactionmontreal.org/en/
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+18662773553");
                  }}
                >
                  1-866-277-3553
                </Text>
                {"\n\n"} - Tel Aide: Montreal-specific, English/French
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("http://www.telaide.org/en/");
                  }}
                >
                  http://www.telaide.org/en/
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+15149351101");
                  }}
                >
                  514-935-1101
                </Text>
                {"\n\n"} - For more services:{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://amiquebec.org/listen/"
                    );
                  }}
                >
                  https://amiquebec.org/listen/
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
            title="Soutien entre Pairs et Santé Mentale"
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
                Le diabète de type 1 n'est pas facile. Il faut beaucoup de
                travail pour faire des activités quotidiennes que vos pairs
                n'ont pas besoin de faire. Au fil du temps, cela peut vous
                rendre fâché, triste ou anxieux à propos de votre diabète.{" "}
                <Text style={styles.boldText}>
                  Vous n'êtes pas seul à avoir ces sentiments.
                </Text>
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Il peut être utile de parler à d'autres personnes avec le
                diabète de type 1. Il existe de nombreuses organisations qui
                amènent les personnes atteintes de diabète de type 1 à se
                soutenir et à s'entraider. Bien qu'il existe de nombreux groupes
                de soutien / d'intérêt sur les réseaux sociaux, voici 3
                organisations officielles:
                {"\n"}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("https://www.jdrf.ca/");
                  }}
                >
                  - La fondation de la recherche sur le diabète juvénile (FRDJ)
                  a plusieurs outils et ressources sur son site Web, des liens
                  aux essais cliniques et des ressources de soutien
                </Text>
                {"\n  "} - Parlons T1D: est un programme de FRDJ qui offre un
                soutien individuel, qui vous jumelle à un bénévole. Vous pouvez
                trouver le formulaire en ligne{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.jdrf.ca/resources/learn/adults/talk-t1d/?gclid=CjwKCAjwlbr8BRA0EiwAnt4MTrjyxWjXRA4b0vtaWMUc5f3K0iz3SOwCpTDEon5DkHxbz_8zxjZJVRoCRKoQAvD_BwE"
                    );
                  }}
                >
                  ici.
                </Text>
                {"\n\n"} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("https://beyondtype1.org/");
                  }}
                >
                  • Beyond Type 1 est une organisation qui fournit de nombreuses
                  ressources pour aider à gérer le diabète (y compris la santé
                  mentale) et aider à se connecter avec d'autres personnes
                  atteintes de type 1.
                </Text>
                <Text>
                  Il existe également une application pour smartphone!
                </Text>
                {"\n\n"} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://diabeteshopefoundation.com/"
                    );
                  }}
                >
                  • Le Diabetes Hope Foundation a commencé comme un programme de
                  bourses d'étude à Toronto, mais s'est depuis diversifiée pour
                  soutenir les jeunes atteins de diabète partout au Canada.
                  Notez malheureusement les resources sont seulement
                  disponsibles en anglais.
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://diabeteshopefoundation.com/transition/"
                    );
                  }}
                >
                  The transition resource guide décrit le système de santé de
                  chaque province en répondant à vos besoins, les informations
                  d'autres types 1 sur la transition vers l'âge adulte et les
                  ressources sur le diabète par université / collège au Canada.
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://diabeteshopefoundation.com/mentorship-program/"
                    );
                  }}
                >
                  HOPE CONNECTS jumelle les étudiants de première année
                  d'université/collège atteints de DT1 à un bénévolat avec plus
                  d’expérience vivant au Canada.
                </Text>
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                La détresse liée au diabète fait référence au stress, à la
                culpabilité et aux sentiments négatifs qui découlent du fait de
                vivre avec et de gérer le diabète. Cela peut être un obstacle en
                soi pour profiter de la vie et gérer votre diabète. Votre équipe
                chargée du diabète n'est pas seulement là pour vous aider avec
                votre glycémie, mais aussi avec le fardeau social et émotionnel
                du diabète de type 1. Si vous avez un médecin de famille,
                n'hésitez pas à discuter de ce que vous ressentez, car lui aussi
                peut vous aider à traiter ces sentiments et vous proposer des
                références à des spécialistes formés. Votre santé mentale est
                tout aussi importante que votre glycémie!
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Certaines personnes atteintes de diabète de type 1 peuvent
                développer une relation toxique avec les aliments, l'insuline et
                l'image corporelle. Si ce n'est pas traitée, cela peut être
                extrêmement dangereux. Veuillez parler à votre équipe de diabète
                si votre diabète a un impact sur votre image corporelle dès que
                possible.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.boldText}>
                Si jamais vous vous sentez si triste, anxieux ou en colère que
                vous ne voulez pas vous lever le matin, ou si vous vous faites
                du mal à vous-même ou à autrui (ou avez des sentiments d'en
                faire), veuillez appeler votre médecin ou vous rendre
                immédiatement aux urgences.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Si vous souhaitez parler à quelqu'un, voici les sites Web et les
                numéros de téléphone que vous pouvez utiliser:
                {"\n"} - Écoute-entraide: spécifique à Montréal, francophone
                seulement
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.ecoute-entraide.org//"
                    );
                  }}
                >
                  https://www.ecoute-entraide.org/
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+15142782130");
                  }}
                >
                  Téléphone: 514 278-2130
                </Text>{" "}
                or{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+18553654463");
                  }}
                >
                  Sans frais: 1 855 EN LIGNE (365 4463)
                </Text>
                {"\n\n"} - Tel Jeunes: pour ceux moins de 20 ans, partout au
                Canada, anglophone/francophone
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://www.teljeunes.com/Home"
                    );
                  }}
                >
                  https://www.teljeunes.com/Home
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+18002632266");
                  }}
                >
                  Téléphone: 1-800-263-2266
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("sms:+15146001002");
                  }}
                >
                  SMS: 514-600-1002
                  {"\n\n"} - Tel Aide: spécifique à Montréal, francophone
                  seulement
                  {"\n  "} -{" "}
                  <Text
                    onPress={() => {
                      WebBrowser.openBrowserAsync("http://www.telaide.org/");
                    }}
                  >
                    http://www.telaide.org/
                  </Text>
                  {"\n  "} -{" "}
                  <Text
                    onPress={() => {
                      Linking.openURL("tel:+15144934512");
                    }}
                  >
                    Téléphone: 514-493-4512
                  </Text>
                </Text>
                <Text
                  onPress={() => {
                    Linking.openURL("sms:+15146001002");
                  }}
                >
                  SMS: 514-600-1002
                  {"\n\n"} - Tel Aide: spécifique à Montréal,
                  anglophone/francophone
                  {"\n  "} -{" "}
                  <Text
                    onPress={() => {
                      WebBrowser.openBrowserAsync("http://www.telaide.org/");
                    }}
                  >
                    http://www.telaide.org/
                  </Text>
                  {"\n  "} -{" "}
                  <Text
                    onPress={() => {
                      Linking.openURL("tel:+15149351101");
                    }}
                  >
                    Téléphone: 514-935-1101
                  </Text>
                </Text>
                {"\n\n"} - Suicide Action Montreal (SAM): Montreal-specific,
                English/French
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://suicideactionmontreal.org/en/"
                    );
                  }}
                >
                  https://suicideactionmontreal.org/en/
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+18662773553");
                  }}
                >
                  1-866-277-3553
                </Text>
                {"\n\n"} - Jeunesse, J'écoute: partout au Canada,
                anglophone/francophone
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync("https://jeunessejecoute.ca/");
                  }}
                >
                  https://jeunessejecoute.ca/
                </Text>
                {"\n  "} -{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("tel:+118006686868 ");
                  }}
                >
                  Téléphone: 1-800-668-6868
                </Text>{" "}
                or{" "}
                <Text
                  onPress={() => {
                    Linking.openURL("sms:686868");
                  }}
                >
                  SMS: 686868
                </Text>
                {"\n\n"} - Pour plus de services:{" "}
                <Text
                  onPress={() => {
                    WebBrowser.openBrowserAsync(
                      "https://amiquebec.org/listen/"
                    );
                  }}
                >
                  https://amiquebec.org/listen/
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default PeerSupportAndMentalHealth;

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
  boldText: {
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 3,
  },
});
