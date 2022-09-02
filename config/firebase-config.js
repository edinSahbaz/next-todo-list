import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ9gG7Nvi9X_i9Lcv6otbEQn2f_y3ZXPw",
  authDomain: "nextjs-demo-app-7f86f.firebaseapp.com",
  projectId: "nextjs-demo-app-7f86f",
  storageBucket: "nextjs-demo-app-7f86f.appspot.com",
  messagingSenderId: "896345118793",
  appId: "1:896345118793:web:bc0245a52066f847b08798",
  measurementId: "G-M8VV77B15V",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
