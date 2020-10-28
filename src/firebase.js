// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJHhX-mgDVx3IiTylHYKfBgUMpoT2WiPg",
  authDomain: "whatsapp-clone-50e5e.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-50e5e.firebaseio.com",
  projectId: "whatsapp-clone-50e5e",
  storageBucket: "whatsapp-clone-50e5e.appspot.com",
  messagingSenderId: "341791788585",
  appId: "1:341791788585:web:1e09d2ac26cbaddf11d638",
  measurementId: "G-RGEJ7S1QH3"
};
// if (!firebase.apps.length) {
//   //check firebase.apps is already loaded
//   firebase.initializeApp(firebaseConfig);
// }
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
