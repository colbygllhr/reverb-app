export const environment = {
  production: true
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTB9NAxFwDp36gQSq0IoSQPJCMQJ0fw3w",
  authDomain: "reverb-app.firebaseapp.com",
  databaseURL: "https://reverb-app-default-rtdb.firebaseio.com",
  projectId: "reverb-app",
  storageBucket: "reverb-app.appspot.com",
  messagingSenderId: "491374298674",
  appId: "1:491374298674:web:8a014806bd9bb2be0ade2b",
  measurementId: "G-YS9ZSS4R5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);