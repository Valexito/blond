// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlI__ZSg-jtwwbs4-KY4mBFpkDRSEK5lM",
  authDomain: "dolce-veleno-backery.firebaseapp.com",
  projectId: "dolce-veleno-backery",
  storageBucket: "dolce-veleno-backery.appspot.com",
  messagingSenderId: "125417063346",
  appId: "1:125417063346:web:6398d4f248b30c30625aab",
  measurementId: "G-B04127KPVY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)