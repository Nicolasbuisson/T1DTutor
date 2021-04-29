import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../style/colors.js";
import Header from "../components/header";
import Footer from "../components/footer";
import Context from "../Context";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

class RemindersScreen extends Component {
  constructor() {
    super();
    this.state = {
      expoPushToken: "",
      notification: false,
      notificationsList: [],
    };
    //refs
    this.notificationListener = null;
    this.responseListener = null;

    //functions
    this.goToHome = this.goToHome.bind(this);
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToReminders = this.goToReminders.bind(this);
    this.goToMore = this.goToMore.bind(this);
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(
      this
    );
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

  goToReminderTemplate = (reminder) => {
    this.context.setReminder({ body: reminder });
    this.context.setView("ReminderTemplate");
  };

  registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  };

  componentDidMount = async () => {
    this.registerForPushNotificationsAsync().then((token) => {
      console.log(token);
      this.setState({ expoPushToken: token });
    });

    this.notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        this.setState({ notification: notification });
      }
    );

    this.responseListener = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    const notificationsList = await Notifications.getAllScheduledNotificationsAsync();
    this.setState({ notificationsList });
    return () => {
      Notifications.removeNotificationSubscription(this.notificationListener);
      Notifications.removeNotificationSubscription(this.responseListener);
    };
  };

  handlePress = (notification) => {
    this.context.setReminder(notification);
    this.context.setView("ReminderTemplate");
  };

  renderNotifications = () => {
    return this.state.notificationsList.map((notification) => {
      let date =
        notification.content.data.frequency === "Daily" ? (
          this.context.user?.language === "English" ? (
            <Text>Daily, {notification.content.data.timeLabel}</Text>
          ) : (
            <Text>Hebdomadaire, {notification.content.data.timeLabel}</Text>
          )
        ) : (
          <Text>
            {notification.content.data.date},{" "}
            {notification.content.data.timeLabel}
          </Text>
        );
      return (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.handlePress(notification)}
        >
          <Text>{notification.content.body}</Text>
          {date}
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.context.user?.language === "English" && (
          <Header title="Reminders"></Header>
        )}
        {this.context.user?.language === "French" && (
          <Header title="Rappels"></Header>
        )}
        <View style={styles.topParagraph}>
          {this.context.user?.language === "English" && (
            <Text style={styles.text}>
              Here are some reminders you can set to have notifications for
              day-to-day items and important dates.{"\n"}With diabetes, there's
              a lot of things to remember. This tool is here to help!
            </Text>
          )}
          {this.context.user?.language === "French" && (
            <Text style={styles.text}>
              Voici quelques rappels que vous pouvez définir pour recevoir des
              notifications pour des articles quotidiens et des dates
              importantes.{"\n"}
              Avec le diabète, il y a un beaucoup de choses à retenir. Cet outil
              est là pour vous aider!
            </Text>
          )}
        </View>
        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "46%" }}
          showsVerticalScrollIndicator={false}
        >
          {this.renderNotifications()}
        </ScrollView>
        <TouchableOpacity
          style={styles.addNew}
          onPress={() => this.context.setView("NewReminderScreen")}
        >
          {this.context.user?.language === "English" && (
            <Text style={styles.addNewText}>Add Reminder</Text>
          )}
          {this.context.user?.language === "French" && (
            <Text style={styles.addNewText}>Rajouter un Rappel</Text>
          )}
        </TouchableOpacity>
        <Footer></Footer>
      </View>
    );
  }
}

export default RemindersScreen;

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
  addNew: {
    marginBottom: 5,
  },
  addNewText: {
    color: colors.primary,
  },
});
