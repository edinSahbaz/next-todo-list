import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../config/firebase-config";

const todosCollectionRef = collection(db, "Todos");

export default async function handler(req, res) {
  const newData = {
    Author: req.query.a,
    Title: req.query.t,
    Descritpion: req.query.d,
    Completed: false,
  };

  await addDoc(todosCollectionRef, newData);

  res.send(201);
}
