import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button
} from "react-native";
import colors from "../../style/colors.js";
import Header from "../../components/header";
import Greenbutton from "../../components/greenButton"
import QuestionDescription from "../../components/QuestionDescription"
import Context from "../../Context";

class Question2screen extends Component {
  constructor() {
    super();
    this.state = {
        existingReminders: ["Blood sugar test", "Insulin injection", "Prescription", "Clinic visit", "Blood test", "Submit form for insulin pump access program", "Submit form for RAMQ coverage of freestyle libre", "Change lancet for glucose meter", "Change infusion site", "Change pump's insulin reservoir"],
        showInput: false,
        body: ""
    };

    //functions
    this.backFunction = this.backFunction.bind(this);

  }
  static contextType = Context;

  backFunction() {
    this.context.setView("RemindersScreen");
  }


  goToReminderTemplate = (reminder) => {
    this.context.setReminder({body: reminder});
    this.context.setView("ReminderTemplate");
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <View style={styles.topParagraph}>
          <Text style={styles.text}>
            Choose a reminder from the list or create your own
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "70%" }}
          showsVerticalScrollIndicator={false}
        >
                   
          <TouchableOpacity
            style={styles.touchable}
            onPress={()=>this.setState({showInput: !this.state.showInput})}
          >
            <Text>Create your own</Text>
          </TouchableOpacity>
          {this.state.showInput && 
          <View style={styles.inputView}>
              <TextInput style={styles.input} onChangeText={(text)=>this.setState({body: text})} value={this.state.body}></TextInput>
              <Greenbutton title="Confirm" onPress={()=>this.goToReminderTemplate(this.state.body)}></Greenbutton>
          </View>}
          <Text>Or</Text>
          {this.state.existingReminders.map((reminder)=>{
            if (reminder === "Insulin injection" && this.context.user.questions.injectionsOrPump !== "Injections") return;
            if (reminder === "Submit form for insulin pump access program" && this.context.user.questions.injectionsOrPump !== "Pump") return;
            if (reminder === "Change infusion site" && this.context.user.questions.injectionsOrPump !== "Pump") return;
            if (reminder === "Change pump's insulin reservoir" && this.context.user.questions.injectionsOrPump !== "Pump") return;
            if (reminder === "Submit form for RAMQ coverage of freestyle libre" && this.context.user.questions.checkBloodSugar !== "Flash CGM") return;
            return  (<TouchableOpacity
            style={styles.touchable}
            onPress={()=>this.goToReminderTemplate(reminder)}
          >
            <Text>{reminder}</Text>
          </TouchableOpacity>)
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
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.grey,
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
  }
});

