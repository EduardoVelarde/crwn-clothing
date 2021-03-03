import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {
    apiKey: "AIzaSyDD4YySN_hZRtCIr2aFqIWSTkY99pTLUco",
    authDomain: "crwn-db-4394f.firebaseapp.com",
    projectId: "crwn-db-4394f",
    storageBucket: "crwn-db-4394f.appspot.com",
    messagingSenderId: "73294033803",
    appId: "1:73294033803:web:25c9fe0e8f63a0f0aa758e",
    measurementId: "G-2FFJ1MRSGM"
  };
  
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
  export default firebase;