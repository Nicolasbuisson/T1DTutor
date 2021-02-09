import React from "react";
import "firebase/auth";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import EmailLoginScreen from "./screens/EmailLoginScreen";
import EmailSignUpScreen from "./screens/EmailSignUpScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import Question1screen from "./screens/Question1Screen";
import Question2screen from "./screens/Question2Screen";
import Question2bisscreen from "./screens/Question2bisScreen";
import Question3screen from "./screens/Question3Screen";
import TrackingScreen from "./screens/TrackingScreen";
import RemindersScreen from "./screens/RemindersScreen";
import MoreScreen from "./screens/MoreScreen";
import LearningModulesScreen from "./screens/LearningModulesScreen";

export default function App() {
  const AppSwitchNavigator = createSwitchNavigator({
    TrackingScreen: TrackingScreen,
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,
    EmailLoginScreen: EmailLoginScreen,
    EmailSignUpScreen: EmailSignUpScreen,
    PasswordResetScreen: PasswordResetScreen,
    Question1screen: Question1screen,
    Question2screen: Question2screen,
    Question2bisscreen: Question2bisscreen,
    Question3screen: Question3screen,
    RemindersScreen: RemindersScreen,
    MoreScreen: MoreScreen,
    LearningModulesScreen: LearningModulesScreen,
  });

  const AppNavigator = createAppContainer(AppSwitchNavigator);
  return <AppNavigator />;
}
