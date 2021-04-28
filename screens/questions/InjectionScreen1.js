import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../../style/colors.js";
import Header from "../../components/header";
import Greenbutton from "../../components/greenButton";
import QuestionDescription from "../../components/QuestionDescription";
import Context from "../../Context";
import { Picker } from "@react-native-picker/picker";

class InjectionScreen1 extends Component {
  constructor() {
    super();
    this.state = {
      showMeals: false,
      showLongActing: false,
      disabled: true,
      mealsOptions: [
        "Lispro (Humalog)",
        "Aspart (Novorapid)",
        "Glulisine (Apidra)",
        "Ultra-rapid aspart (Fiasp)",
      ],
      longActingOptions: [
        "Humulin N",
        "Novolin ge NPH",
        "Detemir (Levemir)",
        "Glargine (Lantus)",
        "Glargine biosimilar (Basaglar)",
        "Glargine U-300 (Toujeo)",
        "Degludec (Tresiba)",
      ],
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
  }
  static contextType = Context;

  componentDidMount() {
    this.isDisabled();
  }

  componentDidUpdate() {
    this.isDisabled();
  }

  isDisabled = () => {
    const { meals, longActing } = this.context.user.questions;
    if (meals && longActing && this.state.disabled) {
      this.setState({ disabled: false });
    }
  };

  backFunction() {
    this.context.setView("InjectionOrPumpScreen");
  }

  goToNextScreen() {
    this.context.setView("InjectionScreen2");
  }

  toggleSelect = (val) => {
    if (val === "meals") {
      let toggle = !this.state.showMeals;
      if (!this.context.user?.questions?.meals) {
        this.context.setUser({
          ...this.context.user,
          questions: {
            ...this.context.user?.questions,
            meals: "Lispro (Humalog)",
          },
        });
      }
      if (toggle) {
        this.setState({ showMeals: toggle, showLongActing: false });
      } else {
        this.setState({ showMeals: toggle });
      }
    } else if (val === "longActing") {
      let toggle = !this.state.showLongActing;
      if (!this.context.user?.questions?.longActing) {
        this.context.setUser({
          ...this.context.user,
          questions: {
            ...this.context.user?.questions,
            longActing: "Humulin N",
          },
        });
      }
      if (toggle) {
        this.setState({ showLongActing: toggle, showMeals: false });
      } else {
        this.setState({ showLongActing: toggle });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D Tutor"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <QuestionDescription title={this.context.user.language === "English" ? "You are on Injections" : "Vous utilisez des injections"}></QuestionDescription>
        <Text style={styles.subtitle}>{this.context.user.language === "English" ? "What type of insulin do you use?" : "Quel type d'insuline utilisez vous?"}</Text>
        <View style={styles.fieldsContainer}>
          <View style={styles.space}>
            <Text style={styles.field}>{this.context.user.language === "English" ? "For meals" : "Pour les repas"}</Text>
            {!this.state.showMeals && (
              <Text>{this.context.user?.questions?.meals}</Text>
            )}
            {!this.state.showMeals && (
              <Greenbutton
                title={this.context.user.language === "English" ? "Select" : "Sélectionner"}
                onPress={() => this.toggleSelect("meals")}
              ></Greenbutton>
            )}
            {this.state.showMeals && (
              <Picker
                selectedValue={
                  this.context.user?.questions?.meals || "Lispro (Humalog)"
                }
                style={{
                  width: 350,
                  height: 120,
                  backgroundColor: colors.background,
                }}
                itemStyle={{ height: 120 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.context.setUser({
                    ...this.context.user,
                    questions: {
                      ...this.context.user?.questions,
                      meals: itemValue,
                    },
                  })
                }
              >
                {this.state.mealsOptions.map((option) => {
                  return (
                    <Picker.Item label={option} value={option} key={option} />
                  );
                })}
              </Picker>
            )}
            {this.state.showMeals && (
              <Greenbutton
                title="Okay"
                onPress={() => this.toggleSelect("meals")}
              ></Greenbutton>
            )}
          </View>
          <View style={styles.space}>
            <Text style={styles.field}>{this.context.user.language === "English" ? "For long-acting" : "Pour l'insuline à action prolongée"}</Text>
            {!this.state.showLongActing && (
              <Text>{this.context.user?.questions?.longActing}</Text>
            )}
            {!this.state.showLongActing && (
              <Greenbutton
                title={this.context.user.language === "English" ? "Select" : "Sélectionner"}
                onPress={() => this.toggleSelect("longActing")}
              ></Greenbutton>
            )}
            {this.state.showLongActing && (
              <Picker
                selectedValue={
                  this.context.user?.questions?.longActing || "Humulin N"
                }
                style={{
                  width: 350,
                  height: 120,
                  backgroundColor: colors.background,
                  fontSize: 10,
                }}
                itemStyle={{ height: 120 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.context.setUser({
                    ...this.context.user,
                    questions: {
                      ...this.context.user?.questions,
                      longActing: itemValue,
                    },
                  })
                }
              >
                {this.state.longActingOptions.map((option) => {
                  return (
                    <Picker.Item label={option} value={option} key={option} />
                  );
                })}
              </Picker>
            )}
            {this.state.showLongActing && (
              <Greenbutton
                title="Okay"
                onPress={() => this.toggleSelect("longActing")}
              ></Greenbutton>
            )}
          </View>
        </View>

        <View style={styles.footer}>
          <Greenbutton
            title={this.context.user.language === "English" ? "Next" : "Suivant"}
            onPress={this.goToNextScreen}
            disabled={this.state.disabled}
          ></Greenbutton>
        </View>
      </View>
    );
  }
}

export default InjectionScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    fontSize: 20,
    color: colors.primary,
  },

  subtitle: {
    marginTop: 20,
    fontSize: 18,
  },

  space: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  footer: {
    marginBottom: 80,
  },
});
