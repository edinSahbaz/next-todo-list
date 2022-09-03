import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import Todo from "../../components/Todo";
import { auth, db } from "./../../config/firebase-config";
import { useContext } from "react";
import { UserContext } from "./../../context/AuthContext";
import { useRouter } from "next/router";

const Todos = () => {
  const todosCollectionRef = collection(db, "Todos");
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState(false);

  const [Title, setTitle] = useState("");
  const [Descritpion, setDescription] = useState("");

  const user = useContext(UserContext);
  const router = useRouter();

  const showAdd = () => {
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
  };

  const myTodos = () => {
    router.push("/todos/my-todos");
  };

  const addTodo = async () => {
    const Author = auth.currentUser.email;
    const Completed = false;
    const newData = { Author, Title, Descritpion, Completed };

    const todosCollectionRef = collection(db, "Todos");

    await addDoc(todosCollectionRef, newData);
  };

  useEffect(() => {
    const getData = () => {
      const q = query(todosCollectionRef);

      onSnapshot(q, (snapshot) => {
        let data = [];

        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setTodos(data);
      });
    };

    getData();

    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Demo App | Todos</title>
      </Head>
      <div>
        <div className="title">
          <h1>Todos</h1>
          {user && (
            <div className="group">
              <div className="btn" onClick={showAdd}>
                Add Todo
              </div>
              <div className="btn" onClick={myTodos}>
                My Todos
              </div>
            </div>
          )}
          <input type="text" className="searchBox" placeholder="Search..." />
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
