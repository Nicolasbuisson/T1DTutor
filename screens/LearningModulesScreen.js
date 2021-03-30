import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../style/colors.js";
import Header from "../components/header";
import Footer from "../components/footer";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../Context";

class LearningModulesScreen extends Component {
  constructor() {
    super();
    this.state = {
      showPregnant: false,
      showPump: false,
      english: true,
    };

    //functions
    this.goToHome = this.goToHome.bind(this);
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToReminders = this.goToReminders.bind(this);
    this.goToMore = this.goToMore.bind(this);
    this.goToMythBusters = this.goToMythBusters.bind(this);
    this.goToKeepingYourSugarsAtTarget = this.goToKeepingYourSugarsAtTarget.bind(
      this
    );
    this.goToLowBloodSugar = this.goToLowBloodSugar.bind(this);
    this.goToHighBloodSugar = this.goToHighBloodSugar.bind(this);
    this.goToPreventingComplications = this.goToPreventingComplications.bind(
      this
    );
    this.goToAlcoholAndOtherSubstances = this.goToAlcoholAndOtherSubstances.bind(
      this
    );
    this.goToDrivingWithDiabetes = this.goToDrivingWithDiabetes.bind(this);
    this.goToDiabetesAndPregnancy = this.goToDiabetesAndPregnancy.bind(this);
    this.goToPeerSupportAndMentalHealth = this.goToPeerSupportAndMentalHealth.bind(
      this
    );
    this.goToInnovativeDiabetesTech = this.goToInnovativeDiabetesTech.bind(
      this
    );
    this.goToWhoToCall = this.goToWhoToCall.bind(this);
    this.goToFindingPatterns = this.goToFindingPatterns.bind(this);
    this.goToTravel = this.goToTravel.bind(this);
    this.goToFoodAndYou = this.goToFoodAndYou.bind(this);
    this.goToSkinAndYourDiabetesSupplies = this.goToSkinAndYourDiabetesSupplies.bind(
      this
    );
    this.goToTimeOffThePump = this.goToTimeOffThePump.bind(this);
    this.goToSickDayManagement = this.goToSickDayManagement.bind(this);
    this.goToExerciseAndYou = this.goToExerciseAndYou.bind(this);
  }
  static contextType = Context;

  goToHome() {
    this.context.setView("DashboardScreen");
  }

  goToReminders() {
    this.context.setView("RemindersScreen");
  }

  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  goToMore() {
    this.context.setView("MoreScreen");
  }

  goToTrack() {
    this.context.setView("TrackingScreen");
  }

  goToMythBusters() {
    this.context.setView("MythBusters");
  }

  goToKeepingYourSugarsAtTarget() {
    this.context.setView("KeepingYourSugarsAtTarget");
  }

  goToLowBloodSugar() {
    this.context.setView("LowBloodSugar");
  }

  goToHighBloodSugar() {
    this.context.setView("HighBloodSugar");
  }

  goToPreventingComplications() {
    this.context.setView("PreventingComplications");
  }

  goToAlcoholAndOtherSubstances() {
    this.context.setView("AlcoholAndOtherSubstances");
  }

  goToDrivingWithDiabetes() {
    this.context.setView("DrivingWithDiabetes");
  }

  goToDiabetesAndPregnancy() {
    this.context.setView("DiabetesAndPregnancy");
  }

  goToPeerSupportAndMentalHealth() {
    this.context.setView("PeerSupportAndMentalHealth");
  }

  goToInnovativeDiabetesTech() {
    this.context.setView("InnovativeDiabetesTech");
  }

  goToWhoToCall() {
    this.context.setView("WhoToCall");
  }

  goToFindingPatterns() {
    this.context.setView("FindingPatterns");
  }

  goToTravel() {
    this.context.setView("Travel");
  }

  goToFoodAndYou() {
    this.context.setView("FoodAndYou");
  }

  goToSkinAndYourDiabetesSupplies() {
    this.context.setView("SkinAndYourDiabetesSupplies");
  }

  goToTimeOffThePump() {
    this.context.setView("TimeOffThePump");
  }

  goToSickDayManagement() {
    this.context.setView("SickDayManagement");
  }

  goToExerciseAndYou() {
    this.context.setView("ExerciseAndYou");
  }

  componentDidMount() {
    if (this.context.user?.questions?.pregnant === "Yes") {
      this.setState({ showPregnant: true });
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
          <Header title="Learning Modules"></Header>
          <ScrollView
            contentContainerStyle={styles.fieldsContainer}
            style={{ height: "65%" }}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToMythBusters}
            >
              <Text style={styles.moduleText}>
                Type I Diabetes Myth Busters
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToKeepingYourSugarsAtTarget}
            >
              <Text style={styles.moduleText}>
                Keeping your Sugars at Target
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToLowBloodSugar}
            >
              <Text style={styles.moduleText}>Low Blood Sugar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToHighBloodSugar}
            >
              <Text style={styles.moduleText}>High Blood Sugar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToFoodAndYou}
            >
              <Text style={styles.moduleText}>Food and You</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToExerciseAndYou}
            >
              <Text style={styles.moduleText}>Exericse and You</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToFindingPatterns}
            >
              <Text style={styles.moduleText}>Finding Patterns</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToPreventingComplications}
            >
              <Text style={styles.moduleText}>Preventing Complications</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToSickDayManagement}
            >
              <Text style={styles.moduleText}>Sick Day Management</Text>
            </TouchableOpacity>
            {this.state.showPump && (
              <TouchableOpacity
                style={styles.moduleTouchable}
                onPress={this.goToTimeOffThePump}
              >
                <Text style={styles.moduleText}>Time Off the Pump</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToAlcoholAndOtherSubstances}
            >
              <Text style={styles.moduleText}>
                Alcohol and other Substances
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToDrivingWithDiabetes}
            >
              <Text style={styles.moduleText}>Driving with Diabetes</Text>
            </TouchableOpacity>
            {this.state.showPregnant && (
              <TouchableOpacity
                style={styles.moduleTouchable}
                onPress={this.goToDiabetesAndPregnancy}
              >
                <Text style={styles.moduleText}>Diabetes and Pregnancy</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToTravel}
            >
              <Text style={styles.moduleText}>Travel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToSkinAndYourDiabetesSupplies}
            >
              <Text style={styles.moduleText}>
                Skin and your Diabetes Supplies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToPeerSupportAndMentalHealth}
            >
              <Text style={styles.moduleText}>
                Peer Support and Mental Health
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToInnovativeDiabetesTech}
            >
              <Text style={styles.moduleText}>
                Innovative Diabetes Technologies
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToWhoToCall}
            >
              <Text style={styles.moduleText}>Who to Call</Text>
            </TouchableOpacity>
          </ScrollView>
          <Footer
            page="learn"
            homeFunction={this.goToHome}
            trackFunction={this.goToTrack}
            learnFunction={this.goToLearningModules}
            moreFunction={this.goToMore}
            reminderFunction={this.goToReminders}
          ></Footer>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header title="Modules Educatives"></Header>
          <ScrollView
            contentContainerStyle={styles.fieldsContainer}
            style={{ height: "65%" }}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToMythBusters}
            >
              <Text style={styles.moduleText}>
                Le Diabète: Combattre les Mythes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToKeepingYourSugarsAtTarget}
            >
              <Text style={styles.moduleText}>
                Gardez vos Sucres à la Cible
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToLowBloodSugar}
            >
              <Text style={styles.moduleText}>Les Sucres Bas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToHighBloodSugar}
            >
              <Text style={styles.moduleText}>Les Sucres Hauts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToFoodAndYou}
            >
              <Text style={styles.moduleText}>La Nourriture et Toi </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToExerciseAndYou}
            >
              <Text style={styles.moduleText}>Exercice et Toi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToFindingPatterns}
            >
              <Text style={styles.moduleText}>Trouver des Modèles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToPreventingComplications}
            >
              <Text style={styles.moduleText}>
                La Prévention de Complications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToSickDayManagement}
            >
              <Text style={styles.moduleText}>
                La Gestion des Jours de Maladie
              </Text>
            </TouchableOpacity>
            {this.state.showPump && (
              <TouchableOpacity
                style={styles.moduleTouchable}
                onPress={this.goToTimeOffThePump}
              >
                <Text style={styles.moduleText}>
                  Temps Libre de la Pompe à Insuline
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToAlcoholAndOtherSubstances}
            >
              <Text style={styles.moduleText}>Alcool et autres substances</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToDrivingWithDiabetes}
            >
              <Text style={styles.moduleText}>Conduire avec le diabète</Text>
            </TouchableOpacity>
            {this.state.showPregnant && (
              <TouchableOpacity
                style={styles.moduleTouchable}
                onPress={this.goToDiabetesAndPregnancy}
              >
                <Text style={styles.moduleText}>
                  Le Diabète et la Grossesse
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToTravel}
            >
              <Text style={styles.moduleText}>Le Voyage</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToSkinAndYourDiabetesSupplies}
            >
              <Text style={styles.moduleText}>La Peau et le Diabète</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToPeerSupportAndMentalHealth}
            >
              <Text style={styles.moduleText}>
                Soutien entre Pairs et Santé Mentale
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToInnovativeDiabetesTech}
            >
              <Text style={styles.moduleText}>
                Nouvelles Technologies du Diabète
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moduleTouchable}
              onPress={this.goToWhoToCall}
            >
              <Text style={styles.moduleText}>Qui Appeler</Text>
            </TouchableOpacity>
          </ScrollView>
          <Footer
            page="learn"
            homeFunction={this.goToHome}
            trackFunction={this.goToTrack}
            learnFunction={this.goToLearningModules}
            moreFunction={this.goToMore}
            reminderFunction={this.goToReminders}
          ></Footer>
        </View>
      );
    }
  }
}

export default LearningModulesScreen;

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
  moduleTouchable: {
    marginBottom: 10,
    marginTop: 10,
    minWidth: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.grey,
    borderWidth: 2,
  },
  moduleText: {
    fontSize: 18,
    color: colors.black,
  },
});
