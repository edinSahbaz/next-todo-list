import { useContext, useState } from "react";
import AuthError from "../../components/AuthError";
import { UserContext } from "./../../context/AuthContext";
import { query, limit, collection, onSnapshot } from "firebase/firestore";
import { db } from "./../../config/firebase-config";
import Todo from "../../components/Todo";
import Head from "next/head";

const RandomTodos = () => {
  const user = useContext(UserContext);
  const [todos, setTodos] = useState([]);
  const [num, setNum] = useState(0);

  const todosCollectionRef = collection(db, "Todos");

  const getRandTodos = () => {
    const q = query(todosCollectionRef, limit(num));

    onSnapshot(q, (snapshot) => {
      let data = [];

      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setTodos(data);
    });
  };

  return (
    <>
      <Head>
        <title>Demo App | Random Todos</title>
      </Head>
      {user ? (
        <div>
          <h1 className="title">Random Todos</h1>
          <p className="text">
            Enter a number and <strong>GET</strong> that number of random todos.
          </p>

          <div className="container">
            <input
              type="number"
              defaultValue="1"
              onChange={(e) => setNum(e.target.value)}
              className="inputField num"
            />
            <div className="btn getTodo" onClick={getRandTodos}>
              Get Todos
            </div>
          </div>
          {todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
        </div>
      ) : (
        <AuthError />
      )}
    </>
  );
};

export default RandomTodos;
