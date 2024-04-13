// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASf5g8NWnKdIF63IvHziZWLcE2rPmCYnI",
    authDomain: "magicrod-8ef66.firebaseapp.com",
    databaseURL: "https://magicrod-8ef66-default-rtdb.firebaseio.com",
    projectId: "magicrod-8ef66",
    storageBucket: "magicrod-8ef66.appspot.com",
    messagingSenderId: "556322309834",
    appId: "1:556322309834:web:4d3f30f68c71b11c8a1633",
    measurementId: "G-KL7S6EJK5Z"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);