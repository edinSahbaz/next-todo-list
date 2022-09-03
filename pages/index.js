import Link from "next/link";
import Head from "next/head";
import AuthForm from "../components/AuthForm";

export default function Home() {
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
      <AuthForm />
    </>
  );
}
