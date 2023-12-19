// Import only the necessary modules using named imports
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1kuOTIg4ELEdg_XP3-kYUPYVL8JaUO_M",
  authDomain: "clone-reactjs-f921e.firebaseapp.com",
  projectId: "clone-reactjs-f921e",
  storageBucket: "clone-reactjs-f921e.appspot.com",
  messagingSenderId: "827379019719",
  appId: "1:827379019719:web:652bdb76e32abbd42673e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db ;
