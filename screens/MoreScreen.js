import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../style/colors.js";
import Header from "../components/header";
import Footer from "../components/footer";
import Context from "../Context";
import Greenbutton from "../components/greenButton";
import * as Linking from "expo-linking";
import firebase from "firebase";

class MoreScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      language: "",
      languageInput: "",
      uid: "",
    };
  }
  static contextType = Context;

  changeLanguage = () => {
    let language =
      this.context.user.language === "English" ? "French" : "English";
    this.context.updateUserAndState({ language });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.context.user?.language === "English" && (
          <Header title="More"></Header>
        )}
        {this.context.user?.language === "French" && (
          <Header title="Paramètres"></Header>
        )}
        <View style={styles.fieldsContainer}>
          <Greenbutton
            title={
              this.context.user.language === "English"
                ? "Re-answer questionnaire"
                : "Changer mes réponses aux questions"
            }
            onPress={() => this.context.setView("Question1screen")}
          />
          <Greenbutton
            title={
              this.context.user.language === "English"
                ? "Change language"
                : "Changer la langue"
            }
            onPress={this.changeLanguage}
          />
          <Greenbutton
            title={
              this.context.user.language === "English"
                ? "Contact us"
                : "Contactez nous"
            }
            onPress={this._handlePress}
          />
          <Greenbutton
            title={
              this.context.user.language === "English"
                ? "Sign out"
                : "Se déconnecter"
            }
            onPress={() =>
              firebase
                .auth()
                .signOut()
                .then(() => {
                  this.context.setView("LoginScreen");
                })
                .catch((e) => console.log(e))
            }
          />
        </View>
        <Footer></Footer>
      </View>
    );
  }

  _handlePress = () => {
    Linking.openURL("mailto:melissa-rosina.pasqua@mail.mcgill.ca");
    this.props.onPress && this.props.onPress();
  };
}

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
