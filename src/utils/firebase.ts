// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjbodCIQgVZMvNAbfiij0W1NYM-Q6xU1Q",
    authDomain: "vue-firebase-d9f6e.firebaseapp.com",
    projectId: "vue-firebase-d9f6e",
    storageBucket: "vue-firebase-d9f6e.firebasestorage.app",
    messagingSenderId: "239139999066",
    appId: "1:239139999066:web:c15dcac7068001da84b763",
    measurementId: "G-7M7J76D30G"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };