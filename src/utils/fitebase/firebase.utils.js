import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async(
    userAuth, 
    additionalInformation = {},
    ) =>{
    if(!userAuth) return;
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
                ...additionalInformation,
            })
        } catch(error) {
            console.log('error creating the user: ', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async(email, password) =>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)