import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgCpIERt6fljTOmCUxvIKnINjGHpEpkL4",
    authDomain: "labtec-encuesta.firebaseapp.com",
    projectId: "labtec-encuesta",
    storageBucket: "labtec-encuesta.appspot.com",
    messagingSenderId: "356192607920",
    appId: "1:356192607920:web:0da7f45bc4f6917378a575"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);