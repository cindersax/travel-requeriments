// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEdvN9lczv-7PkrntDlHCgKaHOBsCni1M",
  authDomain: "linktri-50a25.firebaseapp.com",
  projectId: "linktri-50a25",
  storageBucket: "linktri-50a25.appspot.com",
  messagingSenderId: "807113923329",
  appId: "1:807113923329:web:f6861fd293eba7a00ed900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()



export {app,db,auth,storage}