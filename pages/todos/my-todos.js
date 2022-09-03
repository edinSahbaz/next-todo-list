import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "./../../config/firebase-config";
import Head from "next/head";
import AuthError from "../../components/AuthError";
import Todo from "../../components/Todo";
import { useContext } from "react";
import { UserContext } from "./../../context/AuthContext";

const MyTodos = () => {
  const [todos, setTodos] = useState([]);
  const user = useContext(UserContext);
  const todosCollectionRef = collection(db, "Todos");

  useEffect(() => {
    const getData = () => {
      const q = query(todosCollectionRef, where("Author", "==", user.email));

      onSnapshot(q, (snapshot) => {
        let data = [];

        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setTodos(data);
      });
    };

    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Demo App | My Todos</title>
      </Head>
      {user ? (
        <div>
          <h1 className="title">{user.displayName} Todos</h1>
          <p className="text">This is a page where you can see your todos.</p>
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

export default MyTodos;
