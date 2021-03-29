import React, { useEffect, useState } from "react";
import "firebase/auth";
import SetView from "./SetView";
import { UserProvider } from './Context';
import dbh from "./firebase";
import firebase from "firebase";

export default function App() {
  const [user, setUser] = useState({});

  const [view, setView] = useState("LoginScreen");

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser && ((user.uid && currentUser?.uid !== user.uid) || !user.uid)) {
          dbh.collection("users").doc(currentUser.uid).get().then((doc)=>{
            let data = doc.data();
            setUser({...data});
            if(view === "LoginScreen" && !data.isNewUser) {
              setView("DashboardScreen");
            } else if(data.isNewUser) {
              setView("LanguageQuestionScreen");
            }
          }).catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        if(view === "EmailLoginScreen" || view === "EmailSignUpScreen") return;
        if(view !== "LoginScreen") {
          setUser({});
          setView("LoginScreen");
        }
      }
    });
  }, []);
  
  const completeQuestions = () => {
    dbh.collection("users").doc(user.uid).update({
      questions: {...user.questions},
      language: user.language,
      isNewUser: false
    })
    .then(()=>{
      setView("DashboardScreen");
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  
  return <UserProvider value={{user,setUser,view,setView,completeQuestions}}>
    <SetView view={view}></SetView>
  </UserProvider>;
}
