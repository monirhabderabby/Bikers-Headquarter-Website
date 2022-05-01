import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr-ph8_xpwH6TX2LFRWWhax6qB9QV8uRA",
  authDomain: "bikers-headquarter.firebaseapp.com",
  projectId: "bikers-headquarter",
  storageBucket: "bikers-headquarter.appspot.com",
  messagingSenderId: "743601891296",
  appId: "1:743601891296:web:7e39b4301427fbf5516d85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;