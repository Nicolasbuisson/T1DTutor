import React, { useState } from "react";
import "firebase/auth";
import SetView from "./SetView";
import { UserProvider } from './Context';
import dbh from "./firebase";
import firebase from "firebase";

export default function App() {
  const [user, setUser] = useState({});

  const [view, setView] = useState("LoginScreen");
  
  const completeQuestions = () => {
    dbh.collection("users").doc(user.uid).update({
      questions: {...user.questions}
    })
    .then(()=>{
      setView("DashboardScreen");
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
      if(view === "LoginScreen") {
        setUser({...currentUser});
        setView("DashboardScreen");
      }
    } else {
      if(view === "EmailLoginScreen" || view === "EmailSignUpScreen") return;
      if(view !== "LoginScreen") {
        setUser({});
        setView("LoginScreen");
      }
    }
  });
  
  return <UserProvider value={{user,setUser,view,setView,completeQuestions}}>
    <SetView view={view}></SetView>
  </UserProvider>;
}
