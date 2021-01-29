import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDxlwX9aePXvyQjVyag8QvvpQxOSGRr8t4',
  authDomain: 'crwn-db-5c1a0.firebaseapp.com',
  projectId: 'crwn-db-5c1a0',
  storageBucket: 'crwn-db-5c1a0.appspot.com',
  messagingSenderId: '1050390026497',
  appId: '1:1050390026497:web:af6f8c87af18b1a9eae300',
  measurementId: 'G-GCKEEHZWF7',
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
