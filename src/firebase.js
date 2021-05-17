import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3P0zcGxUEKEWITMwuXDdiDTtx5F7xRqc",
    authDomain: "challenge-97b99.firebaseapp.com",
    projectId: "challenge-97b99",
    storageBucket: "challenge-97b99.appspot.com",
    messagingSenderId: "1068457649534",
    appId: "1:1068457649534:web:7014f1fd6a736bfaabbf2f",
    measurementId: "G-68TKYGJR50"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };