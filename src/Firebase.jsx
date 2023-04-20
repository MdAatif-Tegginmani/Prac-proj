// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmrgHi09K_S8_LwMhNqexp8tB8lW_76ic",
  authDomain: "proj-382ca.firebaseapp.com",
  projectId: "proj-382ca",
  storageBucket: "proj-382ca.appspot.com",
  messagingSenderId: "731314276424",
  appId: "1:731314276424:web:e0089a9ffb2c19fbcff07d",
  measurementId: "G-35N1X8G479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth =getAuth();
export{app,auth}