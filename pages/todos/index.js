import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import Todo from "../../components/Todo";
import { db } from "./../../config/firebase-config";

const Todos = () => {
  const todosCollectionRef = collection(db, "Todos");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {};

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  });

  return (
    <>
      <Head>
        <title>Demo App | Todos</title>
      </Head>
      <div>
        <div className="title">
          <h1>Todos</h1>
          <div className="btns">
            <div className="btn">Add Todo</div>
          </div>
        </div>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })}
      </div>
    </>
  );
};

export default Todos;
