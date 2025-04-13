// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-generator-21e0c.firebaseapp.com",
  projectId: "ai-logo-generator-21e0c",
  storageBucket: "ai-logo-generator-21e0c.firebasestorage.app",
  messagingSenderId: "325601138663",
  appId: "1:325601138663:web:c6e086bdaf9aa8f26e8f42",
  measurementId: "G-ENG6HHR8CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);