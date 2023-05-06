import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBdFN5sMZNPe4o8XtLhP1W3j7VJ3nvmHsk",
  authDomain: "clone-3bd96.firebaseapp.com",
  projectId: "clone-3bd96",
  storageBucket: "clone-3bd96.appspot.com",
  messagingSenderId: "791572177058",
  appId: "1:791572177058:web:156dad0ba2b9b1fb9cb7fb",
  measurementId: "G-D736HMHMF4"
};


firebase.initializeApp(firebaseConfig);
 export const db=firebase.database();
 export const auth=firebase.auth();
