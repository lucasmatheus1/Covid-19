import * as firebase from "firebase";

var firebaseConfig = undefined;

// Your web app's Firebase configuration
firebaseConfig = {
  apiKey: "AIzaSyACoANlj2xz9QWET3dkWgwkbcHoQAJ_bPA",
  authDomain: "covidpb-2a587.firebaseapp.com",
  databaseURL: "https://covidpb-2a587.firebaseio.com",
  projectId: "covidpb-2a587",
  storageBucket: "covidpb-2a587.appspot.com",
  messagingSenderId: "499921576746",
  appId: "1:499921576746:web:aebb702f0119a5d4eab453",
  measurementId: "G-FEVXHLQVLY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
