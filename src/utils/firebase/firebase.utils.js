import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA54uKwEEMDZxDTigbBd197WEoxiTodPUQ",
  authDomain: "crwn-app-f6cbe.firebaseapp.com",
  projectId: "crwn-app-f6cbe",
  storageBucket: "crwn-app-f6cbe.appspot.com",
  messagingSenderId: "804029725553",
  appId: "1:804029725553:web:bda52559bfa41d673d94d0",
  measurementId: "G-W3GBM0E75H",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const SignInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async function (
  userAuth,
  additionalInformation = {}
) {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // check is user data  exist
  // If user data does not exist
  if (!userSnapshot.exists()) {
    // Create / set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error(error.message, "error creating the user");
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async function () {
  return await signOut(auth);
};
