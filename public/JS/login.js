// Import Firebase
import firebase from "firebase/app";
import "firebase/auth";

// Get elements
const txtEmail = document.getElementById('username');
const txtPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');

// Add login event
btnLogin.addEventListener('click', e => {
  // Get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log('Not logged in');
  }
});