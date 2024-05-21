// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqk7H7MC4Jh4nKZUxVWVCTT6W3EMeOJqU",
  authDomain: "websiteproject-ff2e2.firebaseapp.com",
  projectId: "websiteproject-ff2e2",
  storageBucket: "websiteproject-ff2e2.appspot.com",
  messagingSenderId: "965693416943",
  appId: "1:965693416943:web:e38a145dc77fba6aba421a",
  measurementId: "G-YK5PZ9J4LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
});