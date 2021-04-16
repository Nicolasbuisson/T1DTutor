import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity} from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import Greenbutton from "../../components/greenButton";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

class ReminderTemplate extends Component {
  constructor() {
    super();
    this.state = {
      showDate: false,
      showTime: false,
      showFrequency: false,
      date: null,
      time: null,
      frequency: null,
      frequencies: ["Once", "Daily", "Weekly", "Monthly", "Yearly"],
      disabled: true,
      newOrUpdate: "new"
    };

    //functions
    this.goToReminders = this.goToReminders.bind(this);
  }
  static contextType = Context;

  goToReminders() {
    this.context.setView("RemindersScreen");
  }

  componentDidMount = async () => {
    console.log(this.context.reminder)
    this.isDisabled();
    if(this.context.reminder.identifier) {
      this.parseTime(this.context.reminder.content.data.time);
      this.setState({newOrUpdate: "update", date: this.parseDMY(this.context.reminder.content.data.date), frequency: this.context.reminder.content.data.frequency});
    }
  }

  componentDidUpdate() {
    this.isDisabled();
  }

  isDisabled = () => {
    const {time, date} = this.state;
    if(time && date && this.state.disabled) {
      this.setState({disabled: false});
    }
  }

  parseTime = (time) => {
    
    var b = time.split(":");
    let date = new Date();
    date.setMinutes(Number(b[1]));
    date.setHours(b[2].includes("AM") ? Number(b[0]) : Number(b[0]) + 12);
    this.setTime(date);
  }

  parseDMY = (s) => {
    var b = s.split(/\D+/);
    let date = new Date();
    date.setFullYear(b[0]);
    date.setMonth(b[1]-1);
    date.setDate(b[2]);
    return date;
  }

  setTime = (val) => {
    let timeLabel = val.toLocaleTimeString();
    timeLabel = timeLabel.slice(0, timeLabel.length - 6) + timeLabel.slice(timeLabel.length - 3, timeLabel.length);
    this.setState({time: val, timeLabel});
  }

  toggleDate = (val) => {
    if(val === "date") {
      let toggle = !this.state.showDate;
      if(!this.state.date) {
        this.setState({date: new Date()});
      }
      if(toggle) {
        this.setState({showDate: toggle, showTime: false, showFrequency: false})
      } else {
        this.setState({showDate: toggle})
      }
    } else if(val === "time") {
      let toggle = !this.state.showTime;
      if(!this.state.time) {
        let val = new Date();
        let timeLabel = val.toLocaleTimeString();
        timeLabel = timeLabel.slice(0, timeLabel.length - 6) + timeLabel.slice(timeLabel.length - 3, timeLabel.length);
        this.setState({time: val, timeLabel});
      }
      if(toggle) {
        this.setState({showTime: toggle, showDate: false, showFrequency: false})
      } else {
        this.setState({showTime: toggle})
      }
    } else if(val === "frequency") {
      let toggle = !this.state.showFrequency;
      if(!this.state.frequency) {
        this.setState({frequency: "Once"});
      }
      if(toggle) {
        this.setState({showFrequency: toggle, showTime: false, showDate: false})
      } else {
        this.setState({showFrequency: toggle})
      }
    }
  }

  schedulePushNotification = async () => {
    if(this.state.newOrUpdate === "update") {
      this.deleteReminder(false);
    }
    
    let trigger = {};
    trigger.repeats = this.state.frequency === "Once" ? false : true;
    trigger.hour = this.state.time.getHours();
    trigger.minute = this.state.time.getMinutes();
    if (this.state.frequency === "Weekly") {
      trigger.weekday = this.state.date.getDay() + 1;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "T1D Tutor",
        body: this.state.newOrUpdate === "new" ? this.context.reminder.body : this.context.reminder.content.body,
        data: { date: this.state.date.toLocaleDateString(), time: this.state.time.toLocaleTimeString(), frequency: this.state.frequency, timeLabel: this.state.timeLabel },
      },
      trigger
    }).then(()=>{
      this.context.setView("RemindersScreen");
    })
  };

  deleteReminder = async (nav) => {
    await Notifications.cancelScheduledNotificationAsync(this.context.reminder.identifier);
    if(nav) this.context.setView("RemindersScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={this.state.newOrUpdate === "new" ? this.context.reminder.body : this.context.reminder.content.body}
          backArrow={true}
          function={this.goToReminders}
          small={true}
          smallArrow={true}
        />
        <View style={styles.fieldsContainer}>
        <Text style={styles.title}>{this.state.newOrUpdate === "new" ? this.context.reminder.body : "Update reminder"}</Text>
          <View style={styles.space}>
            <Text style={styles.field}>Select a date</Text>
            {!this.state.showDate && this.state.date &&
            <Text>{this.state.date.toLocaleDateString()}</Text>
            }
            {!this.state.showDate &&
            <Greenbutton title="Select Date" onPress={()=>this.toggleDate("date")}></Greenbutton>
            }
            {this.state.showDate &&
                <DateTimePicker 
                  value={this.state.date || new Date()}
                  mode={"date"}
                  style={{width: 300, backgroundColor: "white"}}
                  is24Hour={true}
                  display="default"
                  onChange={(e,val)=>this.setState({date: val})} />
            }
            {this.state.showDate &&
            <Greenbutton title="Okay" onPress={()=>this.toggleDate("date")}></Greenbutton>
            }
          </View>
          <View style={styles.space}>
            <Text style={styles.field}>Select a time</Text>
            {!this.state.showTime && this.state.timeLabel &&
            <Text>{this.state.timeLabel}</Text>
            }
            {!this.state.showTime && 
            <Greenbutton title="Select Time" onPress={()=>this.toggleDate("time")}></Greenbutton>
            }
            {this.state.showTime &&
                <DateTimePicker 
                  value={this.state.time || new Date()}
                  mode={"time"}
                  style={{width: 300, backgroundColor: "white"}}
                  is24Hour={true}
                  display="default"
                  onChange={(e,val)=>{
                    this.setTime(val);
                  }} />
            }
            {this.state.showTime &&
            <Greenbutton title="Okay" onPress={()=>this.toggleDate("time")}></Greenbutton>
            }
          </View>
          <View style={styles.space}>
            <Text style={styles.field}>Select frequency</Text>
            {!this.state.showFrequency && this.state.frequency &&
            <Text>{this.state.frequency}</Text>
            }
            {!this.state.showFrequency &&
            <Greenbutton title="Select Frequency" onPress={()=>this.toggleDate("frequency")}></Greenbutton>
            }
            {this.state.showFrequency &&
              <Picker
              selectedValue={this.state.frequency || "Once"}
              style={{width: 300, height: 170, backgroundColor: "white"}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({frequency: itemValue})
              }>
                {this.state.frequencies.map((freq)=>{
                  return <Picker.Item label={freq} value={freq} key={freq}/>
                })}
            </Picker>
            }
            {this.state.showFrequency &&
            <Greenbutton title="Okay" onPress={()=>this.toggleDate("frequency")}></Greenbutton>
            }
          </View>
          <Greenbutton title={this.state.newOrUpdate === "new" ? "Confirm" : "Update"} onPress={this.schedulePushNotification} disabled={this.state.disabled}></Greenbutton>
          {this.state.newOrUpdate === "update" && <Text>Or</Text>}
          {this.state.newOrUpdate === "update"  && <TouchableOpacity onPress={()=>this.deleteReminder(true)}>
          <View style={{...styles.button }}>
            <Text style={styles.buttonText}>Delete</Text>
          </View>
        </TouchableOpacity>}
        </View>
      </View>
    );
  }
}

export default ReminderTemplate;

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
  space: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 40,
    fontSize: 20
  },  
  button: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'red',
    width: 235,
    height: 43,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Times New Roman',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  }
});
