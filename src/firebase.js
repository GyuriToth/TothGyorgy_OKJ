import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCjeNLi4OVrXNAqNUioyxfIaYiByUkXhyQ",
    authDomain: "bodorakku-575ca.firebaseapp.com",
    projectId: "bodorakku-575ca",
    storageBucket: "bodorakku-575ca.appspot.com",
    messagingSenderId: "803513792191",
    appId: "1:803513792191:web:43140cbf484eb0b8e7780a"
  };
  
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
export default firebase;