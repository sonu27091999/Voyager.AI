// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj-xNy0YUdUOL4XN_TGah8DG4NcOksQ2U",
  authDomain: "ai-trip-planner-ab6ea.firebaseapp.com",
  projectId: "ai-trip-planner-ab6ea",
  storageBucket: "ai-trip-planner-ab6ea.appspot.com",
  messagingSenderId: "1065998734294",
  appId: "1:1065998734294:web:63d1445852f7070a954a77",
  measurementId: "G-WWXGRVPBJG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);