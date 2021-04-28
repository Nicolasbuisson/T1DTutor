import React, { Component, useContext } from "react";
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

export default function LanguageQuestionScreen(props) {
  const context = useContext(Context);
  const goToNextScreen = (value) => {
    context.setUser({ ...context.user, language: value, questions: {} });
    context.setView("Question1screen");
  };
  return (
    <View style={styles.container}>
      <Header title="T1D Tutor" backArrow={false}></Header>
      <QuestionDescription title="Select your preferred language / Choississez votre langue"></QuestionDescription>
      <View style={styles.fieldsContainer}>
        <Greenbutton
          title="English"
          onPress={() => goToNextScreen("English")}
        ></Greenbutton>
        <Greenbutton
          title="Français"
          onPress={() => goToNextScreen("French")}
        ></Greenbutton>
      </View>
      <View style={styles.fieldsContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
