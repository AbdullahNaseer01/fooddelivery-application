



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDB7F9TDbfPzNbFTkk-BmpvemIPmKgj97g",
//   authDomain: "mycommerce-67280.firebaseapp.com",
//   projectId: "mycommerce-67280",
//   storageBucket: "mycommerce-67280.appspot.com",
//   messagingSenderId: "853674846443",
//   appId: "1:853674846443:web:bc50a0c02e6ebd25a7b6ae"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDwPiUqePxLqu9FTLga94RfUOTji3y9ydQ",
  authDomain: "hotel-management-46660.firebaseapp.com",
  projectId: "hotel-management-46660",
  storageBucket: "hotel-management-46660.appspot.com",
  messagingSenderId: "732212691438",
  appId: "1:732212691438:web:89eb4eeb9ea89671eaceff"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
