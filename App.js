import React, { useEffect, useState } from "react";
import "firebase/auth";
import SetView from "./SetView";
import { UserProvider } from "./Context";
import firebase from "firebase";
import { getUser, updateUser } from "./database";

export default function App() {
  const [user, setUser] = useState({});

  const [view, setView] = useState("LoginScreen");

  useEffect(() => {
    userAuth();
  }, []);

  const userAuth = () => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (
        currentUser &&
        ((user.uid && currentUser?.uid !== user.uid) || !user.uid)
      ) {
        getUser(currentUser.uid, (data) => {
          if (data) {
            setUser({ ...data });
            if (view === "LoginScreen" && !data?.isNewUser) {
              setView("DashboardScreen");
            } else if (data?.isNewUser) {
              setView("LanguageQuestionScreen");
            }
          } else {
            setView("LanguageQuestionScreen");
          }
        });
      } else {
        if (view === "EmailLoginScreen" || view === "EmailSignUpScreen") return;
        if (view !== "LoginScreen") {
          setUser({});
          setView("LoginScreen");
        }
      }
    });
  };

  const completeQuestions = (user) => {
    updateUser(
      user.uid,
      {
        questions: { ...user.questions },
        language: user.language,
        isNewUser: false,
      },
      () => {
        setView("DashboardScreen");
      }
    );
  };

  const updateUserAndState = (options, callback) => {
    if (!user.uid) return;
    setUser({ ...user, ...options });
    updateUser(user.uid, options, callback);
  };

  return (
    <UserProvider
      value={{
        user,
        setUser,
        view,
        setView,
        completeQuestions,
        updateUserAndState,
      }}
    >
      <SetView view={view}></SetView>
    </UserProvider>
  );
}
