// Import the functions you need from the SDKs you need
const  { initializeApp } = require("firebase-admin/app");
const { getFirestore, query, getDocs, collection, where, addDoc, doc, onSnapshot} = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzLQoCGIvxY56RuGWjnN_AIR_KtyJrd6k",
  authDomain: "mojismash.firebaseapp.com",
  projectId: "mojismash",
  storageBucket: "mojismash.appspot.com",
  messagingSenderId: "778440038880",
  appId: "1:778440038880:web:a71b1af9cffe09ab99f385",
  measurementId: "G-5JZ4Q4451Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const profiles = collection(db, "profiles");
// const analytics = getAnalytics(app);

//export { db, profiles }
