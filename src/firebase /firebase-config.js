// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsajvFbUIyiLyeF1A7oki-w1Pry3lxjw",
  authDomain: "chatapp-1b81c.firebaseapp.com",
  projectId: "chatapp-1b81c",
  storageBucket: "chatapp-1b81c.appspot.com",
  messagingSenderId: "638832516467",
  appId: "1:638832516467:web:f679e85988db5e1413f906"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();