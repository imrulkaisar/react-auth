// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACKDHgCNfyIpqo56FQdmNvv2UyxXPrSBk",
  authDomain: "react-auth-8c255.firebaseapp.com",
  projectId: "react-auth-8c255",
  storageBucket: "react-auth-8c255.appspot.com",
  messagingSenderId: "814207242790",
  appId: "1:814207242790:web:3ebf92d3c8d50d3a898ce7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
