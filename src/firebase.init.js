// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyCNW-TDYXV7PtDDjmNHpONHKA2MxhTM-AQ",
    authDomain: "doctors-portal-b3ca0.firebaseapp.com",
    projectId: "doctors-portal-b3ca0",
    storageBucket: "doctors-portal-b3ca0.appspot.com",
    messagingSenderId: "263340591970",
    appId: "1:263340591970:web:f3a8c286773732467cfa3b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;