import * as firebase from "firebase";
import "firebase/firestore";

// // Optionally import the services that you want to use
// //import "firebase/database";
// //import "firebase/firestore";
// //import "firebase/functions";
// //import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDyYkoRaXL1xvLMj-PS6GmJzvQgbVWq4l0",
  authDomain: "dp11-cdf09.firebaseapp.com",
  databaseURL: "https://dp11-cdf09.firebaseio.com",
  projectId: "dp11-cdf09",
  storageBucket: "dp11-cdf09.appspot.com",
  messagingSenderId: "670570397331",
  appId: "1:670570397331:web:cd3088f0c9afb7af43d766",
}; // apiKey, authDomain, etc. (see above)

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export default dbh;
