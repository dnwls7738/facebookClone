import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBRxiQ2I6quQDTgrX75y40slhGQ7Jqz5A",
  authDomain: "woo-facebook.firebaseapp.com",
  projectId: "woo-facebook",
  storageBucket: "woo-facebook.appspot.com",
  messagingSenderId: "1064532123836",
  appId: "1:1064532123836:web:30db8635e0f4a8e02670b9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
