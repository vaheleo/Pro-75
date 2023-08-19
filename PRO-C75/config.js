import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDA1aahsT5phFZPVOu0n58wj-edXfFCGcg",
  authDomain: "e-ride-ac12b.firebaseapp.com",
  projectId: "e-ride-ac12b",
  storageBucket: "e-ride-ac12b.appspot.com",
  messagingSenderId: "203175173011",
  appId: "1:203175173011:web:67915abd960959596c2666",
  measurementId: "G-WVMLXRHG5M"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
