const db = require('./firebase')
const profiles = require('./firebase')
// db = require('firebase')
//import { getDoc, getFirestore, increment, query, getDocs, collection, where, addDoc, doc, onSnapshot, setDoc, updateDoc, arrayUnion, arrayRemove }  from "firebase/firestore";

const {increment, doc, setDoc, updateDoc} = require("firebase/firestore")
const createAvatar = async(fullname, imageUri) => {
	var profile = doc(db, "profiles");

	await setDoc(profile,{
		fullname:  fullname,
		imageUri: imageUri,
		rating: 1000
	})

	
}


const updateRank = async(profID, operation ) => {
	let profile = doc(db, "profiles", profID)
	if(operation=="increase"){
		await updateDoc(profile, {
			ranking: increment(1)
		});
	}
	else if(operation == "decrease"){
		await updateDoc(profile, {
			ranking:decrement(-1)
		})
	}
}

let profA = doc(db, "profiles", "P1")
updateRank(profA.id, "increase")



// export const convertImage = async(imageUri) => {

// }