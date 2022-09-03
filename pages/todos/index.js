import { addDoc, collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import Todo from "../../components/Todo";
import { auth, db } from "./../../config/firebase-config";

const Todos = () => {
  const todosCollectionRef = collection(db, "Todos");
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState(false);

  const [Title, setTitle] = useState("");
  const [Descritpion, setDescription] = useState("");

  const showAdd = () => {
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
  };

  const addTodo = async () => {
    const Author = auth.currentUser.email;
    const Completed = false;
    const newData = { Author, Title, Descritpion, Completed };

    const todosCollectionRef = collection(db, "Todos");

    await addDoc(todosCollectionRef, newData);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [todos]);

  return (
    <>
      <Head>
        <title>Demo App | Todos</title>
      </Head>
      <div>
        <div className="title">
          <h1>Todos</h1>
          <div className="btns">
            <div className="btn" onClick={showAdd}>
              Add Todo
            </div>
          </div>
        </div>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </div>

      {display && (
        <div className="shadow">
          <div className="modal">
            <h1 className="title">Add todo</h1>
            <p className="text">Add your own todo!</p>
            <div className="registerForm">
              <input
                className="inputField"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
              />
              <input
                className="inputField"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                type="text"
              />
            </div>
            <div className="btns">
              <div className="btn" onClick={addTodo}>
                Add Todo
              </div>
              <div className="btn" onClick={closeModal}>
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todos;
