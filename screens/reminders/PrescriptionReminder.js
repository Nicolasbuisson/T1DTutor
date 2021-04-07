import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";

class PrescriptionReminder extends Component {
  constructor() {
    super();
    this.state = {
      english: true,
    };

    //functions
    this.goToReminders = this.goToReminders.bind(this);
  }
  static contextType = Context;

  goToReminders() {
    this.context.setView("RemindersScreen");
  }

  componentDidMount() {
    if (this.context.user?.language === "French") {
      this.setState({ english: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Prescription Reminder"
          backArrow={true}
          function={this.goToReminders}
          small={true}
          smallArrow={true}
        />
        <View style={styles.fieldsContainer}>
          <Text>Yo this is a reminder for u baba</Text>
        </View>
      </View>
    );
  }
}

export default PrescriptionReminder;

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
    height: "87%",
    marginBottom: 5,
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
