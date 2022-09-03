import styles from "./../styles/Todo.module.css";
import { db, auth } from "../config/firebase-config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const Todo = ({ Title, Descritpion, Completed, Author, id }) => {
  const todoDoc = doc(db, "Todos", id);
  const user = auth?.currentUser?.email;
  const [newTitle, setNewTitle] = useState(Title);
  const [newDescr, setNewDescr] = useState(Descritpion);
  const [display, setDisplay] = useState(false);

  const changeStatus = async () => {
    const newFields = { Completed: !Completed };
    await updateDoc(todoDoc, newFields);
  };

  const deleteTodo = async () => {
    await deleteDoc(todoDoc);
  };

  const updateTodo = async () => {
    const newFields = { Title: newTitle, Descritpion: newDescr };
    await updateDoc(todoDoc, newFields);
  };

  return (
    <div>
      <div className={styles.todo}>
        <div>
          <h1>{Title}</h1>
          <p>{Descritpion}</p>
          <p>Author: {Author}</p>
        </div>
        {user === Author ? (
          <div className={styles.actions}>
            Completed:
            <div onClick={changeStatus} className={styles.status}>
              {Completed ? <p>✔️</p> : <p>❌</p>}
            </div>
            <div
              onClick={() => {
                setDisplay(!display);
              }}
              className={styles.status}
            >
              ✏️
            </div>
            <div onClick={deleteTodo} className={styles.status}>
              🗑️
            </div>
          </div>
        ) : (
          <div className={styles.actions}>
            Completed:
            {Completed ? <p>✔️</p> : <p>❌</p>}
          </div>
        )}
      </div>

      {display && (
        <div className="editTodo">
          <h1 className="title">Edit Todo</h1>
          <input
            placeholder="New Title"
            type="text"
            onChange={(e) => setNewTitle(e.target.value)}
            className="inputField"
          />
          <input
            placeholder="New Description"
            type="text"
            onChange={(e) => setNewDescr(e.target.value)}
            className="inputField"
          />
          <div className="btns">
            <div className="btn" onClick={updateTodo}>
              Save
            </div>
            <div
              className="btn"
              onClick={() => {
                setDisplay(!display);
              }}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
