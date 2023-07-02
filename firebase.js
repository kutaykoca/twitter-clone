// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_dWckRnFzY0-PVfp054JcYSt_vOkCv4",
  authDomain: "green-park-ec18e.firebaseapp.com",
  projectId: "green-park-ec18e",
  storageBucket: "green-park-ec18e.appspot.com",
  messagingSenderId: "1081969506222",
  appId: "1:1081969506222:web:987471053053c0a0427a3f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
