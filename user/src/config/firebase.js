// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwyFYta7AQKHGw8qRG8JKMuwcwnLmW8G0",
  authDomain: "authentication-7aec4.firebaseapp.com",
  projectId: "authentication-7aec4",
  storageBucket: "authentication-7aec4.appspot.com",
  messagingSenderId: "83093376660",
  appId: "1:83093376660:web:e9c45fec2d3eadb1de2e81",
  measurementId: "G-N7E4TTMQL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export {auth}
