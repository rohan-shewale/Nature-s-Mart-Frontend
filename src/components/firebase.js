// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCffEp5BzDRrRbC9dtAcLY7YAlU0suWe-g",
  authDomain: "naturesmart-f98d3.firebaseapp.com",
  projectId: "naturesmart-f98d3",
  storageBucket: "naturesmart-f98d3.appspot.com",
  messagingSenderId: "703898028673",
  appId: "1:703898028673:web:64b8c31864f025efd51b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
//export const db = getFirestore(app);