// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyi8lfae2voS4WYelK2gBY-d7UpCIi1I",
  authDomain: "texter-aaf16.firebaseapp.com",
  projectId: "texter-aaf16",
  storageBucket: "texter-aaf16.appspot.com",
  messagingSenderId: "878093767475",
  appId: "1:878093767475:web:9e24906717eeaad69a2446",
  measurementId: "G-YPFNNJ18C5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();


