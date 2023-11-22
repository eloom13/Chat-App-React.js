// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWXmlPq0Hu6a7mTmAPEQwSKJyih1HZSo",
  authDomain: "chatapp-nextjs-3d08e.firebaseapp.com",
  projectId: "chatapp-nextjs-3d08e",
  storageBucket: "chatapp-nextjs-3d08e.appspot.com",
  messagingSenderId: "436497973710",
  appId: "1:436497973710:web:2c598741de42da00a06b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }