// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDoc, doc } from "firebase/firestore"; 
import {increment, decrement, setDoc, updateDoc} from "firebase/firestore"
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
const app = initializeApp(firebaseConfig, );
const db = getFirestore(app)
// const profilesCollection = collection(db, "profiles")


export const reqPicture = async (profileId) => { //generate random number on frontend, use function for 2 times
  let profileRef = doc(db, 'profiles', profileId)
  const docSnap = await getDoc(profileRef)

  console.log(docSnap.data())
  return docSnap.data()
}

export const updateRank = async (profID, value) => {
	console.log(profID)
	let profileRef = doc(db, "profiles", profID)

	
	await updateDoc(profileRef, {
		Ranking: increment(value) //hello
	})
}

export const getAllProfiles = async () => {
  let profileRef = doc(db, 'profiles', "Profiles")
  const profileSnap = await getDoc(profileRef)
  console.log(profileSnap.data())
  return profileSnap.data()
}

export default {db, app}