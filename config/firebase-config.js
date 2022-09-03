import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKqntVn8424G12Dgex6kl9EOGCBRFpJgQ",
  authDomain: "nextjs-firebase-todo-demo.firebaseapp.com",
  projectId: "nextjs-firebase-todo-demo",
  storageBucket: "nextjs-firebase-todo-demo.appspot.com",
  messagingSenderId: "59146517359",
  appId: "1:59146517359:web:181c2d78909ad7624b069a",
  measurementId: "G-MCHNT76DYG",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
