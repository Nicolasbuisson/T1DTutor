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
import Greenbutton from "../../components/greenButton"
import Dropdown from 'react-dropdown';
import Context from "../../Context";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

class Question1screen extends Component {
  constructor() {
    super();
    this.state = {
      showDOB: false,
      showDiagnosis: false,
      showPregnant: false
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
    
  }
  static contextType = Context;

  backFunction() {
    this.context.setView("LoginScreen");
  }

  goToNextScreen() {
    this.context.setView("Question2screen");
  }

  toggleDate = (val) => {
    if(val === "DOB") {
      let toggle = !this.state.showDOB;
      if(!this.context.user?.questions?.DOB) {
        this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, DOB: new Date()}})
      }
      if(toggle) {
        this.setState({showDOB: toggle, showPregnant: false, showDiagnosis: false})
      } else {
        this.setState({showDOB: toggle})
      }
    } else if(val === "diagnosis") {
      let toggle = !this.state.showDiagnosis;
      if(!this.context.user?.questions?.diagnosisdate) {
        this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, diagnosisdate: new Date()}})
      }
      if(toggle) {
        this.setState({showDiagnosis: toggle, showDOB: false, showPregnant: false})
      } else {
        this.setState({showDiagnosis: toggle})
      }
    } else if(val === "pregnant") {
      let toggle = !this.state.showPregnant;
      if(!this.context.user?.questions?.pregnant) {
        this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, pregnant: "No"}})
      }
      if(toggle) {
        this.setState({showPregnant: toggle, showDOB: false, showDiagnosis: false})
      } else {
        this.setState({showPregnant: toggle})
      }
    }
  }

  setDate = (field, date) => {
    if(field === "DOB") {
      this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, DOB: date}})
    } else if(field === "diagnosis") {
      this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, diagnosisdate: date}})
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <View style={styles.fieldsContainer}>
          <View style={styles.space}>
          <Text style={styles.field}>Date of birth</Text>
          {!this.state.showDOB &&
          <Text>{this.context.user?.questions?.DOB?.toLocaleDateString()}</Text>
          }
          {!this.state.showDOB &&
          <Greenbutton title="Select Date" onPress={()=>this.toggleDate("DOB")}></Greenbutton>
          }
          {this.state.showDOB &&
              <DateTimePicker 
                value={this.context.user?.questions?.DOB || new Date()}
                mode={"date"}
                style={{width: 300, backgroundColor: "white"}}
                is24Hour={true}
                display="default"
                onChange={(e,val)=>this.setDate("DOB",val)} />
          }
          {this.state.showDOB &&
          <Greenbutton title="Okay" onPress={()=>this.toggleDate("DOB")}></Greenbutton>
          }
          </View>
          <View style={styles.space}>
          <Text style={styles.field}>Date of diagnosis with T1D</Text>
          {!this.state.showDiagnosis &&
          <Text>{this.context.user?.questions?.diagnosisdate?.toLocaleDateString()}</Text>
          }
          {!this.state.showDiagnosis &&
          <Greenbutton title="Select Date" onPress={()=>this.toggleDate("diagnosis")}></Greenbutton>
          }
          {this.state.showDiagnosis &&
              <DateTimePicker 
                value={this.context.user?.questions?.diagnosisdate || new Date()}
                mode={"date"}
                style={{width: 300, backgroundColor: "white"}}
                is24Hour={true}
                display="default"
                onChange={(e,val)=>this.setDate("diagnosis",val)} />
          }
          {this.state.showDiagnosis &&
          <Greenbutton title="Okay" onPress={()=>this.toggleDate("diagnosis")}></Greenbutton>
          }
          </View>
          <View style={styles.space}>
          <Text style={styles.field}>Is it possible for you to get pregnant?</Text>
          {!this.state.showPregnant &&
          <Text>{this.context.user?.questions?.pregnant}</Text>
          }
          {!this.state.showPregnant &&
          <Greenbutton title="Select" onPress={()=>this.toggleDate("pregnant")}></Greenbutton>
          }
          {this.state.showPregnant &&
              <Picker
                selectedValue={this.context.user?.questions?.pregnant || "No"}
                style={{width: 300, height: 170, backgroundColor: "white"}}
                onValueChange={(itemValue, itemIndex) =>
                  this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, pregnant: itemValue}})
                }>
                <Picker.Item label="No" value="No" />
                <Picker.Item label="Yes" value="Yes" />
              </Picker>
          }
          {this.state.showPregnant &&
          <Greenbutton title="Okay" onPress={()=>this.toggleDate("pregnant")}></Greenbutton>
          }
          </View>

          <Greenbutton title="Next" onPress={this.goToNextScreen}></Greenbutton>
        </View>
      </View>
    );
  }
}

export default Question1screen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  field: {
    fontSize: 20,
    color: colors.primary,
  },

  input: {
    height: 25,
    width: 300,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 25,
  },

  space: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  }
});

