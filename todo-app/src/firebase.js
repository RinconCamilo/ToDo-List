import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-x9J7cxBk_RoEieAxFKd2TwqeNFmRe_U",
    authDomain: "todo-app-79827.firebaseapp.com",
    projectId: "todo-app-79827",
    storageBucket: "todo-app-79827.appspot.com",
    messagingSenderId: "343649771196",
    appId: "1:343649771196:web:510857d831f735f44efab9",
    measurementId: "G-M794EL1C2B"
});

const db = firebaseApp.firestore();

export default db;