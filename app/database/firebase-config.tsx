// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Para projeto de escola - use configuração de demonstração
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "vet-cloud-demo.firebaseapp.com",
  projectId: "vet-cloud-demo",
  storageBucket: "vet-cloud-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);
export { app, database, auth }