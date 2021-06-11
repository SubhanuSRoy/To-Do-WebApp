// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEWJMocGaMuFDt70PRJqVdehHnYriFW8I",
//   authDomain: "todo-webapp-7a2ef.firebaseapp.com",
//   projectId: "todo-webapp-7a2ef",
//   storageBucket: "todo-webapp-7a2ef.appspot.com",
//   messagingSenderId: "788507347018",
//   appId: "1:788507347018:web:c86ee7fdbb7be896cc3eb3",
//   measurementId: "G-Q60T561EK2",
// };

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEWJMocGaMuFDt70PRJqVdehHnYriFW8I",
  authDomain: "todo-webapp-7a2ef.firebaseapp.com",
  projectId: "todo-webapp-7a2ef",
  storageBucket: "todo-webapp-7a2ef.appspot.com",
  messagingSenderId: "788507347018",
  appId: "1:788507347018:web:c86ee7fdbb7be896cc3eb3",
  measurementId: "G-Q60T561EK2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth;

export default db;
