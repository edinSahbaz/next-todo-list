import styles from "./../styles/Todo.module.css";
import { db } from "../config/firebase-config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const Todo = ({ Title, Description, Completed, Author, id }) => {
  const todoDoc = doc(db, "Todos", id);

  const changeStatus = async () => {
    const newFields = { Completed: !Completed };
    await updateDoc(todoDoc, newFields);
  };

  const deleteTodo = async () => {
    await deleteDoc(todoDoc);
  };

  return (
    <div className={styles.todo}>
      <div>
        <h1>{Title}</h1>
        <p>{Description}</p>
        <p>Author: {Author}</p>
      </div>
      <div className={styles.actions}>
        Completed:
        <div onClick={changeStatus} className={styles.status}>
          {Completed ? <p>✔️</p> : <p>❌</p>}
        </div>
        <div onClick={deleteTodo} className={styles.status}>
          🗑️
        </div>
      </div>
    </div>
  );
};

export default Todo;
