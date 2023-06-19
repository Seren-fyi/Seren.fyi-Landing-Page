// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYrmyQjOt2YCs7lcQLvfGRKWqwSqSnQYU",
  authDomain: "seren-fyi.firebaseapp.com",
  projectId: "seren-fyi",
  storageBucket: "seren-fyi.appspot.com",
  messagingSenderId: "613530315548",
  appId: "1:613530315548:web:1a3d75abfa0c31b13fa8d9",
  measurementId: "G-HT4W4F2XJ2",
  storageBucket: "gs://seren-fyi.appspot.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
