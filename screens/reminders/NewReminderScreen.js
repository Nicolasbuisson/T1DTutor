import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../../style/colors.js";
import Header from "../../components/header";
import Greenbutton from "../../components/greenButton";
import Context from "../../Context";

class Question2screen extends Component {
  constructor() {
    super();
    this.state = {
      existingReminders: [
        "Blood sugar test",
        "Insulin injection",
        "Prescription",
        "Clinic visit",
        "Blood test",
        "Submit form for insulin pump access program",
        "Submit form for RAMQ coverage of freestyle libre",
        "Change lancet for glucose meter",
        "Change infusion site",
        "Change pump's insulin reservoir",
      ],
      existingRemindersFrench: [
        "Test de glycémie",
        "Injection d'insuline",
        "Prescription",
        "Visite de la clinique",
        "Test sanguin",
        "Soumettre le formulaire pour le programme d'accès à la pompe à insuline",
        "Soumettre un formulaire pour la couverture RAMQ du freestyle libre",
        "Remplacer la lancette par un lecteur de glycémie",
        "Changer de site de perfusion",
        "Changer le réservoir d'insuline de la pompe",
      ],
      showInput: false,
      body: "",
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
  }
  static contextType = Context;

  backFunction() {
    this.context.setView("RemindersScreen");
  }

  goToReminderTemplate = (reminder) => {
    this.context.setReminder({ body: reminder });
    this.context.setView("ReminderTemplate");
  };

  render() {
    return (
      <View style={styles.container}>
        {this.context.user?.language === "English" && (
          <Header
            title="Reminders"
            backArrow={true}
            function={this.backFunction}
          ></Header>
        )}
        {this.context.user?.language === "French" && (
          <Header
            title="Rappels"
            backArrow={true}
            function={this.backFunction}
          ></Header>
        )}
        <View style={styles.topParagraph}>
          {this.context.user?.language === "English" && (
            <Text style={styles.text}>
              Choose a reminder from the list or create your own
            </Text>
          )}
          {this.context.user?.language === "French" && (
            <Text style={styles.text}>
              Choisissez un rappel de la liste ou créez le vôtre
            </Text>
          )}
        </View>
        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "70%" }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => this.setState({ showInput: !this.state.showInput })}
          >
            {this.context.user?.language === "English" && (
              <Text>Create your own</Text>
            )}
            {this.context.user?.language === "French" && (
              <Text>Créez le vôtre</Text>
            )}
          </TouchableOpacity>
          {this.state.showInput && (
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ body: text })}
                value={this.state.body}
              ></TextInput>
              <Greenbutton
                title="Confirm"
                onPress={() => this.goToReminderTemplate(this.state.body)}
              ></Greenbutton>
            </View>
          )}
          {this.context.user?.language === "English" && <Text>Or</Text>}
          {this.context.user?.language === "French" && <Text>Ou</Text>}
          {this.context.user?.language === "English" &&
            this.state.existingReminders.map((reminder) => {
              if (
                reminder === "Insulin injection" &&
                this.context.user.questions.injectionsOrPump !== "Injections"
              )
                return;
              if (
                reminder === "Submit form for insulin pump access program" &&
                this.context.user.questions.injectionsOrPump !== "Pump"
              )
                return;
              if (
                reminder === "Change infusion site" &&
                this.context.user.questions.injectionsOrPump !== "Pump"
              )
                return;
              if (
                reminder === "Change pump's insulin reservoir" &&
                this.context.user.questions.injectionsOrPump !== "Pump"
              )
                return;
              if (
                reminder ===
                  "Submit form for RAMQ coverage of freestyle libre" &&
                this.context.user.questions.checkBloodSugar !== "Flash CGM"
              )
                return;
              return (
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.goToReminderTemplate(reminder)}
                >
                  <Text>{reminder}</Text>
                </TouchableOpacity>
              );
            })}
          {this.context.user?.language === "French" &&
            this.state.existingRemindersFrench.map((reminder) => {
              if (
                reminder === "Injection d'insuline" &&
                this.context.user.questions.injectionsOrPump !== "Injections"
              )
                return;
              if (
                reminder ===
                  "Soumettre le formulaire pour le programme d'accès à la pompe à insuline" &&
                this.context.user.questions.injectionsOrPump !== "Pump"
              )
                return;
              if (
                reminder === "Changer de site de perfusion" &&
                this.context.user.questions.injectionsOrPump !== "Pump"
              )
                return;
              if (
                reminder === "Changer le réservoir d'insuline de la pompe" &&
                this.context.user.questions.injectionsOrPump !== "Pump"
              )
                return;
              if (
                reminder ===
                  "Soumettre un formulaire pour la couverture RAMQ du freestyle libre" &&
                this.context.user.questions.checkBloodSugar !== "Flash CGM"
              )
                return;
              return (
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.goToReminderTemplate(reminder)}
                >
                  <Text>{reminder}</Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

export default Question2screen;

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
  touchable: {
    marginBottom: 10,
    marginTop: 10,
    height: 40,
    minWidth: "90%",
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.grey,
    borderWidth: 2,
  },
  topParagraph: {
    padding: 5,
    margin: 5,
    minWidth: "90%",
    maxWidth: "90%",
    backgroundColor: colors.background,
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },

  input: {
    height: 25,
    width: 200,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 25,
  },
  inputView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
