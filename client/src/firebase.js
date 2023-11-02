// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--estate-46d93.firebaseapp.com",
  projectId: "mern--estate-46d93",
  storageBucket: "mern--estate-46d93.appspot.com",
  messagingSenderId: "423340305640",
  appId: "1:423340305640:web:109b6a5128b0d3615e2d5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);