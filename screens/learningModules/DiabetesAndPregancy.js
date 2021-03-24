import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import dbh from "../../firebase";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class DiabetesAndPregnancy extends Component {
  constructor() {
    super();
    this.state = {
      english = true,
    }

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
    if(this.state.english) {
      return (
        <View style={styles.container}>
          <Header
            title="Diabetes and Pregnancy"
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
                It is a misconception that those with type 1 diabetes cannot or
                should not have children [see Section "Type 1 Diabetes: Myth
                Busters"]. However, a healthy and safe pregnancy with diabetes
                requires a lot of work. Here are important things you should know:
                {"\n"} - Pregnancy should be planned to avoid complications.
                {"\n"} - Use contraception if you do not want to get pregnant.
                {"\n"} - If you are planning pregnancy, it is best if your HbA1C
                is in target before falling pregnant; this refers to a target of
                7% or less, or 6.5% or less if possible.
                {"\n"} - The key to a healthy pregnancy for a woman with diabetes
                is keeping blood glucose levels in the target range—both before
                and during pregnancy.
                {"\n"} - Poorly controlled diabetes in a pregnant woman with type
                1 diabetes increases the risk of miscarriage, having a baby born
                with a malformation and having a stillborn.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Women with type 1 diabetes should discuss pregnancy plans with
                their diabetes health-care team to:
                {"\n"} - Review blood glucose targets.
                {"\n"} - Assess general health and status of any diabetes-related
                complications.
                {"\n"} - Aim for optimal weight and, if overweight, start weight
                loss before pregnancy with healthy eating.
                {"\n"} - Review medications.
                {"\n"} - Start folic acid supplementation (1.0 mg daily).
                {"\n"} - Ensure appropriate vaccinations have occurred.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                If you ever find out you are pregnant, contact your diabetes team
                as soon as possible so specialized prenatal care can be arranged
                immediately.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Le Diabète et la Grossesse"
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
              C'est une idée fausse que les personnes atteintes de diabète de type 1 ne peuvent pas ou ne devraient pas avoir d'enfants [voir la section «Diabète de type 1: Myth Busters»]. Cependant, une grossesse saine et sans danger avec le diabète nécessite beaucoup de travail. Voici des choses importantes que vous devez savoir:
                {"\n"} - La grossesse doit être planifiée pour éviter les complications.
                {"\n"} - Utilisez une méthode de contraception si vous ne souhaitez pas tomber enceinte de cette manière.
                {"\n"} - Si vous prévoyez une grossesse, il est préférable que votre taux d'HbA1C soit atteint avant de tomber enceinte; il s'agit d'un objectif de 7% ou moins, ou de 6,5% ou moins si possible.
                {"\n"} - La clé d'une grossesse saine pour une femme diabétique est de maintenir la glycémie dans la fourchette cible, à la fois avant et pendant la grossesse.
                {"\n"} - Un diabète mal contrôlé chez une femme enceinte atteinte de diabète de type 1 augmente le risque de fausse couche, d'avoir un bébé né avec une malformation et d'avoir un mort-né.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
              Les femmes atteintes de diabète de type 1 devraient discuter de leurs plans de grossesse avec leur équipe de soins diabétiques pour:
                {"\n"} - Passez en revue les objectifs de glycémie.
                {"\n"} - Évaluer l'état de santé général et l'état de toute complication liée au diabète.
                {"\n"} - Visez un poids optimal et, en cas de surpoids, commencez à perdre du poids avant la grossesse avec une alimentation saine.
                {"\n"} - Passez en revue les médicaments.
                {"\n"} - Commencer une supplémentation en acide folique (1,0 mg par jour).
                {"\n"} - S'assurer que les vaccinations appropriées ont eu lieu.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
              Si jamais vous découvrez que vous êtes enceinte, contactez votre équipe du diabète dès que possible afin que des soins prénatals spécialisés puissent être organisés immédiatement.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
    
  }
}

export default DiabetesAndPregnancy;

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
