import Link from "next/link";
import Head from "next/head";
import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { UserContext } from "./../context/AuthContext";

export default function Home() {
  const user = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Demo App | Home</title>
      </Head>
      <div>
        <h1 className="title">Homepage</h1>
        <p className="text">Welcome to this Next.js Demo App!</p>
        <Link href="/todos">
          <a className="btn">Open Todos Page</a>
        </Link>
      </div>
      {!user && <AuthForm />}
    </>
  );
}
