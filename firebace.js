// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGDHHS582Ri6x8G8TrKa18kDGIAHX4eWg",
  authDomain: "x-dos-network.firebaseapp.com",
  projectId: "x-dos-network",
  storageBucket: "x-dos-network.appspot.com",
  messagingSenderId: "920336093480",
  appId: "1:920336093480:web:3547c63d09f24be537001d",
  measurementId: "G-Q2TSQCENB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);