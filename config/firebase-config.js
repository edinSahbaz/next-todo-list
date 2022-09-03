import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyL0P_DiEyUvUPTJGLWF0Pjlsu8CmnM0Q",
  authDomain: "next-todo-demo-17ca8.firebaseapp.com",
  projectId: "next-todo-demo-17ca8",
  storageBucket: "next-todo-demo-17ca8.appspot.com",
  messagingSenderId: "540471563613",
  appId: "1:540471563613:web:155fa0afadc4dcc89dc4b4",
  measurementId: "G-035P29XRPE",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
