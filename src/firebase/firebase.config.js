// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2f__hVvhs7umOjr8XtW_Dn5ENSM6GWgA",
  authDomain: "news-85359.firebaseapp.com",
  projectId: "news-85359",
  storageBucket: "news-85359.appspot.com",
  messagingSenderId: "290994144959",
  appId: "1:290994144959:web:0cc9f75c010bb05b33680a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;