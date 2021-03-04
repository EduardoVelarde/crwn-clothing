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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
  export default firebase;