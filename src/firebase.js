import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "evomath-15f41.firebaseapp.com",
  projectId: "evomath-15f41",
  storageBucket: "evomath-15f41.appspot.com",
  messagingSenderId: "787226696434",
  appId: "",
  measurementId: "G-7HCHPN1BN9",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
