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
import InjectionOrPumpScreen from "./screens/InjectionOrPumpScreen";
import TrackingScreen from "./screens/TrackingScreen";
import RemindersScreen from "./screens/RemindersScreen";
import MoreScreen from "./screens/MoreScreen";
import LearningModulesScreen from "./screens/LearningModulesScreen";
import InjectionScreen2 from "./screens/InjectionScreen2";
import FixedDosesScreen from "./screens/FixedDosesScreen";
import InjectionScreen1 from "./screens/InjectionScreen1";
import PumpScreen1 from "./screens/PumpScreen1";

export default function App() {
  const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,
    EmailLoginScreen: EmailLoginScreen,
    EmailSignUpScreen: EmailSignUpScreen,
    PasswordResetScreen: PasswordResetScreen,
    Question1screen: Question1screen,
    Question2screen: Question2screen,
    Question2bisscreen: Question2bisscreen,
    InjectionOrPumpScreen: InjectionOrPumpScreen,
    InjectionScreen2: InjectionScreen2,
    FixedDosesScreen: FixedDosesScreen,
    InjectionScreen1: InjectionScreen1,
    PumpScreen1: PumpScreen1,
    TrackingScreen: TrackingScreen,
    RemindersScreen: RemindersScreen,
    MoreScreen: MoreScreen,
    LearningModulesScreen: LearningModulesScreen,
  });

  const AppNavigator = createAppContainer(AppSwitchNavigator);
  return <AppNavigator />;
}
