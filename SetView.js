import React from "react";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import EmailLoginScreen from "./screens/EmailLoginScreen";
import EmailSignUpScreen from "./screens/EmailSignUpScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import Question1screen from "./screens/questions/Question1Screen";
import Question2screen from "./screens/questions/Question2Screen";
import Question2bisscreen from "./screens/questions/Question2bisScreen";
import InjectionOrPumpScreen from "./screens/questions/InjectionOrPumpScreen";
import TrackingScreen from "./screens/TrackingScreen";
import RemindersScreen from "./screens/RemindersScreen";
import MoreScreen from "./screens/MoreScreen";
import LearningModulesScreen from "./screens/LearningModulesScreen";
import InjectionScreen2 from "./screens/questions/InjectionScreen2";
import FixedDosesScreen from "./screens/questions/FixedDosesScreen";
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
import InjectionScreen1 from "./screens/questions/InjectionScreen1";
import PumpScreen1 from "./screens/questions/PumpScreen1";
import LanguageQuestionScreen from "./screens/questions/LanguageQuestionScreen";
import ExerciseAndYou from "./screens/learningModules/ExerciseAndYou";
import SickDayManagement from "./screens/learningModules/SickDayManagement";
import TimeOffThePump from "./screens/learningModules/TimeOffThePump";

export default function SetView(props) {
  let view = props.view;
  return (
    <React.Fragment>
      {view === "LoadingScreen" && <LoadingScreen></LoadingScreen>}
      {view === "LoginScreen" && <LoginScreen></LoginScreen>}
      {view === "DashboardScreen" && <DashboardScreen></DashboardScreen>}
      {view === "EmailLoginScreen" && <EmailLoginScreen></EmailLoginScreen>}
      {view === "EmailSignUpScreen" && <EmailSignUpScreen></EmailSignUpScreen>}
      {view === "PasswordResetScreen" && (
        <PasswordResetScreen></PasswordResetScreen>
      )}
      {view === "Question1screen" && <Question1screen></Question1screen>}
      {view === "Question2screen" && <Question2screen></Question2screen>}
      {view === "Question2bisscreen" && (
        <Question2bisscreen></Question2bisscreen>
      )}
      {view === "InjectionOrPumpScreen" && (
        <InjectionOrPumpScreen></InjectionOrPumpScreen>
      )}
      {view === "InjectionScreen2" && <InjectionScreen2></InjectionScreen2>}
      {view === "FixedDosesScreen" && <FixedDosesScreen></FixedDosesScreen>}
      {view === "InjectionScreen1" && <InjectionScreen1></InjectionScreen1>}
      {view === "PumpScreen1" && <PumpScreen1></PumpScreen1>}
      {view === "TrackingScreen" && <TrackingScreen></TrackingScreen>}
      {view === "RemindersScreen" && <RemindersScreen></RemindersScreen>}
      {view === "MoreScreen" && <MoreScreen></MoreScreen>}
      {view === "LearningModulesScreen" && (
        <LearningModulesScreen></LearningModulesScreen>
      )}
      {view === "MythBusters" && <MythBusters></MythBusters>}
      {view === "KeepingYourSugarsAtTarget" && (
        <KeepingYourSugarsAtTarget></KeepingYourSugarsAtTarget>
      )}
      {view === "LowBloodSugar" && <LowBloodSugar></LowBloodSugar>}
      {view === "HighBloodSugar" && <HighBloodSugar></HighBloodSugar>}
      {view === "PreventingComplications" && (
        <PreventingComplications></PreventingComplications>
      )}
      {view === "AlcoholAndOtherSubstances" && (
        <AlcoholAndOtherSubstances></AlcoholAndOtherSubstances>
      )}
      {view === "DrivingWithDiabetes" && (
        <DrivingWithDiabetes></DrivingWithDiabetes>
      )}
      {view === "DiabetesAndPregnancy" && (
        <DiabetesAndPregnancy></DiabetesAndPregnancy>
      )}
      {view === "PeerSupportAndMentalHealth" && (
        <PeerSupportAndMentalHealth></PeerSupportAndMentalHealth>
      )}
      {view === "InnovativeDiabetesTech" && (
        <InnovativeDiabetesTech></InnovativeDiabetesTech>
      )}
      {view === "WhoToCall" && <WhoToCall></WhoToCall>}
      {view === "FindingPatterns" && <FindingPatterns></FindingPatterns>}
      {view === "Travel" && <Travel></Travel>}
      {view === "FoodAndYou" && <FoodAndYou></FoodAndYou>}
      {view === "SkinAndYourDiabetesSupplies" && (
        <SkinAndYourDiabetesSupplies></SkinAndYourDiabetesSupplies>
      )}
      {view === "ExerciseAndYou" && <ExerciseAndYou></ExerciseAndYou>}
      {view === "TimeOffThePump" && <TimeOffThePump></TimeOffThePump>}
      {view === "SickDayManagement" && <SickDayManagement></SickDayManagement>}
    </React.Fragment>
  );
}
