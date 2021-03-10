import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjeNLi4OVrXNAqNUioyxfIaYiByUkXhyQ",
    authDomain: "bodorakku-575ca.firebaseapp.com",
    projectId: "bodorakku-575ca",
    storageBucket: "bodorakku-575ca.appspot.com",
    messagingSenderId: "803513792191",
    appId: "1:803513792191:web:43140cbf484eb0b8e7780a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};