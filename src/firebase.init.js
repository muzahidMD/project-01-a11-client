// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUUcATIngYntyCBuWJnE4nsCx5aspy5to",
    authDomain: "eg-grocery.firebaseapp.com",
    projectId: "eg-grocery",
    storageBucket: "eg-grocery.appspot.com",
    messagingSenderId: "446209894429",
    appId: "1:446209894429:web:87b1fba50a82f682a5fef4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;