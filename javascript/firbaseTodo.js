// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCH_qQKgvX04MCiInM0t-1el2gXoNc9YpI",
//   authDomain: "easylogin-69172.firebaseapp.com",
//   projectId: "easylogin-69172",
//   storageBucket: "easylogin-69172.appspot.com",
//   messagingSenderId: "507786873248",
//   appId: "1:507786873248:web:a4effc2440a8e81bfbfcc5",
//   measurementId: "G-X3G15GWG5T"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
  import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH_qQKgvX04MCiInM0t-1el2gXoNc9YpI",
  authDomain: "easylogin-69172.firebaseapp.com",
  projectId: "easylogin-69172",
  storageBucket: "easylogin-69172.appspot.com",
  messagingSenderId: "507786873248",
  appId: "1:507786873248:web:a4effc2440a8e81bfbfcc5",
  measurementId: "G-X3G15GWG5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = "ko";

document.getElementById("googleLogin").addEventListener("click", () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location.href =  'todo.html'
      console.log(result);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      // ...
    });
});