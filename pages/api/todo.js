import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../config/firebase-config";

export default async function handler(req, res) {
  const Author = auth.currentUser.email;
  const Completed = false;
  const newData = { Author, Title, Descritpion, Completed };

  console.log(req.body.Author);

  const todosCollectionRef = collection(db, "Todos");

  await addDoc(todosCollectionRef, newData);
}
