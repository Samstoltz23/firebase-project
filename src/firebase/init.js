// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChGoQSuW1UnAW5X84Oabfs6K2pd5CD53A",
  authDomain: "fir-project-3fd02.firebaseapp.com",
  projectId: "fir-project-3fd02",
  storageBucket: "fir-project-3fd02.firebasestorage.app",
  messagingSenderId: "793067211671",
  appId: "1:793067211671:web:5c43b04d94a473426dd2d2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();