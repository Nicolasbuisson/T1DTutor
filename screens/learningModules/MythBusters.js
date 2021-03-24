import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";
import dbh from "../../firebase";

class MythBusters extends Component {
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
            title="Myth Busters"
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
                <Text style={styles.title}>Myth: </Text>T1D is caused by eating
                too much sugar
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>T1D results when a
                person’s immune system attacks and destroys the cells in the
                pancreas that produce insulin. Eating too much sugar or having
                an unhealthy lifestyle DOES NOT cause T1D. T1D is an auto-immune
                disease that cannot be prevented.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>People with T1D are not
                allowed to eat sugar
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>People with T1D do not
                need to limit what they can eat. Insulin is administered to
                cover the carbs they eat, including sugar. Eating too much sugar
                is unhealthy for everyone, and moderation is key. Sugar is also
                needed for treating low blood sugar or "hypolycemia".
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>Sugar-free foods are
                “free” and people with T1D can eat as much as they want of these
                foods
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>Many sugar-free foods
                still have carbohydrates and may even have more carbohydrates
                than a product just made with pure sugar. It’s always important
                to check nutrition labels because product packaging can be
                deceiving.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>High or low blood sugars
                are a sign that a person with T1D is not looking after
                themselves
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>A low or high blood
                sugar can happen for many reasons: insulin, exercise, illness,
                stress, hormones, etc. Sometimes these can be prevented but
                sometimes they cannot -- it is unfortunately the nature of the
                disease.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>T1D is hereditary
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>The genetics of T1D are
                complicated, and are the subject of much research. Many people
                with T1D have no family history. Research shows that genetic
                factors are important and that developing T1D is a complicated
                interaction between genetic predisposition and certain
                environmental triggers such as viruses.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>People with T1D
                shouldn’t, or can’t have children
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>Women with Type 1
                Diabetes who manage their diabetes well during pregnancy can
                give birth to healthy babies. Women are recommended to have
                their A1C within certain limits before pregnancy to prevent
                complications.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>Taking more injections,
                or using a pump means that your diabetes is “really bad”
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>Taking more injections
                or using a pump means that you may have better control of your
                diabetes, and also have more flexibility with your meals.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>Adults can’t get T1D
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>T1D does not
                discriminate – it affects babies, children, teens and adults.
                This is why Type 1 Diabetes is no longer called “Juvenile
                Diabetes”.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Myth: </Text>People with T1D have a
                weak immune system
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fact: </Text>Although T1D is an
                auto-immune disease, people with T1D do not have a weak immune
                system. They are not more susceptible to getting viral illnesses
                like the flu, or Covid-19 although these illnesses can make
                blood sugars more difficult to manage.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Other Diabetes Facts</Text>
                {""}
              </Text>
              <Text style={styles.text}>
                Diabetes Canada estimates that almost 3.7 million Canadians have
                some form of diabetes.
              </Text>
              <Text style={styles.text}>
                Approximately 10% of people with diabetes have type 1 diabetes,
                and approximately 90% have type 2.{" "}
              </Text>
              <Text style={styles.text}>
                Insulin was discovered and extracted from the islet cells of a
                dog’s pancreas in London, Ontario in 1921 by the Canadian team
                of Dr Frederick Banting, Professor J.J.R. Macleod, Charles Best
                and James Collip.
              </Text>
              <Text style={styles.text}>
                The first recipient of an insulin injection was a dog in
                Banting’s laboratory named Marjorie, on July 30, 1921.
              </Text>
              <Text style={styles.text}>
                The first human to receive an insulin injection was 14-year-old
                Leonard Thompson, at the Toronto General Hospital on January 11,
                1922.
              </Text>
              <Text style={styles.text}>
                Banting and Macleod were awarded the Nobel Prize in Physiology
                or Medicine in 1923 for their discovery.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Le diabète: combattre les mythes"
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
                <Text style={styles.title}>Mythe: </Text>Le diabète de type 1
                (DT1) est causé par une consommation excessive de sucre
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>Le DT1 se produit
                lorsque le système immunitaire d’une personne attaque et détruit
                les cellules du pancréas qui produisent l’insuline. Manger trop
                de sucre ou avoir un mode de vie malsain NE cause PAS le DT1. Le
                DT1 est une maladie auto-immune qui ne peut être évitée.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Les personnes atteintes
                de DT1 ne peuvent pas manger du sucre
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>Les personnes atteintes
                de DT1 n'ont pas besoin de limiter ce qu'elles peuvent manger.
                L'insuline est administrée pour couvrir les glucides qu'ils
                consomment, y compris le sucre. Manger trop de sucre est malsain
                pour tout le monde et la modération est essentielle. Le sucre
                est également nécessaire pour traiter l'hypoglycémie ou
                l'hypolycémie.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Les aliments sans sucre
                sont «gratuits» et les personnes atteintes de DT1 peuvent manger
                autant qu'elles veulent de ces aliments
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>De nombreux aliments
                sans sucre contiennent encore des glucides et peuvent même
                contenir plus de glucides qu'un produit juste à base de sucre
                pur. Il est toujours important de vérifier l'information
                nutritionnelle, car l’emballage des produits peut être trompeur.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Une glycémie élevée ou
                basse est un signe qu'une personne atteinte de DT1 ne prend pas
                soin d'elle-même
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text> Une glycémie basse ou
                élevée peut survenir pour de nombreuses raisons: insuline,
                exercice, maladie, stress, hormones, etc. Parfois, elles peuvent
                être évitées, mais parfois elles ne le peuvent pas - c'est
                malheureusement la nature de la maladie.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Le DT1 est héréditaire
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>La génétique du DT1 est
                compliquée et fait l'objet de nombreuses recherches. De
                nombreuses personnes atteintes de DT1 n'ont pas d'antécédents
                familiaux. La recherche montre que les facteurs génétiques sont
                importants et que le développement du DT1 est une interaction
                compliquée entre la prédisposition génétique et certains
                déclencheurs environnementaux tels que les virus.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Les personnes atteintes
                de DT1 ne devraient pas ou ne peuvent pas avoir d'enfants
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>Les femmes atteintes de
                diabète de type 1 qui gèrent bien leur diabète pendant la
                grossesse peuvent donner naissance à des bébés en bonne santé.
                Il est recommandé aux femmes d'avoir leur A1C dans certaines
                limites avant la grossesse pour éviter les complications.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Prendre plus
                d'injections ou utiliser une pompe signifie que votre diabète
                est «vraiment grave»
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>Prendre plus
                d'injections ou utiliser une pompe signifie que vous pouvez
                mieux contrôler votre diabète et avoir plus de flexibilité avec
                vos repas.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Les adultes ne peuvent
                pas contracter le DT1
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>Le DT1 ne fait pas de
                discrimination - il affecte les bébés, les enfants, les
                adolescents et les adultes. C'est pourquoi le diabète de type 1
                n'est plus appelé «diabète juvénile».
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Mythe: </Text>Les personnes atteintes
                de DT1 ont un système immunitaire affaibli
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>Fait: </Text>Bien que le DT1 soit une
                maladie auto-immune, les personnes atteintes de DT1 n'ont pas un
                système immunitaire affaibli. Ils ne sont pas plus susceptibles
                de contracter des maladies virales comme la grippe ou le
                Covid-19, bien que ces maladies puissent rendre la glycémie plus
                difficile à gérer.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                <Text style={styles.title}>Les autres faits de diabète</Text>
                {""}
              </Text>
              <Text style={styles.text}>
                Diabète Canada estime que près de 3,7 millions de Canadiens
                souffrent d'une forme de diabète.
              </Text>
              <Text style={styles.text}>
                Environ 10% des personnes atteintes de diabète sont atteintes de
                diabète de type 1 et environ 90% sont de type 2.
              </Text>
              <Text style={styles.text}>
                L’insuline a été découverte et extraite des cellules des îlots
                du pancréas d’un chien à London, Ontario en 1921 par l’équipe
                canadienne du Dr Frederick Banting, le professeur J.J.R.
                Macleod, Charles Best et James Collip.
              </Text>
              <Text style={styles.text}>
                Le premier receveur d’une injection d’insuline était un chien du
                laboratoire de Banting, Marjorie, le 30 juillet 1921.
              </Text>
              <Text style={styles.text}>
                Le premier humain à recevoir une injection d'insuline fut
                Leonard Thompson, 14 ans, au Toronto General Hospital, le 11
                janvier 1922.
              </Text>
              <Text style={styles.text}>
                Banting et Macleod ont reçu le prix Nobel de physiologie ou
                médecine en 1923 pour leur découverte.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default MythBusters;

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
