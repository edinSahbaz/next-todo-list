import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJQaSm2aMPPMLaNqAAB13J9Te1Zw8Bvck",
  authDomain: "nextjs-todo-88559.firebaseapp.com",
  projectId: "nextjs-todo-88559",
  storageBucket: "nextjs-todo-88559.appspot.com",
  messagingSenderId: "838545617497",
  appId: "1:838545617497:web:bf0b54381343f9b7bc3748",
  measurementId: "G-8CGRHM4Z78",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
