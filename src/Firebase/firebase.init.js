// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcfVr8-cySbyeM4Q1lXE9xsGIN360gHik",
  authDomain: "bikers-headquarter-assignment.firebaseapp.com",
  projectId: "bikers-headquarter-assignment",
  storageBucket: "bikers-headquarter-assignment.appspot.com",
  messagingSenderId: "1004820881447",
  appId: "1:1004820881447:web:6aacc4099774608c276e02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;