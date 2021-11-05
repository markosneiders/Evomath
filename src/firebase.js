import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTuTovx7c8q6AWtb6ZEFVQOuvCb3yug1Y",
  authDomain: "evomath-15f41.firebaseapp.com",
  projectId: "evomath-15f41",
  storageBucket: "evomath-15f41.appspot.com",
  messagingSenderId: "787226696434",
  appId: "1:787226696434:web:c39b1f073a27990c1c0e6b",
  measurementId: "G-7HCHPN1BN9",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
