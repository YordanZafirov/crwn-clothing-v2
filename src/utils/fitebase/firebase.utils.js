import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB3cZX0t1Dm1lzrSBehO9fLPFHIa6WvJHA",
    authDomain: "crwn-cloting-db-358b2.firebaseapp.com",
    projectId: "crwn-cloting-db-358b2",
    storageBucket: "crwn-cloting-db-358b2.appspot.com",
    messagingSenderId: "206113844296",
    appId: "1:206113844296:web:29269cdfefe8ca65257c7d",
    measurementId: "G-KLC2W8PSCY"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch(error) {
            console.log('error creating the user: ', error.message);
        }
    }

    return userDocRef;

    //if user data exists

    //if user data doesnt exist

    //return userDocRef
}