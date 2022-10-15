// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDoc, doc } from "firebase/firestore"; 
import { getDoc, getFirestore, increment, query, getDocs, collection, where, addDoc, doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove }  from "firebase/firestore";

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
const profilesCollection = collection(db, "profiles")

<<<<<<< HEAD
=======

export const reqPicture = async (index) => { //generate random number on frontend, use function for 2 times
  let profileRef = doc(db, "profiles", index)
  const docSnap = await getDoc(profileRef);
  return docSnap.data
}
>>>>>>> c803318f8878b62efb67865cd92c455beea86010
