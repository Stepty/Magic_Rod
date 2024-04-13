// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD--29siQYPuzKD95KSPcitfy2ZQdRI5z0",
  authDomain: "magic-rod-d77fc.firebaseapp.com",
  projectId: "magic-rod-d77fc",
  storageBucket: "magic-rod-d77fc.appspot.com",
  messagingSenderId: "610905451827",
  appId: "1:610905451827:web:0de15554b204f84d5e2246",
  measurementId: "G-37LKBWQ79L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);