import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import dbh from "../firebase";
import colors from "../style/colors";
import Googlebutton from "../components/googlebutton"
import Greenbutton from "../components/greenButton"
import Context from '../Context'

const LoginScreen = () => {
  const context = useContext(Context);

  const proceed = (status, user) => {
    if(status === "error") return;
    if(status === "newUser"){
      context.setView("LanguageQuestionScreen");
    } else if(status === "existingUser") {
      context.setView("DashboardScreen");
    }
  }

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId:
          "670570397331-k6qmhflr18eh05u52c8p8oc227s5c0st.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  const onSignIn = (googleUser) => {
    // console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function (result) {
              // console.log("user signed in");
              if (result.additionalUserInfo.isNewUser) {
                dbh.collection("users").doc(result.user.uid).set({
                  gmail: result.user.email,
                  profile_pic: result.additionalUserInfo.profile.picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  created_at: Date.now(),
                  isNewUser: true,
                  uid: result.user.uid
                });
                proceed("newUser", result.user);
              } else {
                proceed("existingUser", result.user);
                dbh.collection("users").doc(result.user.uid).update({
                  last_logged_in: Date.now(),
                });
              }
            })
            .catch((error) => {
              // console.log("ERROR", error);
              // Handle Errors here.
              proceed("error");
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }
    );
  };

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const goToEmailScreen = () => {
    return context.setView("EmailLoginScreen");
  }

  const goToQuestions = () => {
    return context.setView("LanguageQuestionScreen");
  }

  return  (<View style={styles.container}>
  <Text style={styles.title}>App Name</Text>
  <View>
    
    <Googlebutton title="Google Login" onPress={signInWithGoogleAsync}></Googlebutton>
    
    <Greenbutton title="Email Login" onPress={goToEmailScreen}></Greenbutton>

    <Greenbutton title="Questions" onPress={goToQuestions}></Greenbutton>
  </View>
</View>)
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 80,
  },

  button: {
    marginTop: 20,
    height: 30,
    width: 150,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
  },
});
