// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJFon2P6cbbEFcmJvb0g5RHZv-eyy_aaQ",
  authDomain: "blond-c7436.firebaseapp.com",
  projectId: "blond-c7436",
  storageBucket: "blond-c7436.appspot.com",
  messagingSenderId: "224154830154",
  appId: "1:224154830154:web:9c4d12f996cbd83afeedb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
