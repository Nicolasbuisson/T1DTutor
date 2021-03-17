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

  let userIsAuth = firebase.auth().currentUser;

  if (userIsAuth) {
    if(view === "LoginScreen") {
      setView("DashboardScreen");
    }
  } else {
    // No user is signed in.
  }
  
  return <UserProvider value={{user,setUser,view,setView,completeQuestions}}>
    <SetView view={view}></SetView>
  </UserProvider>;
}
