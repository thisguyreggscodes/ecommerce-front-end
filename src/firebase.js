// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyASEjlnmkY2WFBUk0eKDrFIcVColqZe-Ww",
    authDomain: "challenge-ef29e.firebaseapp.com",
    projectId: "challenge-ef29e",
    storageBucket: "challenge-ef29e.appspot.com",
    messagingSenderId: "179179241412",
    appId: "1:179179241412:web:544298a0a4ca761be0ee91",
    measurementId: "G-4LXE50YFHL",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };