import db from "./firebase.js"


// db = require('firebase')
//import { getDoc, getFirestore, increment, query, getDocs, collection, where, addDoc, doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove }  from "firebase/firestore";

const {increment, decrement, doc, setDoc, updateDoc} = require("firebase/firestore")
const createAvatar = async(fullname, imageUri) => {
	var profile = doc(db, "profiles");

	await setDoc(profile,{
		fullname:  fullname,
		imageUri: imageUri,
		rating: 1000
	})

	
}


const updateRank = async(profID, operation) => {
	console.log(profId)
	let profileRef = doc(db, "profiles", profID)
	console.log("hi", operation)
	if(operation == "increase") {
		await updateDoc(profileRef, {
			ranking: increment(1)
		})
	} else {
		await updateDoc(profileRef, {
			ranking: increment(-1)
		})
	}
}



export {createAvatar, updateRank}