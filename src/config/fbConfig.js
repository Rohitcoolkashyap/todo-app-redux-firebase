import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBqITB-Jzd4fdtdDGB7sJ4wwiNeA5AdAyY",
  authDomain: "todo-app-76684.firebaseapp.com",
  databaseURL: "https://todo-app-76684.firebaseio.com",
  projectId: "todo-app-76684",
  storageBucket: "todo-app-76684.appspot.com",
  messagingSenderId: "990019156550",
  appId: "1:990019156550:web:8222bed9cf81ca7e0ae847",
  measurementId: "G-4KPYC0MN5C",
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
