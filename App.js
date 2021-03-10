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
import MythBusters from "./screens/learningModules/MythBusters";
import KeepingYourSugarsAtTarget from "./screens/learningModules/KeepingYourSugarsAtTarget";
import LowBloodSugar from "./screens/learningModules/LowBloodSugar";
import HighBloodSugar from "./screens/learningModules/HighBloodSugar";
import PreventingComplications from "./screens/learningModules/PreventingComplications";
import AlcoholAndOtherSubstances from "./screens/learningModules/AlcoholAndOtherSubstances";
import DrivingWithDiabetes from "./screens/learningModules/DrivingWithDiabetes";
import DiabetesAndPregnancy from "./screens/learningModules/DiabetesAndPregancy";
import PeerSupportAndMentalHealth from "./screens/learningModules/PeerSupportAndMentalHealth";
import InnovativeDiabetesTech from "./screens/learningModules/InnovativeDiabetesTech";
import WhoToCall from "./screens/learningModules/WhoToCall";
import FindingPatterns from "./screens/learningModules/FindingPatterns";
import Travel from "./screens/learningModules/Travel";
import FoodAndYou from "./screens/learningModules/FoodAndYou";
import SkinAndYourDiabetesSupplies from "./screens/learningModules/SkinAndYourDiabetesSupplies";
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
    MythBusters: MythBusters,
    KeepingYourSugarsAtTarget: KeepingYourSugarsAtTarget,
    LowBloodSugar: LowBloodSugar,
    HighBloodSugar: HighBloodSugar,
    PreventingComplications: PreventingComplications,
    AlcoholAndOtherSubstances: AlcoholAndOtherSubstances,
    DrivingWithDiabetes: DrivingWithDiabetes,
    DiabetesAndPregnancy: DiabetesAndPregnancy,
    PeerSupportAndMentalHealth: PeerSupportAndMentalHealth,
    InnovativeDiabetesTech: InnovativeDiabetesTech,
    WhoToCall: WhoToCall,
    FindingPatterns: FindingPatterns,
    Travel: Travel,
    FoodAndYou: FoodAndYou,
    SkinAndYourDiabetesSupplies: SkinAndYourDiabetesSupplies,
  });

  const AppNavigator = createAppContainer(AppSwitchNavigator);
  return <AppNavigator />;
}
