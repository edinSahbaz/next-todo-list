import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AuthForm from "../components/AuthForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo App | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Welcome to this Next.js Demo App!</p>
        <Link href="/todos">
          <a className={styles.btn}>Open Todos Page</a>
        </Link>
      </div>
      <AuthForm />
    </>
  );
}
