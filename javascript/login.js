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

document.getElementById('googleLogin').addEventListener(('click'), (event) => {
  console.log(1111)
})
