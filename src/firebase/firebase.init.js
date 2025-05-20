// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeWYamAn2CmdbnTWlMtH5vMHJi716pNaQ",
  authDomain: "roommate-finder-app-94a34.firebaseapp.com",
  projectId: "roommate-finder-app-94a34",
  storageBucket: "roommate-finder-app-94a34.firebasestorage.app",
  messagingSenderId: "135833523699",
  appId: "1:135833523699:web:fea9b5e472d41789a02e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;