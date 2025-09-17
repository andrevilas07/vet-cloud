// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT03jffmGS1d4h4f49y3w2_wHnOr89xfM",
  authDomain: "vet-cloud-b2f28.firebaseapp.com",
  projectId: "vet-cloud-b2f28",
  storageBucket: "vet-cloud-b2f28.firebasestorage.app",
  messagingSenderId: "350545415442",
  appId: "1:350545415442:web:e69d271405a1b8acc6f7cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);
export { app, database, auth }